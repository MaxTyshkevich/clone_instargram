import React from 'react';

const PostPage = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  return <div>PostPage id: {id}</div>;
};

export default PostPage;
