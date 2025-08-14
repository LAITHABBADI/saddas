import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head><title>Blog — My Name</title></Head>
      <Header />
      <main className="container">
        <h2>Blog</h2>
        <div className="posts">
          {posts.map(p => (
            <article key={p.slug} className="post-card">
              <h3><Link href={`/blog/${p.slug}`}><a>{p.title}</a></Link></h3>
              <small>{p.date}</small>
              <p>{p.description}</p>
              <Link href={`/blog/${p.slug}`}><a>Read →</a></Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}