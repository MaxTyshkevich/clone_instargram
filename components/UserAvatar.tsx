import { Avatar } from '@/components/ui/avatar';
import Image from 'next/image';

type UserAvatarProps = {
  imageSrc: string | null;
};

export const UserAvatar = ({ imageSrc }: UserAvatarProps) => {
  console.log({ imageSrc });
  return (
    <Avatar className="w-8 h-8">
      <Image
        src={
          imageSrc ||
          'https://instagram.fpnq13-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fpnq13-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=3yECqrWF0dkAX-1fQPX&edm=ALlQn9MBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfC4YI9GjTczPKHhpu6gUJwwPYXUTESZ1WNE1OrYzfSCZQ&oe=656D360F&_nc_sid=e7f676'
        }
        alt="@shadcn"
        fill
      />
      {/* <AvatarFallback>CN</AvatarFallback> */}
    </Avatar>
  );
};
