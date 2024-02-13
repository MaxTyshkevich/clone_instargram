import { ChevronDown, Settings, UserPlus } from 'lucide-react';
import { Button } from './ui/button';

type ProfleHeaderProps = {
  username: string;
};

export const ProfleHeader = ({ username }: ProfleHeaderProps) => {
  return (
    <header className="flex items-center justify-between fixed h-[61px] top-0 w-full">
      <Button size="icon" variant="ghost">
        <Settings />
      </Button>

      <div className="flex items-center gap-x-2">
        <p className="font-bold">{username}</p>
        <ChevronDown />
      </div>

      <Button size="icon" variant="ghost">
        <UserPlus />
      </Button>
    </header>
  );
};
