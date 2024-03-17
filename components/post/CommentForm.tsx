'use client';

import React, { RefObject } from 'react';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { CreateCommentSchema } from '@/lib/schemas';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { addComment, createPostAction } from '@/lib/actions';

type CommentFormProps = {
  postId: string;
  className?: string;
  inputRef?: RefObject<HTMLInputElement>;
};
export const CommentForm = ({ postId, className }: CommentFormProps) => {
  const form = useForm<z.infer<typeof CreateCommentSchema>>({
    resolver: zodResolver(CreateCommentSchema),
    defaultValues: {
      body: '',
    },
  });

  const body = form.watch('body');
  console.log({ body });

  async function onSubmit({ body }: z.infer<typeof CreateCommentSchema>) {
    const newPost = {
      body,
      postId,
    };
    console.log(newPost);

    await addComment(newPost);
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'relative flex items-center space-x-2 border-b border-gray-200 dark:border-neutral-800 p-3',
          className
        )}
      >
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Add a message"
                  {...field}
                  className="bg-transparent text-sm border-none focus-visible:ring-offset-0 focus:outline-none focus-visible:ring-0 flex-1 dark:text-neutral-400 placeholder-neutral-400 font-medium disabled:opacity-30"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!body.trim().length || form.formState.isSubmitting}
          type="submit"
          variant={'post'}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
