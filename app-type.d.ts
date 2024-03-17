import type { Comment, Like, Post, User, Follows } from '@prisma/client';

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

export type UserWithFollows = User & {
  following: Follows[];
  followedBy: Follows[];
};

export type FollowerWithExtras = Follows & { follower: UserWithFollows };
export type FollowingWithExtras = Follows & { following: UserWithFollows };

export type UserWithExtras = User & {
  posts: Post[];
  saved: SavedPost[];
  followedBy: FollowerWithExtras[];
  following: FollowingWithExtras[];
};
