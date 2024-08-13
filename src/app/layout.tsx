import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'gibbens.me',
  description: 'Portfolio for Kelly Gibbens Front-end Web Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body className={`bg-slate-800 ${inter.className} `}>
        <main className="min-h-screen mx-auto max-w-screen-xl px-6 py-6 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4">
          <div className="flex justify-center flex-wrap">
            <SideBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
