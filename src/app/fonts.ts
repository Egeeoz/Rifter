import { Noto_Sans, Yellowtail } from 'next/font/google';

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-noto',
});

export const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-yellowtail',
});
