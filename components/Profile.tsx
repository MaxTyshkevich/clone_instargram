'use client';

import { User } from 'next-auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { UserAvatar } from './UserAvatar';

type ProfileProps = {
  user: User;
};
export const Profile = ({ user }: ProfileProps) => {
  const href = `/dashboard/${user.username}`;
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log({ pathname });
  return (
    <Link href={href}>
      <UserAvatar imageSrc={user.image ?? null} />
    </Link>
  );
};
