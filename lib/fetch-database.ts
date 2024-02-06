'use server';

import { PostWithExtras } from '@/app-type';
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export const getPosts = (): Prisma.PrismaPromise<PostWithExtras[]> => {
  try {
    const posts = prisma.post.findMany({
      include: {
        user: true,
        likes: {
          include: { user: true },
        },
        comments: {
          include: { user: true },
          orderBy: {
            createdAt: 'desc',
          },
        },

        savedBy: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });

    return posts;
  } catch (error) {
    console.log(`Database error:`, error);
    throw Error('Failed to fetch post');
  }
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
