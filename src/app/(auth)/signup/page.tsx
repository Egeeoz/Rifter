import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SignUpForm } from '@/components/signup-form';

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="pb-1 pl-1 underline text-base flex items-center gap-1 underline-offset-4"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
        <SignUpForm />
      </div>
    </div>
  );
}
