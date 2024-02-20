'use server';
import { UTApi } from 'uploadthing/server';
import { auth, getAuthUserId } from '@/auth';
import prisma from './prisma';
import { CreatePostData, CreatePostSchema } from './schemas';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const utapi = new UTApi();

export const createPostAction = async (values: CreatePostData) => {
  const session = await auth();

  if (!session) {
    throw Error('Autorized Error!');
  }
  const { id: userId } = session.user;

  const validatedFields = CreatePostSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Post.',
    };
  }

  try {
    await prisma.post.create({
      data: {
        ...validatedFields.data,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Post.',
    };
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
};

export const likePost = async (postId: string) => {
  const userId = await getAuthUserId();

  const foundPost = await prisma.post.findFirst({
    where: {
      id: postId,
    },
    include: {
      likes: true,
    },
  });

  if (!foundPost) {
    throw Error('not found Post');
  }

  const isLiked = foundPost.likes.find((like) => like.userId === userId);
  console.log({ isLiked });
  if (isLiked) {
    await prisma.like.delete({
      where: {
        postId_userId: {
          postId,
          userId,
        },
      },
    });
  } else {
    await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
  }

  revalidatePath('/dashboard');
};

type ActionResult = {
  ok: boolean;
  message: string;
};

export const deletePost = async (postId: string): Promise<ActionResult> => {
  const userId = await getAuthUserId();

  try {
    const postDeleted = await prisma.post.delete({
      where: {
        id: postId,
        userId: userId,
      },
    });

    const { pathname } = new URL(postDeleted.fileUrl);
    const imageName = pathname.slice(pathname.lastIndexOf('/') + 1);

    console.log({ pathname, imageName });
    deleteImagePost(imageName);

    revalidatePath('/dashboard');

    return {
      ok: true,
      message: 'delete post',
    };
  } catch (error) {
    return {
      ok: false,
      message: "You don't have delete post!",
    };
  }
};

const deleteImagePost = async (imageId: string) => {
  console.log('started!');
  const res = await utapi.deleteFiles(imageId);

  console.log({ res });
  return res ? 'file deleted' : 'file not been deleted';
};

export const addComment = async ({
  body,
  postId,
}: {
  body: string;
  postId: string;
}) => {
  try {
    const userId = await getAuthUserId();
    await prisma.comment.create({
      data: {
        userId,
        postId,
        body,
      },
    });
    revalidatePath('/dashboard');
  } catch (error) {}
};

export const bookmarkPost = async (postId: string) => {
  try {
    const userId = await getAuthUserId();

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return { message: 'Post not found!' };
    }

    const bookmark = await prisma.savedPost.findUnique({
      where: {
        postId_userId: {
          postId,
          userId,
        },
      },
    });

    if (!bookmark) {
      await prisma.savedPost.create({
        data: {
          postId,
          userId,
        },
      });
    } else {
      await prisma.savedPost.delete({
        where: {
          postId_userId: {
            postId,
            userId,
          },
        },
      });
    }

    revalidatePath('/dashboard');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Bookmark Post.',
    };
  }
};
