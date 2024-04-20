import '@app/_/styles/globals.css';
import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={clsx(inter.className, 'h-full')}>{children}</body>
    </html>
  );
}
