import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projects from '../data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Name — Developer</title>
      </Head>
      <Header />
      <main className="container">
        <section className="hero">
          <h2>Hi, I'm My Name.</h2>
          <p>I'm a developer building web apps. I focus on React, Next.js and clean UX.</p>
          <p>
            <Link href="/portfolio"><a className="button">See my work</a></Link>
            <Link href="/blog"><a className="button ghost">Read my blog</a></Link>
          </p>
        </section>

        <section>
          <h2>Featured Projects</h2>
          <div className="grid">
            {projects.slice(0,3).map(p => (
              <article key={p.id} className="card">
                {p.image && <img src={p.image} alt={p.title} />}
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="card-actions">
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live</a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}