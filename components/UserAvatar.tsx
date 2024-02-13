import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type UserAvatarProps = {
  imageSrc: string | null;
  name?: string;
  className?: string;
};

export const UserAvatar = ({ imageSrc, name, className }: UserAvatarProps) => {
  console.log({ imageSrc, name });

  return (
    <Avatar className={cn('relative w-6 h-6', className)}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`${name} profile picture`}
          fill
          className="rounded-full object-cover"
        />
      ) : (
        <AvatarFallback>CN</AvatarFallback>
      )}
    </Avatar>
  );
};
