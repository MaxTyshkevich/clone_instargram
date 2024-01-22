'use server';

import { auth } from '@/auth';
import prisma from './prisma';
import { CreatePostData, CreatePostSchema } from './schemas';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createPostAction = async (values: CreatePostData) => {
  const session = await auth();

  if (!session) {
    throw Error('Autorized Error!');
  }
  const { id: userId } = session.user;

  console.log(`asda`);
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
