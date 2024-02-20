'use client';

import React from 'react';
import { Button, ButtonProps } from '../ui/button';

type ActionButtonProps = Partial<ButtonProps> & {
  children: React.ReactNode;
};

export const ActionButton = ({
  children,
  ...buttonProps
}: ActionButtonProps) => {
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
