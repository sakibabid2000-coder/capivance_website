import Link from "next/link";

export default function Page() {
  return (
    <main className="section">
      <div className="container" style={{maxWidth: "900px"}}>
        <p className="eyebrow">CAPIVANCE</p>
        <h1 style={{fontSize: "clamp(42px, 7vw, 78px)", lineHeight: 1, letterSpacing: "-0.055em", marginBottom: "24px"}}>Learning</h1>
        <p style={{fontSize: "18px", lineHeight: 1.7, color: "var(--muted)"}}>
      

CAPIVANCE offers practical and needs-based learning programs for new graduates, professionals, entrepreneurs, managers and leaders to build workplace readiness and strengthen professional, business and leadership capabilities.

Our programs cover career readiness, banking and finance, financial literacy, entrepreneurship, business management, marketing and sales, finance and accounting, operations, project management, credit and risk, leadership, soft skills, digital capabilities and emerging areas.

With a strong focus on learning for application, CAPIVANCE uses practical examples, cases, exercises, simulations and experience-based learning to help participants translate knowledge into performance.     
          
          
          
          
          
          
          
          
          
      </p>
        <Link className="button button-dark" href="/">Back to home</Link>
      </div>
    </main>
  );
}
