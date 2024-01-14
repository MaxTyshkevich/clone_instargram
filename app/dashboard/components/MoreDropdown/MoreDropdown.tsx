'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button, buttonVariants } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

import {
  Menu,
  Activity,
  Bookmark,
  LogOut,
  Moon,
  Settings,
  ChevronLeft,
  Sun,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { signOut } from 'next-auth/react';

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export const MoreDropdown = () => {
  /* const [theme, setTheme] = useState<Theme>(Theme.DARK); */
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const [showModeTaggle, setShowModeTaggle] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function hamdleOutsideclick(event: MouseEvent) {
      if (!event.target) return;

      /* if mousedown happend in REF, modal wont be close */
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowModeTaggle(false);
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', hamdleOutsideclick);
    return () => document.removeEventListener('mousedown', hamdleOutsideclick);
  }, [ref]);

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Dropdown Menu"
          variant="ghost"
          className="navLink"
          size={'lg'}
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6" />
          <span className="hidden lg:block">More</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        ref={ref}
        className={cn(
          'dark:bg-neutral-800 w-64 rounded-xl p-0 transition-opacity',
          !open && 'opacity-0'
        )}
        align="end"
        alignOffset={-40}
      >
        {!showModeTaggle && (
          <>
            <DropdownMenuItem className="menuItem">
              <Settings size="20" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="menuItem">
              <Activity size="20" />
              <span>Your activity</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="menuItem">
              <Bookmark size="20" />
              <span>Saved</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="menuItem"
              onClick={() => setShowModeTaggle(true)}
            >
              <Moon size="20" />
              <span>Switch appearance</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="menuItem"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              <LogOut size="20" />
              <span>logout</span>
            </DropdownMenuItem>
          </>
        )}

        {showModeTaggle && (
          <>
            <div className="flex items-center py-3.5 px-2.5">
              <Button
                variant={'secondary'}
                onClick={() => setShowModeTaggle(false)}
                className="p-0"
              >
                <ChevronLeft size={20} />
              </Button>
              <DropdownMenuLabel className="font-bold ml-1">
                Switch appearance
              </DropdownMenuLabel>
              {theme === Theme.DARK ? (
                <Moon size="20" className="ml-auto" />
              ) : (
                <Sun size="20" className="ml-auto" />
              )}
            </div>
            <DropdownMenuSeparator className="bg-slate-200 dark:bg-neutral-700" />
            <DropdownMenuItem className="justify-between menuItem">
              <label htmlFor="dark-mode">Dark mode</label>
              <Switch
                checked={theme === Theme.DARK}
                id="dark-mode"
                onCheckedChange={(checked) =>
                  setTheme(checked ? Theme.DARK : Theme.LIGHT)
                }
              />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
