'use server';

import prisma from '@/lib/prisma';

export const getPosts = () => {
  try {
    const posts = prisma.post.findMany({
      include: {
        user: true,
        likes: true,
        comments: true,
      },
    });

    return posts;
  } catch (error) {}
};

getPosts();

/* 
 id: 'clrpkpzk60002k7u7y5btmelo',
      createdAt: 2024-01-22T23:43:48.295Z,
      updatedAt: 2024-01-22T23:43:48.295Z,
      caption: 'lalala',
      fileUrl: 'https://utfs.io/f/219c3797-7fd3-4c2d-b0bd-001eb158a78a-rtrlts.png',
      userId: 'clr6450kb0000zdh22jfl04k0'
*/
