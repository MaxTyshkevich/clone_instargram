import { SwitchCamera } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { acme } from '@/app/layout';

export const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className={buttonVariants({
        variant: 'ghost',
        size: 'lg',
        className:
          'hidden md:flex navLink !mb-10 lg:hover:bg-transparent lg:!p-0',
      })}
    >
      <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" />
      <span className={`${acme.className} text-xl hidden lg:block`}>
        Pixelgram
      </span>
    </Link>
  );
};
