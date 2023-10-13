'use client'
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

import { TranslationProvider } from 'rtk-translate';
import languages from '@/data/languages';

import './globals.css'
import 'rtk-translate/dist/index.css'
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    const updateFavicon = (theme: string) => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = theme === 'dark' ? '/favicon-dark.ico' : '/favicon-light.ico';
      document.getElementsByTagName('head')[0].appendChild(link);
    };

    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    updateFavicon(currentTheme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const newTheme = e.matches ? 'dark' : 'light';
      updateFavicon(newTheme);
    });

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', e => {
        const newTheme = e.matches ? 'dark' : 'light';
        updateFavicon(newTheme);
      });
    };
  }, []);
  return (
    <html lang="en">
      <Head>
        <title>RTK Translate</title>
        <meta name="description" content="RTK Translate Demo" />
      </Head>
      <TranslationProvider
        storageKey='rtk-demo-translate'
        languages={languages}
        availableLanguages={['pt', 'en', 'es', 'de', 'it', 'ja', 'fr']}
      >
        <body>{children}
          <Analytics />
        </body>
      </TranslationProvider>
    </html>
  )
}
