'use client';

import type { User } from 'next-auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { UserAvatar } from './UserAvatar';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

type ProfileProps = {
  user: User;
};
export const Profile = ({ user }: ProfileProps) => {
  const href = `/dashboard/${user.username}`;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={buttonVariants({
        variant: isActive ? 'secondary' : 'ghost',
        className: cn('navLink'),
        size: 'lg',
      })}
      href={href}
    >
      <UserAvatar imageSrc={user.image ?? null} name={user.name} />
      <span
        className={`${cn('hidden lg:block', {
          'font-extrabold': isActive,
        })}`}
      >
        Profile
      </span>
    </Link>
  );
};
