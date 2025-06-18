
import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { PageLoader } from '@/components/layout/PageLoader';
import { LayoutClientWrapper } from '@/components/layout/LayoutClientWrapper';
import { ParticleBG } from '@/components/layout/ParticleBG';


export const metadata: Metadata = {
  title: 'Codefolio - Developer Portfolio',
  description: 'A personal portfolio website showcasing projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          defaultTheme="dark"
          storageKey="codefolio-theme"
        >
          <ParticleBG id="tsparticles-bg" />
          <Suspense fallback={<PageLoader isLoading={true} />}>
            <LayoutClientWrapper>{children}</LayoutClientWrapper>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
