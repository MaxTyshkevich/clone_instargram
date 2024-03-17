import Link from 'next/link';
import React from 'react';
import { UserAvatar } from '../UserAvatar';
import { CommentsWithExtras } from '@/app-type';
import { TimeStamp } from '../TimeStamp';
import { Button } from '../ui/button';

type CommentProps = {
  comment: CommentsWithExtras;
};

export const Comment = ({ comment }: CommentProps) => {
  const userComment = comment.user;
  return (
    <div className="group p-3 flex items-center space-x-2.5">
      <Link href={`/dashboard/${userComment.username}`}>
        <UserAvatar imageSrc={userComment.image} />
      </Link>

      <div className="space-y-1.5">
        <div className="flex items-center text-sm space-x-1.5 leading-none">
          <Link
            href={`/dashboard/${userComment.username}`}
            className="font-semibold"
          >
            {userComment.username}
          </Link>
          <p className="font-medium">{comment.body}</p>
        </div>
        <div className="flex items-center">
          <TimeStamp data={comment.createdAt} />
          <Button className="text-xs" variant={'link'}>
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
};
