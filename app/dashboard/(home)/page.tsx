import { PostList } from '@/components/PostList';
import { PostSkeletons } from '@/components/post/Skeletons';
import { Suspense } from 'react';

export default function DashboardPage() {
  return (
    <main className="flex flex-grow justify-center">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg pb-20">
        <Suspense fallback={<PostSkeletons />}>
          <PostList />
        </Suspense>
      </div>
    </main>
  );
}
