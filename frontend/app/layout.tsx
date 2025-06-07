import '@/app/global.css';
import { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import { Footer } from './components/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Union Church',
    default: 'Union Church',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
