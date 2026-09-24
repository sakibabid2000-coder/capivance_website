import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">C</span><span>CAPIVANCE</span>
          </Link>
          <p>Advancing People. Enterprises. Finance.</p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/learning">Learning</Link>
          <Link href="/research">Research</Link>
          <Link href="/advisory">Advisory</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} CAPIVANCE. All rights reserved.</span><span>Learning · Research · Enterprise · Finance · Technology</span></div>
    </footer>
  );
}
