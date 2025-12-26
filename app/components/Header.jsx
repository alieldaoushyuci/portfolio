import Link from 'next/link';

export default function Header() {
  return (
    <header className="home-page-header">
      <nav className="home-page-navbar">
        <Link href="/" className="initials-display">
          AE
        </Link>
        <div className="nav-links-group">
          <Link href="/education">Education</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
        </div>
      </nav>
    </header>
  );
}

