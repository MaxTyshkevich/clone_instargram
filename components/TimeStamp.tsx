'use client';
import { cn } from '@/lib/utils';
import TimeAgo from 'react-timeago';

type TimeStampProps = {
  data: Date;
  className?: string;
};

export const TimeStamp = ({ data, className }: TimeStampProps) => {
  return (
    <TimeAgo
      date={data}
      className={cn(
        'font-medium text-neutral-500 dark:text-neutral-400 text-xs',
        className
      )}
      formatter={(value, unit) => `${value} ${unit[0]}`}
    />
  );
};
