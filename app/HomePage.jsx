'use client';
import Link from 'next/link';

export default function HomePage({ children }) {
  return (
    <>
      <header style={{ padding: '1rem', background: '#111', color: '#fff' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main style={{ minHeight: '80vh' }}>{children}</main>

      <footer style={{ textAlign: 'center', padding: '1rem', background: '#111', color: '#fff' }}>
        © {new Date().getFullYear()} Ali Eldaoushy
      </footer>
    </>
  );
}
