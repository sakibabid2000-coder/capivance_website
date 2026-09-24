import Link from "next/link";

export default function Page() {
  return (
    <main className="section">
      <div className="container" style={{maxWidth: "900px"}}>
        <p className="eyebrow">CAPIVANCE</p>
        <h1 style={{fontSize: "clamp(42px, 7vw, 78px)", lineHeight: 1, letterSpacing: "-0.055em", marginBottom: "24px"}}>Who We Are</h1>
        <p style={{fontSize: "18px", lineHeight: 1.7, color: "var(--muted)"}}>

  CAPIVANCE is a learning, research and business solutions organization committed to developing people, strengthening enterprises and contributing to positive social change. We integrate Learning, Research, Enterprise & Business Solutions, and Social Impact to build capabilities, generate practical knowledge, support sustainable and finance-ready enterprises, provide advisory and technology-enabled solutions, and promote informed thinking and responsible mindsets in society. Through this integrated approach, CAPIVANCE seeks to create lasting value for individuals, businesses, institutions and communities.                   
      </p>
        <Link className="button button-dark" href="/">Back to home</Link>
      </div>
    </main>
  );
}
