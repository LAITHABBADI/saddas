import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(e.target);
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(form)),
      headers: { 'Content-Type': 'application/json' }
    });
    const json = await res.json();
    setStatus(json.ok ? 'sent' : 'error');
  };

  return (
    <>
      <Head><title>Contact — My Name</title></Head>
      <Header />
      <main className="container">
        <h2>Contact</h2>
        <p>Want to collaborate? Send me a message.</p>
        <form onSubmit={handleSubmit} className="form">
          <label>Name <input name="name" required /></label>
          <label>Email <input name="email" type="email" required /></label>
          <label>Message <textarea name="message" rows="6" required /></label>
          <button type="submit">Send</button>
        </form>
        {status === 'sending' && <p>Sending…</p>}
        {status === 'sent' && <p>Thanks! Your message was sent.</p>}
        {status === 'error' && <p>Sorry — there was an error. Check server logs.</p>}
      </main>
      <Footer />
    </>
  );
}