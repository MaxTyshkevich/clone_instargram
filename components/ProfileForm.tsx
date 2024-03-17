'use client';

import { UserWithExtras } from '@/app-type';
import { UserSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';

type ProfileFormProps = {
  profile: UserWithExtras;
};
export const ProfileForm = ({ profile }: ProfileFormProps) => {
  const form = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: profile,
  });
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(async () => {})}>
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="Website" disabled {...field} />
                </FormControl>
                <FormDescription>daSDASDA</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input placeholder="Website" disabled {...field} />
                </FormControl>
                <FormDescription>daSDASDA</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Input placeholder="Website" disabled {...field} />
                </FormControl>
                <FormDescription>daSDASDA</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button>Submit</Button>
        </form>
      </Form>
    </div>
  );
};
