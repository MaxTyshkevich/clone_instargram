import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '../ui/card';
import { Dialog, DialogContent } from '../ui/dialog';

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
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

export const SinglePostSkeleton = () => {
  return (
    <Card className="max-w-3xl lg:max-w-4xl mx-auto hidden md:flex">
      <div className="relative overflow-hidden h-[450px] max-w-sm lg:max-w-lg w-full">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex max-w-sm flex-col flex-1">
        <div className="flex items-center justify-between border-b px-5 py-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
          </div>
        </div>

        <div className="px-5 space-y-3 mt-8">
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
        </div>
      </div>
    </Card>
  );
};

export const ViewPostSkeleton = () => {
  return (
    <Dialog open>
      <DialogContent className="flex gap-0 flex-col md:flex-row items-start p-0 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl h-full max-h-[500px] lg:max-h-[700px] xl:max-h-[800px]">
        <Skeleton className="relative overflow-hidden h-96 md:h-[500px] lg:h-[700px] xl:h-[800px] max-w-3xl w-full rounded-r-none" />

        <div className="flex flex-col h-full py-4 pl-3.5 pr-6 flex-1">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>

          <Skeleton className="flex-1 my-4" />

          <div className="flex items-center w-full space-x-4">
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-full flex-1" />
              <Skeleton className="h-4 w-[300px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
