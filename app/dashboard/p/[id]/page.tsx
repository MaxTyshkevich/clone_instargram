import React, { Suspense } from 'react';
import { SinglePost } from './components/SinglePost';
import { SinglePostSkeleton } from '@/components/post/Skeletons';

const PostPage = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <div>
        {/*  <Suspense>
          <SinglePost postId={id} />
        </Suspense> */}
        <SinglePostSkeleton />
      </div>
    </div>
  );
};

export default PostPage;
