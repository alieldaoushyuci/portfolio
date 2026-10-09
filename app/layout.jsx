import { Spectral, Libre_Franklin, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import LastUpdated from './components/LastUpdated';
import SiteCompass from './components/SiteCompass';
import HashTarget from './components/HashTarget';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--ser',
  display: 'swap',
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://alieldaoushy.com'),
  title: { default: 'Ali Eldaoushy | Personal Portfolio', template: '%s | Ali Eldaoushy' },
  description: 'The personal portfolio of Ali Eldaoushy (alieldaoushy): projects, experience, education, AI safety involvement, and interests.',
  authors: [{ name: 'Ali Eldaoushy', url: 'https://alieldaoushy.com' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spectral.variable} ${libreFranklin.variable} ${mono.variable}`}>
        <div className="page">
          <Header />
          {children}
          <LastUpdated />
          <SiteCompass />
        </div>
        <HashTarget />
      </body>
    </html>
  );
}
