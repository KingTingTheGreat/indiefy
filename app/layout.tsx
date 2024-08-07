import type { Metadata } from 'next';
import './globals.css';
import Root from '@/components/root';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Indiefy',
  description: 'How niche is your music taste?',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Root>
      {children}
      <Analytics />
    </Root>
  );
}
