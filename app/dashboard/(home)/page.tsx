import { PostSkeleton } from '@/components/PostSkeleton';
import { PostList } from '@/components/PostList';
import { Suspense } from 'react';

export default function DashboardPage() {
  return (
    <main className="flex flex-grow justify-center">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg pb-20">
        <Suspense fallback={<PostSkeleton />}>
          <PostList />
        </Suspense>
      </div>
    </main>
  );
}
