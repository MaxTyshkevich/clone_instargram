'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Frown } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log({ error });
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Frown className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Page not Found!</h2>
      <p>
        The page you looking for does not exist. Please check the URL or go back
      </p>

      <Link
        href={'/dashboard'}
        className={cn(
          'mt-4',
          buttonVariants({
            variant: 'myLink',
          })
        )}
      >
        Go Back
      </Link>
    </main>
  );
}
