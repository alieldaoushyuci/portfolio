import './globals.css';
import './styles/HomePage.css';
import Link from 'next/link';
import PipelineBackground from '@/components/PipelineBackground';

export const metadata = {
  title: 'Ali Eldaoushy — Portfolio',
  description: 'Projects, Experience, and contact information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PipelineBackground />
        <header className="home-page-header">
          <nav className="home-page-navbar">
            <Link href="/" className="initials-display">AE</Link>
            <Link href="/about">About</Link>
            <Link href="/education">Education</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/skills">Skills</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
