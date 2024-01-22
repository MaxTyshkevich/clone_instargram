'use client';

import { links } from '@/app/dashboard/Links';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export const NavLinks = () => {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegment();

  console.log({ pathname, segments });
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        const PropsCreateLink =
          link.name === 'Create' ? { passHref: true, scroll: false } : {};

        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: isActive ? 'secondary' : 'ghost',
              className: cn('navLink', { 'hidden md:flex': link.hideOnMobile }),
              size: 'lg',
            })}
            {...PropsCreateLink}
          >
            <LinkIcon className="w-6" />
            <span
              className={`${cn('hidden lg:block', {
                'font-extrabold': isActive,
              })}`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </>
  );
};
