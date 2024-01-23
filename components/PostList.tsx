import React from 'react';
import { Post } from './Post';
import { getPosts } from '@/lib/fetch-database';
type S = {};

export const PostList = async () => {
  // loading post
  const posts = await getPosts();

  console.log({ posts, post: posts?.[0] });

  return (
    <div>
      {!!posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};
