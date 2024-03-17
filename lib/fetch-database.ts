'use server';

import { PostWithExtras, UserWithExtras } from '@/app-type';
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

export const getPostById = async (
  postId: string
): Promise<PostWithExtras | null> => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
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
  });
  /*  throw Error('my error') */
  return post;
};

export const fetchPostByUsername = async (
  username: string,
  postId?: string
): Promise<PostWithExtras[]> => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        user: {
          username,
        },
      },

      include: {
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        likes: {
          include: {
            user: true,
          },
        },
        savedBy: true,
        user: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });

    return posts;
  } catch (error) {
    throw Error('Failed to fetch post');
  }
};

export async function fetchProfile(
  username: string
): Promise<UserWithExtras | null> {
  try {
    const data = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        posts: {
          orderBy: {
            createdAt: 'desc',
          },
        },
        saved: {
          orderBy: {
            createdAt: 'desc',
          },
        },
        followedBy: {
          include: {
            follower: {
              include: {
                following: true,
                followedBy: true,
              },
            },
          },
        },
        following: {
          include: {
            following: {
              include: {
                following: true,
                followedBy: true,
              },
            },
          },
        },
      },
    });

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch profile');
  }
}
