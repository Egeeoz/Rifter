'use client';

import Navbar from '@/customComponents/navbar';
import './globals.css';
import Footer from '@/customComponents/footer';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isLoginPage = pathName === '/login';
  const isSignUpPage = pathName === '/signup';

  return (
    <html lang="en" className="dark">
      <body className="flex flex-col">
        {!isLoginPage && !isSignUpPage && <Navbar />}
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
