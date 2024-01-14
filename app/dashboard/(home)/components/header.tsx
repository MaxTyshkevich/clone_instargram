import { Search } from 'lucide-react';
import { Acme } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const acme = Acme({ subsets: ['latin'], weight: '400' });

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full md:hidden bg-white dark:bg-neutral-950 flex items-center justify-between border-b border-zinc-300 dark:border-neutral-700 px-3 py-2">
      <Link href="/dashboard">
        <span className={`${acme.className}`}>Instagram</span>
      </Link>

      <div>
        <Search className="h-4 w-4" />
        <input type="search" className="" placeholder="Search" />
      </div>
    </header>
  );
};

/* 
4: 15
*/
