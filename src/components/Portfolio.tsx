import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Portfolio() {
  return (
    <>
      <Head><title>Portfolio — My Name</title></Head>
      <Header />
      <main className="container">
        <h2>Portfolio</h2>
        <p>Selected projects I've worked on.</p>
        <div className="grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}