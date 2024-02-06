'use client';

import React from 'react';
import { Button } from '../ui/button';

export const ActionButton = ({
  children,
  ...buttonProps
}: {
  children: React.ReactNode;
}) => {
  return (
    <Button
      variant="ghost"
      className="h-9 w-9 hover:opacity-70"
      size={'icon'}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
