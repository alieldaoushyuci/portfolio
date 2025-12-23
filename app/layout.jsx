import './globals.css';
import './styles/HomePage.css';
import Link from 'next/link';

export const metadata = {
  title: 'Ali Eldaoushy — Portfolio',
  description: 'Projects, Experience, and contact information',
};

export default function RootLayout({ children }) {
  // Use external video URL if provided, otherwise fallback to local (for development)
  // Set NEXT_PUBLIC_BACKGROUND_VIDEO_URL in your deployment platform's environment variables
  // For example: https://res.cloudinary.com/your-cloud/video/upload/v1234567/video.mp4
  const videoUrl = process.env.NEXT_PUBLIC_BACKGROUND_VIDEO_URL ||
    '/portfolio/vecteezy_circuit-data-neural-network-ai-technology-cloud-computing_8800860.mp4';

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
          <source src={videoUrl} type="video/mp4" />
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
