import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid place-items-center h-screen">{children}</div>;
};

export default AuthLayout;
