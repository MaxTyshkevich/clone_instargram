'use client';

import { ChangeEvent, useOptimistic, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { addComment } from '@/lib/actions';
import { CommentsWithExtras } from '@/app-type';
import Link from 'next/link';
import { User } from '@auth/core/types';

export const PostComments = ({
  comments,
  postId,
  user,
}: {
  comments: CommentsWithExtras[];
  postId: string;
  user: User;
}) => {
  const [postValue, setPostValue] = useState('');
  console.log({ comments });

  const [optimisticComments, addOptimisticComments] = useOptimistic<
    CommentsWithExtras[]
  >(
    comments,
    // @ts-ignore
    (state, newComments) => {
      return [newComments, ...state];
    }
  );

  const commentsCount = optimisticComments.length;
  return (
    <div className="space-y-0.5 px-3 sm:px-0 flex flex-col flex-grow">
      {commentsCount > 1 && (
        <Link href={`/dashboard/p/${postId}`}>
          {' '}
          View all {commentsCount} comments
        </Link>
      )}
      <div>
        {optimisticComments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="text-start flex items-center space-x-2 font-medium"
            >
              <Link
                href={`/dashboard/${comment.user.username}`}
                className="font-semibold"
              >
                {comment.user.username}
              </Link>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>

      <form
        className="flex flex-grow relative pt-4"
        action={async () => {
          const post = {
            body: postValue,
            postId,
            user,
          };
          setPostValue('');
          addOptimisticComments(post);
          await addComment(post);
        }}
      >
        <Input
          type="text"
          placeholder="add a comment..."
          className="w-full"
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
            setPostValue(value)
          }
        />
        <Button
          className={cn('absolute right-2 dark:text-primary hidden', {
            ['flex']: postValue,
          })}
          variant={'link'}
        >
          Post
        </Button>
      </form>
    </div>
  );
};
