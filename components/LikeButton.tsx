'use client';
import { useOptimistic } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PostWithExtras } from '@/app-type';
import { likePost } from '@/lib/actions';
import { Button } from './ui/button';
import { Like } from '@prisma/client';
import { ActionButton } from './post/ActionButton';
type LikeButtonProps = {
  post: PostWithExtras;
  userId?: string;
};
export const LikeButton = ({ post, userId }: LikeButtonProps) => {
  const predicat = (link: Like) => link.userId === userId;
  const [optimisticLikes, addOptimisticLike] = useOptimistic<Like[]>(
    post.likes,
    // @ts-ignore
    (state: Like[], newLike: Like) => {
      return state.some(predicat)
        ? state.filter((like) => like.userId !== userId)
        : [...state, newLike];
    }
  );

  return (
    <form
      action={async () => {
        addOptimisticLike({
          postId: post.id,
          userId,
        });
        await likePost(post.id);
      }}
    >
      <ActionButton>
        <Heart
          className={cn('cursor-pointer', {
            'fill-red-600 stroke-red-600': optimisticLikes.some(predicat),
          })}
        />
      </ActionButton>
    </form>
  );
};
