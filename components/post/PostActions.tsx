import { PostWithExtras } from '@/app-type';
import React from 'react';
import { cn } from '@/lib/utils';
import { LikeButton } from '../LikeButton';
import { MessageButton } from './MessageButton';
import { SendButton } from './SendButton';
import { SaveButton } from './SaveButton';

type PostActionsProps = {
  post: PostWithExtras;
  userId: string;
  className?: string;
};

export const PostActions = async ({
  post,
  className,
  userId,
}: PostActionsProps) => {
  const likesCount = post.likes.length;

  const textLikes = likesCount === 1 ? 'like' : 'likes';

  return (
    <div className={cn('relative', className)}>
      <div className="flex flex-grow  justify-between">
        <div className="flex">
          <LikeButton post={post} userId={userId} />
          <MessageButton postId={post.id} />
          <SendButton postId={post.id} />
        </div>
        <SaveButton />
      </div>
      {!!likesCount && (
        <div className="text-sm font-medium">
          {likesCount} {textLikes}
        </div>
      )}
    </div>
  );
};
