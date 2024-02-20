'use client';
import { toast } from 'sonner';
import { ActionButton } from './ActionButton';
import { Link, Send } from 'lucide-react';

export const SendButton = ({ postId }: { postId: string }) => {
  return (
    <ActionButton
      onClick={() => {
        navigator.clipboard.writeText(
          `${window.location.origin}/dashboard/p/${postId}`
        );
        toast('Link copied to clipboard', {
          icon: <Link className={'h-5 w-5'} />,
        });
      }}
    >
      <Send />
    </ActionButton>
  );
};
