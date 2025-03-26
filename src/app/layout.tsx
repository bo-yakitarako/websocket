import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'なんとなくすごいやつ',
  description: 'とりあえずなんとなくすごいんだよね',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${roboto.variable}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          height: '100dvh',
          fontFamily: 'var(--font-roboto)',
          gap: '16px',
        }}
      >
        {children}
      </body>
    </html>
  );
}
