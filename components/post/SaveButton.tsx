'use client';

import React, { useOptimistic } from 'react';
import { ActionButton } from './ActionButton';
import { Bookmark } from 'lucide-react';
import { PostWithExtras } from '@/app-type';
import { SavedPost } from '@prisma/client';
import { cn } from '@/lib/utils';
import { bookmarkPost } from '@/lib/actions';
import { toast } from 'sonner';

type SaveButtonProps = {
  post: PostWithExtras;
  userId?: string;
};

export const SaveButton = ({ post, userId }: SaveButtonProps) => {
  const predicate = (bookmark: SavedPost) =>
    bookmark.userId === userId && bookmark.postId === post.id;

  const [optimisticBookmarks, setOptimisticBookmarks] = useOptimistic<
    SavedPost[]
  >(
    post.savedBy,
    // @ts-ignore
    (state: SavedPost[], newBookmark: SavedPost) =>
      state.find(predicate)
        ? state.filter((bookmark) => bookmark.userId !== userId)
        : [...state, newBookmark]
  );
  return (
    <form
      action={async () => {
        const postId = post.id;
        setOptimisticBookmarks({ postId, userId });

        const errorAction = await bookmarkPost(postId);

        if (errorAction) {
          toast.error(errorAction.message);
        }
      }}
    >
      <ActionButton>
        <Bookmark
          className={cn('h-6 w-6', {
            'dark:fill-white fill-black': optimisticBookmarks.some(predicate),
          })}
        />
      </ActionButton>
    </form>
  );
};
