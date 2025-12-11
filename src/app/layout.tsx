// 'use client';

// import Navbar from '@/customComponents/navbar/navbar';
// import './globals.css';
// import Footer from '@/customComponents/footer';
// import { usePathname } from 'next/navigation';
// import { notoSans, yellowtail } from './fonts';

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathName = usePathname();
//   const isLoginPage = pathName === '/login';
//   const isSignUpPage = pathName === '/signup';

//   return (
//     <html lang="en" className="dark">
//       <body
//         className={`flex flex-col ${notoSans.variable} ${yellowtail.variable}`}
//       >
//         {!isLoginPage && !isSignUpPage && <Navbar />}
//         <main className="min-h-screen ">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import './globals.css';
import { notoSans, yellowtail } from './fonts';
import { ClientLayout } from './client-layout';

export const metadata = {
  title: 'Rifter - League of Legends Team Compositions',
  description: 'Create and share custom League of Legends team compositions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`flex flex-col ${notoSans.variable} ${yellowtail.variable}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
