import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getSortedPostsData, getPostData } from '../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);
  const processed = await remark().use(html).process(postData.content);
  const contentHtml = processed.toString();
  return { props: { postData: { ...postData, contentHtml } } };
}

export default function Post({ postData }) {
  return (
    <>
      <Head><title>{postData.title} — My Name</title></Head>
      <Header />
      <main className="container">
        <article>
          <h1>{postData.title}</h1>
          <small>{postData.date}</small>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
      <Footer />
    </>
  );
}