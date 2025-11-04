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

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';

import { signUp } from '@/app/actions/auth';
import { fetchData } from '@/hooks/useData';

function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Creating account...' : 'Create account'}
    </Button>
  );
}

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [state, formAction] = useActionState(signUp, null);
  const {
    data,
    status,
    version,
    getChampionImageUrl,
    getChampionLoadingUrl,
    getChampionSplashUrl,
  } = fetchData();

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {/* Champion List - only render when data is loaded
      {status === 'loading' && (
        <div className="text-center py-4">Loading champions...</div>
      )}

      {status === 'error' && (
        <div className="text-center py-4 text-red-500">
          Error loading champions
        </div>
      )}

      {status === 'success' && data && (
        <div className="grid grid-cols-4 gap-4">
          {Object.values(data.data).map((champion: any) => (
            <div key={champion.id} className="border p-4 rounded">
              {/* Use img tag, not image */}
      {/* <img
                src={getChampionImageUrl(champion.id)}
                alt={champion.name}
                width={48}
                height={48}
                className="w-full h-auto"
              />
              <h3>{champion.name}</h3>
              <p className="text-sm text-gray-600">{champion.title}</p>
            </div>
          ))}
        </div>
      )} */}

      {/* Sign Up Card */}
      <Card>
        <CardHeader>
          <CardTitle>Create your own account</CardTitle>
          <CardDescription>
            Enter a email and password below, and pick your favorite/main champ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
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
                <Combobox />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
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
