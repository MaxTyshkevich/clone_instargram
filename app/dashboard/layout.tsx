import React from 'react';
import { SideNav } from './components/SideNav/SideNav';

const Dashboardlayout = ({
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen relative flex-col-reverse ms:flex-col md:flex-row md:overflow-hidden">
      <div className="w-auto  lg:w-64 md:border-r">
        <SideNav />
      </div>
      <div className="flex-1 w-full md:overflow-y-auto max-w-7xl mx-auto mt-[61px] md:mt-0 px-4 py-2 md:p-12">
        {children}
      </div>
    </div>
  );
};

export default Dashboardlayout;
