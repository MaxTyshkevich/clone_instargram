'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import React from 'react';

export const LoginButton = () => {
  return (
    <Button
      className="mt-4 w-full"
      variant="secondary"
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
    >
      Login with Google
    </Button>
  );
};
