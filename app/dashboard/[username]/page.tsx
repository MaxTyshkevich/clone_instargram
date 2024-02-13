import { PostsGrid } from '@/components/PostsGrid';
import { fetchPostByUsername } from '@/lib/fetch-database';
import React from 'react';

type ProfilePageType = {
  params: {
    username: string;
  };
};
const ProfilePage = async ({ params: { username } }: ProfilePageType) => {
  const posts = await fetchPostByUsername(username);

  return <PostsGrid posts={posts} />;
};

export default ProfilePage;
