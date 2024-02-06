import type { Comment, Like, Post, User } from '@prisma/client';

export type PostWithExtras = Post & {
  user: User;
  likes: LikeWithExtras[];
  comments: CommentsWithExtras[];
  savedBy: SavedPost[];
};

export type CommentsWithExtras = Comment & {
  user: User;
};

export type LikeWithExtras = Like & {
  user: User;
};

export type createLikeSchema = Pick<Like, 'postId' | 'userId'>;
