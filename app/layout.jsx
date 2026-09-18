import { Spectral, Libre_Franklin, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import LastUpdated from './components/LastUpdated';

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
  title: "Ali Eldaoushy's Portfolio",
  description: 'Projects, Experience, and contact information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spectral.variable} ${libreFranklin.variable} ${mono.variable}`}>
        <div className="page">
          <Header />
          {children}
          <LastUpdated />
        </div>
      </body>
    </html>
  );
}
