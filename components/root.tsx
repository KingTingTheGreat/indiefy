'use client';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { UserContextProvider } from '@/context/userContext';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SetLoggedIn from './setLoggedIn';

const inter = Inter({ subsets: ['latin'] });

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContextProvider>
      <SetLoggedIn>
        <html lang="en">
          <body className={inter.className}>
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <main className="min-h-[70%]">{children}</main>
              <Footer />
            </Suspense>
          </body>
        </html>
      </SetLoggedIn>
    </UserContextProvider>
  );
};

export default Root;
