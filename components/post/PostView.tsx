'use client';
import { PostWithExtras } from '@/app-type';
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog';
import Link from 'next/link';
import { UserAvatar } from '../UserAvatar';
import { PostActions } from './PostActions';
import Image from 'next/image';
import { ScrollArea } from '../ui/scroll-area';
import { useRouter } from 'next/navigation';
import { Comment } from '@/components/post/Comment';
import { MiniPost } from './MiniPost';
import { CommentForm } from './CommentForm';
import { useRef } from 'react';
type PostViewProps = {
  post: PostWithExtras;
};

export const PostView = ({ post }: PostViewProps) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = post;

  return (
    <Dialog open onOpenChange={(open) => !open && router.back()}>
      <DialogContent className="flex gap-0 flex-col md:flex-row items-start md:max-w-3xl lg:max-w-5xl xl:max-w-6xl h-full max-h-[500px] lg:max-h-[700px] xl:max-h-[800px]">
        <div className="flex flex-col justify-between md:h-full md:order-2 w-full max-w-md">
          <DialogHeader className="flex-row item-center border-b space-y-0 space-x-2.5 pl-3.5 pr-6">
            <Link href={`/dashboard/${user.username}`}>
              <UserAvatar imageSrc={user.image} />
            </Link>
            <Link
              className="font-semibold text-sm"
              href={`/dashboard/${user.username}`}
            >
              {user.username}
            </Link>
          </DialogHeader>
          <ScrollArea className="hidden md:inline border-b flex-1 py-1.5 h-11">
            <MiniPost post={post} />
            {post.comments.length > 0 &&
              post.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
          </ScrollArea>
          <div className="px-2 hidden md:block mt-auto border-b p-2.5">
            <PostActions post={post} userId={user?.id} />
            <time className="text-[11px]  uppercase text-zinc-500 font-medium">
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <CommentForm
            postId={post.id}
            className="hidden md:inline-flex"
            inputRef={inputRef}
          />
        </div>
        <div className="relative overflow-hidden h-full max-w-3xl w-full">
          <Image
            src={post.fileUrl}
            fill
            objectFit="cover"
            alt={`Post of ${user.username}`}
          />
        </div>
        <PostActions post={post} userId={user.id} className="md:hidden" />
      </DialogContent>
    </Dialog>
  );
};
