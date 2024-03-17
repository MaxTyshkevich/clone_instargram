import { buttonVariants } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Edit profile',
  description: 'Edit profile',
};

const tabs = [
  { title: 'Edit profile', value: 'edit-profile' },
  { title: 'Professional account', value: 'professional-account' },
  { title: 'Notifications', value: 'notifications' },
  { title: 'Privacy and security', value: 'privacy-and-security' },
  { title: 'Login activity', value: 'login-activity' },
  { title: 'Emails from Instagram', value: 'emails-from-instagram' },
];

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Tabs
        orientation="vertical"
        defaultValue="edit-profile"
        className="w-[250px] min-h-screen fixed space-y-8 left-0 top-0 md:ml-20 lg:ml-64 h-full flex flex-col lg:border-r px-6 py-12"
      >
        <h4 className="font-extrabold text-xl ml-1 dark:text-white">
          Settings
        </h4>
        <TabsList className="flex flex-col items-start justify-start h-full">
          {tabs.map((tab) => (
            <TabsTrigger
              value={tab.value}
              key={tab.value}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'lg' }),
                'data-[state=active]:bg-zinc-100 dark:data-[state=active]:bg-neutral-800 dark:hover:bg-neutral-900 w-full justify-start px-3'
              )}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex-1 ml-[200px] xl:ml-32 min-h-screen bg-white dark:bg-neutral-950">
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;
