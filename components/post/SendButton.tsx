import React from 'react';
import { ActionButton } from './ActionButton';
import { Send } from 'lucide-react';

export const SendButton = ({ postId }: { postId: string }) => {
  return (
    <ActionButton>
      <Send />
    </ActionButton>
  );
};
