import { Like } from '@prisma/client';
import { z } from 'zod';

export const PostSchema = z.object({
  id: z.string(),
  fileUrl: z
    .string({
      required_error: 'Upload image for your Post',
    })
    .url({ message: 'File URL must be a valid!' }),
  caption: z.string({}).optional(),
});

export const CreatePostSchema = PostSchema.omit({ id: true });
export type CreatePostData = z.infer<typeof CreatePostSchema>;

export const UpdatePostSchema = PostSchema.omit({ fileUrl: true });
export const DeletePostSchema = PostSchema.pick({ id: true });

export const CreateCommentSchema = z.object({
  body: z.string().trim().min(1),
});

export const UserSchema = z.object({
  id: z.string(),
  username: z.string().optional(),
  name: z.string().optional(),
  image: z.string().optional(),
  bio: z.string().optional(),
  website: z.string().optional(),
  gender: z.string().optional(),
});
