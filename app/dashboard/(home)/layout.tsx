import React from 'react';
import { Header } from './components/header';

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayoutHome;
