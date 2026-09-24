import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import Spark from "@/components/ui/Spark";

export default function Header() {
  return (
    <>
      <div className="announcement">
        <div className="container announcement-inner">
          <span><Spark /> A new platform for capability, enterprise and finance</span>
          <Link href="/contact">Talk to CAPIVANCE <Arrow /></Link>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-inner">
          <Link className="brand" href="/" aria-label="CAPIVANCE home">
            <span className="brand-mark">C</span>
            <span>CAPIVANCE</span>
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/who-we-are">Who we are</Link>
            <Link href="/learning">Learning</Link>
            <Link href="/research">Research</Link>
            <Link href="/enterprise-and-business-solutions">Enterprise and Business Solutions</Link>
            <Link href="/social-impact">Social Impact</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
