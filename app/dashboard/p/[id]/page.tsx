import React from 'react';
import { SinglePost } from './components/SinglePost';

const PostPage = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <div>PostPage id: {id}</div>
      <div>
        <SinglePost postId={id} />
      </div>
    </div>
  );
};

export default PostPage;
