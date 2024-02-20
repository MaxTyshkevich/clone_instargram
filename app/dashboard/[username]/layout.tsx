import { auth } from '@/auth';
import { ProfleHeader } from '@/components/ProfleHeader';
import { fetchProfile } from '@/lib/fetch-database';
import { notFound } from 'next/navigation';
import React from 'react';

type ProfileLayoutProps = {
  children: React.ReactNode;
  params: { username: string };
};

export const generateMetadata = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const profile = await fetchProfile(username);

  if (!profile) {
    return { title: 'page not found' };
  }
  return {
    title: `${profile.name} (@${profile.username})`,
  };
};

const ProfileLayout = async ({
  children,
  params: { username },
}: ProfileLayoutProps) => {
  const profile = await fetchProfile(username);
  const session = await auth();

  if (!profile) {
    notFound();
  }

  const isCurrentUser = session?.user.id === profile.id;

  return (
    <div>
      <ProfleHeader username={profile.username} />
      <div className="max-w-4xl"></div>
      {children}
    </div>
  );
};

export default ProfileLayout;
