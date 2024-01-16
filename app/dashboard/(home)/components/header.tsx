import { Button } from '@/components/ui/button';
import { Heart, Search } from 'lucide-react';
import { Acme } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const acme = Acme({ subsets: ['latin'], weight: '400' });

export const Header = () => {
  console.log('Header component');
  return (
    <header className="fixed top-0 left-0 w-full md:hidden bg-white dark:bg-neutral-950 flex items-center gap-2 justify-between border-b border-zinc-300 dark:border-neutral-700 px-3 py-2">
      <Link href="/dashboard">
        <span className={`${acme.className} font-semibold text-2xl`}>
          Instagram
        </span>
      </Link>
      <div className="flex z-10">
        <div className="flex items-center gap-2 bg-zinc-100 dark:bg-neutral-800 rounded-md px-3.5 py-1.5">
          <label htmlFor="searchInput" className="cursor-pointer">
            <Search className="h-4 w-4" />
          </label>
          <input
            id="searchInput"
            type="search"
            className="placeholder:text-neutral-600 dark:placeholder:text-neutral-400 bg-transparent flex-1 px-2 py-1 outline-none"
            placeholder="Search"
          />
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="hover:scale-105 hover:bg-transparent"
        >
          <Heart />
        </Button>
      </div>
    </header>
  );
};
