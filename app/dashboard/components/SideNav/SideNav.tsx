import { Logo } from '@/components/Logo';
import { NavLinks } from '@/components/NavLinks';
import React from 'react';
import { MoreDropdown } from '../MoreDropdown/MoreDropdown';
import { getServerSession } from 'next-auth';
import { Profile } from '@/components/Profile';
import { auth } from '@/auth';

export const SideNav = async () => {
  const session = await auth();

  return (
    <div className="flex relative h-16 md:h-full flex-col px-3 py-4 md:px-2">
      <div className="border-t -ml-3 md:ml-0 bg-white dark:bg-neutral-950 h-16 justify-evenly fixed z-50 flex-1 w-full md:relative md:h-full bottom-0 md:border-none flex flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2">
        <Logo />
        <NavLinks />
        {session && <Profile user={session.user} />}
        <div className="hidden md:flex relative md:mt-auto flex-1 items-end">
          <MoreDropdown />
        </div>
      </div>
    </div>
  );
};
