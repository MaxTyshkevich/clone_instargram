'use client';
import Image from 'next/image';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { CreatePostSchema } from '@/lib/schemas';
import { UploadButton } from '@/lib/uploadthing';
import useMount from '@/hooks/useMount';
import { toast } from 'sonner';
import { createPostAction } from '@/lib/actions';

const CreatePage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof CreatePostSchema>>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      fileUrl:
        'https://utfs.io/f/c8ca78ed-5499-40b4-92ef-058d23192f29-1sfc8.png',
      caption: undefined,
    },
  });

  const mount = useMount();
  if (mount) null;

  const fileUrl = form.watch('fileUrl');

  async function onSubmit(values: z.infer<typeof CreatePostSchema>) {
    const res = await createPostAction(values);
    if (res) {
      toast.error(res.message);
    }
  }

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create new Post</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {!!fileUrl ? (
              <div className="rounded-md overflow-hidden">
                <AspectRatio ratio={1 / 1} className="relative h-full">
                  <Image
                    src={fileUrl}
                    fill
                    alt="Post Preview"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            ) : (
              <div>
                <FormField
                  control={form.control}
                  name="fileUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Picture</FormLabel>
                      <FormControl>
                        <UploadButton
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            console.log({ res, form });

                            form.setValue('fileUrl', res[0].url);
                            toast.success(`Uploading Complite`);
                          }}
                          onUploadError={(error: Error) => {
                            console.error(error);
                            toast.error(`Uploading Filied`);
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        upload a picture to post
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {!!fileUrl && (
              <FormField
                control={form.control}
                name="caption"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="caption">Picture</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Write a caption..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Create Post
            </Button>
          </form>
        </Form>

        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePage;