import Link from "next/link";

export default function Page() {
  return (
    <main className="section">
      <div className="container" style={{maxWidth: "900px"}}>
        <p className="eyebrow">CAPIVANCE</p>
        <h1 style={{fontSize: "clamp(42px, 7vw, 78px)", lineHeight: 1, letterSpacing: "-0.055em", marginBottom: "24px"}}>Enterprise and Business Solutions</h1>
        <p style={{fontSize: "18px", lineHeight: 1.7, color: "var(--muted)"}}>


CAPIVANCE provides Enterprise Development, Business & Financial Advisory, and Financial & Digital Solutions to help entrepreneurs and enterprises start, strengthen and grow their businesses, become bankable and finance-ready, and access appropriate financing. We support them through capacity building, mentoring, business and financial diagnostics, financial reconstruction, and financing and loan-readiness advisory. We also provide software, digital tools and technology-enabled solutions for enterprises and financial institutions to improve business operations, financial management, credit assessment, loan processing, documentation, monitoring, early warning and portfolio management.                   
      </p>
        <Link className="button button-dark" href="/">Back to home</Link>
      </div>
    </main>
  );
}
