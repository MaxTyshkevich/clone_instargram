import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';

type UserAvatarProps = {
  imageSrc?: string;
  name?: string | null;
};

export const UserAvatar = ({ imageSrc, name }: UserAvatarProps) => {
  console.log({ imageSrc, name });

  return (
    <Avatar className="w-6 h-6">
      {imageSrc ? (
        <Image src={imageSrc} alt={`${name} profile picture`} fill />
      ) : (
        <AvatarFallback>CN</AvatarFallback>
      )}
    </Avatar>
  );
};
