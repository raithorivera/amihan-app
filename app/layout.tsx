import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Toaster } from '@/components/ui/sonner';

import { siteConfig } from '@/config/site.config';
import { cn } from '@/util/class.util';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: ['/favicon/favicon.ico'],
    apple: ['/favicon/apple-touch-icon.png'],
    shortcut: ['/favicon/apple-touch-icon.png'],
  },
  manifest: '/favicon/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased w-full', fontSans.variable)}>
        {children}

        <TailwindIndicator />
        <Toaster visibleToasts={5} position='top-right' closeButton richColors pauseWhenPageIsHidden={true} toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
