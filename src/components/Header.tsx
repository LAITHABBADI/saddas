import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="brand"><Link href="/"><a>My Name</a></Link></h1>
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/portfolio"><a>Portfolio</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </div>
    </header>
  );
}