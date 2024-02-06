'use client';
import type { Comment } from '@prisma/client';
import { ChangeEvent, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { addComment } from '@/lib/actions';

export const PostComments = ({
  comments,
  postId,
}: {
  comments: Comment[];
  postId: string;
}) => {
  const [postValue, setPostValue] = useState('');
  console.log({ comments });

  return (
    <div className="flex flex-grow">
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>{comment.body}</div>
        ))}
      </div>

      <form
        action={async () => {
          const result = await addComment({
            body: postValue,
            postId,
          });
        }}
        className="flex flex-grow relative"
      >
        <Input
          type="text"
          placeholder="add a comment..."
          className="w-full"
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
            setPostValue(value)
          }
        />
        <Button
          className={cn('absolute right-2 dark:text-primary hidden', {
            ['flex']: postValue,
          })}
          variant={'link'}
        >
          Post
        </Button>
      </form>
    </div>
  );
};
