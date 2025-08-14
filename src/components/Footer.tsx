export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} My Name — Built with Next.js</p>
      </div>
    </footer>
  );
}