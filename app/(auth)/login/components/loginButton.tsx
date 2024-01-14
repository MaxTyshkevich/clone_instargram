'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useFormStatus } from 'react-dom';

export const LoginButton = () => {
  /*  const { pending } = useFormStatus(); */
  return (
    <Button
      className="mt-4 w-full"
      variant="secondary"
      /*  area-disabled={pending} */
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
    >
      Login with Google
    </Button>
  );
};
