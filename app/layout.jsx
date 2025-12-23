import './globals.css';
import './styles/HomePage.css';
import Link from 'next/link';

export const metadata = {
  title: 'Ali Eldaoushy — Portfolio',
  description: 'Projects, Experience, and contact information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/portfolio/vecteezy_global-connection-and-the-internet-network-modernization-in_8800866.mp4" type="video/mp4" />
        </video>
        <header className="home-page-header">
          <nav className="home-page-navbar">
            <Link href="/" className="initials-display">AE</Link>
            <Link href="/about">About</Link>
            <Link href="/education">Education</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
