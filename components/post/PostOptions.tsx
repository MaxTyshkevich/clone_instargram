'use client';

import { PostWithExtras } from '@/app-type';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SubmitButton } from './SubmitButton';
import { deletePost } from '@/lib/actions';
import { toast } from 'sonner';
import { useState } from 'react';
import Link from 'next/link';

type PostOptionsProps = {
  post: PostWithExtras;
  userId: string;
  className?: string;
};

export const PostOptions = ({ className, post, userId }: PostOptionsProps) => {
  const isPostUser = post.userId === userId;
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger className="" asChild>
        <MoreHorizontal
          className={cn(
            'w-5 h-5 cursor-pointer dark:text-neutral-400',
            className
          )}
        />
      </DialogTrigger>
      <DialogContent className="dialogContent">
        {isPostUser && (
          <form
            action={async () => {
              const result = await deletePost(post.id);
              setOpen(false);
              if (result.ok) {
                return toast.success(result.message);
              }
              return toast.error(result.message);
            }}
          >
            <SubmitButton className="text-red-500 font-bold disabled:cursor-not-allowed w-full p-3">
              Delete post
            </SubmitButton>
          </form>
        )}

        {isPostUser && (
          <Link
            scroll={false}
            href={`/dashboard/p/${post.id}/edit`}
            className="postOption p-3"
          >
            Edit
          </Link>
        )}
      </DialogContent>
    </Dialog>
  );
};
