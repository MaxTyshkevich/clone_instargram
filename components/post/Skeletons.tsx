import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '../ui/card';

export const PostSkeleton = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full"></Skeleton>

        <div className="space-y-2 flex-grow">
          <Skeleton className="h-4"></Skeleton>
          <Skeleton className="h-4"></Skeleton>
        </div>
      </div>
      <Skeleton className="h-[400px]"></Skeleton>
    </div>
  );
};

export const PostSkeletons = () => (
  <>
    <PostSkeleton />
    <PostSkeleton />
    <PostSkeleton />
    <PostSkeleton />
  </>
);

const UserAvatarSkeleton = () => (
  <div className="flex items-center space-x-2">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  </div>
);

export const SinglePostSkeleton = () => {
  return (
    <Card className="max-w-3xl lg:max-w-4xl mx-auto hidden md:flex">
      <div className="relative overflow-hidden h-[450px] max-w-sm lg:max-w-lg w-full">
        <Skeleton className="h-full w-full"></Skeleton>
      </div>
      <div></div>
      <div>
        <UserAvatarSkeleton />
        <UserAvatarSkeleton />
        <UserAvatarSkeleton />
        <UserAvatarSkeleton />
      </div>
    </Card>
  );
};
