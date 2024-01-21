import { z } from 'zod';

export const PostSchema = z.object({
  id: z.string(),
  fileUrl: z.string().url({ message: 'File URL must be a valid!' }),
  caption: z.string({}).optional(),
});

export const CreatePostSchema = PostSchema.omit({ id: true });
export type CreatePostData = z.infer<typeof CreatePostSchema>;

export const UpdatePostSchema = PostSchema.omit({ fileUrl: true });
export const DeletePostSchema = PostSchema.pick({ id: true });
