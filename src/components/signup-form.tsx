'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Combobox } from '@/customComponents/combo-box';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

import { useFormStatus } from 'react-dom';
import { useActionState, useState } from 'react';

import { signUp } from '@/app/actions/auth';
import { useData } from '@/hooks/useData';

function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full text-[var(--background)]"
      disabled={pending}
    >
      {pending ? 'Creating account...' : 'Create account'}
    </Button>
  );
}

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [state, formAction] = useActionState(signUp, null);
  const [value, setValue] = useState('');
  const {
    data,
    status,
    version,
    getChampionImageUrl,
    getChampionLoadingUrl,
    getChampionSplashUrl,
  } = useData();

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create your own account</CardTitle>
          <CardDescription>
            Enter a email and password below, and pick your favorite/main champ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <Avatar className="m-auto w-20 h-20 outline-[3.5px] outline-[var(--border)]">
              <AvatarImage
                src={
                  value
                    ? getChampionImageUrl(value)
                    : 'https://placehold.co/600x400?text=?'
                }
                className="w-full h-full object-cover object-center transform scale-125"
              />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-6">
              {state?.error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 rounded-md">
                  {state.error}
                </div>
              )}
              <div className="grid gap-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" name="username" required />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="champion">Favorite champion</Label>
                <Input type="hidden" name="champion" value={value} />

                {status === 'loading' && <p>Loading champions...</p>}
                {status === 'error' && <p>Error loading champions</p>}
                <Combobox
                  championData={
                    status === 'success' ? data ?? undefined : undefined
                  }
                  value={value}
                  setValue={setValue}
                />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="drMUNDO@ISBEST.com"
                  required
                />
              </div>
              <div className="grid gap-1.5">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <SignUpButton />
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
