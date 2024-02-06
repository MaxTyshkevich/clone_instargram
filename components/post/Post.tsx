import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserAvatar } from '../UserAvatar';
import { PostWithExtras } from '@/app-type';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { PostComments } from './PostComments';
import { TimeStamp } from '../TimeStamp';
import { PostOptions } from './PostOptions';
import { PostActions } from './PostActions';
import { getAuthUserId } from '@/auth';

type PropsPost = { post: PostWithExtras };

export const Post = async ({ post }: PropsPost) => {
  const userId = await getAuthUserId();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-start gap-x-2">
        <UserAvatar imageSrc={post.user.image} name={post.user.name} />
        <CardDescription className="text-sm flex items-center gap-x-1 font-medium text-neutral-500 dark:text-neutral-400">
          <Link href={`/dashboard/${post.user.username}`} className="font-bold">
            {post.user.username}
          </Link>
          <span className="font-medium text-neutral-500 dark:text-neutral-400 text-xs">
            •
          </span>
          <TimeStamp data={post.createdAt} />
        </CardDescription>
        <PostOptions
          post={post}
          userId={userId}
          className="ml-auto text-neutral-500 dark:text-neutral-400"
        />
      </CardHeader>

      <div className="relative h-[450px] overflow-hidden rounded-none sm:rounded-sm">
        <Image
          className="object-cover"
          src={post.fileUrl}
          fill
          alt={post.caption ?? 'image post'}
        />
      </div>
      <CardContent>
        <PostActions post={post} userId={userId} />

        {post.caption && (
          <div className="">
            <Link
              href={`/dashboard/${post.user.username}`}
              className="font-bold inline-block"
            >
              {post.user.username}
            </Link>
            <p>{post.caption}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <PostComments comments={post.comments} postId={post.id} />
      </CardFooter>
    </Card>
  );
};
