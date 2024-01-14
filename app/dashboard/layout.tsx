import React from 'react';
import { SideNav } from './components/SideNav/SideNav';

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen relative flex-col-reverse ms:flex-col md:flex-row md:overflow-hidden">
      <div className="w-auto  lg:w-64 md:border-r">
        <SideNav />
      </div>
      <div className="flex-1 mt-12 w-full md:mt-0 md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Dashboardlayout;
