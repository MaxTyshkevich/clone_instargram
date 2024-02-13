import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { ScrollArea } from '@/components/ui/scroll-area';
import { getPostById } from '@/lib/fetch-database';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PostOptions } from '@/components/post/PostOptions';
import { getAuthUserId } from '@/auth';
import { Comment } from '@/components/post/Comment';
import { MiniPost } from '@/components/post/MiniPost';
import Link from 'next/link';
import { UserAvatar } from '@/components/UserAvatar';

export const SinglePost = async ({ postId }: { postId: string }) => {
  const userId = await getAuthUserId();
  const post = await getPostById(postId);

  if (!post) {
    notFound();
  }
  console.log({ post, commentslength: post.comments.length });
  return (
    <Card className="flex">
      <div className="relative overflow-hidden h-[450px] w-full max-w-sm lg:max-w-lg">
        <Image
          src={post.fileUrl}
          fill
          alt={`post view`}
          className="md:rounded-l-md object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 max-w-sm">
        <div className="flex items-center justify-between">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link href={`/dashboard/${post.user.username}`}>
                {post.user.username}
              </Link>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex items-center space-x-2">
                <UserAvatar imageSrc={post.user.image} className="h-14 w-14" />

                <div>
                  <p className="font-bold">{post.user.username}</p>
                  <p className="text-sm font-medium dark:text-neutral-400">
                    {post.user.name}
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {post.comments.length === 0 && (
          <div className="flex flex-col items-center gap-1.5 flex-1 justify-center">
            <p className="text-xl lg:text-2xl font-extrabold">
              No comments yet.
            </p>
            <p className="text-sm font-medium">Start the conversation.</p>
          </div>
        )}

        {post.comments.length > 0 && (
          <ScrollArea className="hidden md:inline py-1.5 flex-1">
            <MiniPost post={post} />
            {post.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ScrollArea>
        )}
      </div>
    </Card>
  );
};
