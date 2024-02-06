import { MessageCircle } from 'lucide-react';
import React from 'react';
import { ActionButton } from './ActionButton';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

export const MessageButton = ({ postId }: { postId: string }) => {
  return (
    <ActionButton>
      <Link
        href={`/dashboard/p/${postId}`}
        className={cn(buttonVariants, {
          variant: 'ghost',
          className: 'h-9 w-9',
          size: 'icon',
        })}
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    </ActionButton>
  );
};
