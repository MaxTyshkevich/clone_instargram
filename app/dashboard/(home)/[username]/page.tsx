import React from 'react';

type s = {
  params: {
    username: string;
  };
};

const page = ({ params: { username } }: any) => {
  console.log(username);
  return <div>page</div>;
};

export default page;
