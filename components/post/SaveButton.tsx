import React from 'react';
import { ActionButton } from './ActionButton';
import { Bookmark } from 'lucide-react';

export const SaveButton = () => {
  return (
    <ActionButton>
      <Bookmark />
    </ActionButton>
  );
};
