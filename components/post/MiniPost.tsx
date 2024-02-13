'use client';

import { PostWithExtras } from '@/app-type';
import { useSession } from 'next-auth/react';
import React from 'react';
import { PostOptions } from './PostOptions';
import { TimeStamp } from '../TimeStamp';
import Link from 'next/link';
import { UserAvatar } from '../UserAvatar';

export const MiniPost = ({ post }: { post: PostWithExtras }) => {
  const { data: session, status } = useSession();
  const user = session?.user;

  if (!user) return null;

  console.log({ post, session, status, user });
  return (
    <div className="group p-3 px-3.5 flex items-start space-x-2.5">
      <Link href={`/dashboard/${post.user.username}`}>
        <UserAvatar imageSrc={post.user.image} />
      </Link>

      <div className="space-y-1.5">
        <Link href={`/dashboard/${post.user.username}`}>
          {post.user.username}
        </Link>

        <p className="font-medium">{post.caption}</p>
      </div>

      <div className="flex h-5 items-center space-x-2.5">
        <TimeStamp data={post.createdAt} />
        <PostOptions
          post={post}
          userId={user.id}
          className="hidden group-hover:inline"
        />
      </div>
    </div>
  );
};
