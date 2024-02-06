import React from 'react';
import { LoginButton } from './loginButton';
import { Acme } from 'next/font/google';

const acme = Acme({
  weight: '400',
  subsets: ['latin'],
});

export const LoginForm = () => {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${acme.className} text-2xl mb-3 text-black`}>
          Pleace Login to continue
        </h1>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1"></div>
      </div>
    </div>
  );
};
