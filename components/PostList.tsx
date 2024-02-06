import React from 'react';
import { Post } from './post/Post';
import { getPosts } from '@/lib/fetch-database';
type S = {};

export const PostList = async () => {
  // loading post
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-y-5">
      {!!posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};
