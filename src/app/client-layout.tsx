'use client';

import Navbar from '@/customComponents/navbar/navbar';
import Footer from '@/customComponents/footer';
import { usePathname } from 'next/navigation';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const isAuthPage = pathName === '/login' || pathName === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
