'use client';

import React from 'react';
import { Button, ButtonProps } from '../ui/button';
import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';

export const SubmitButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props: ButtonProps[];
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={cn('', className)}
      disabled={pending}
      {...props}
    >
      {children}
    </Button>
  );
};
