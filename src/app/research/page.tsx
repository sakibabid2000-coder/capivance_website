import Link from "next/link";

export default function Page() {
  return (
    <main className="section">
      <div className="container" style={{maxWidth: "900px"}}>
        <p className="eyebrow">CAPIVANCE</p>
        <h1 style={{fontSize: "clamp(42px, 7vw, 78px)", lineHeight: 1, letterSpacing: "-0.055em", marginBottom: "24px"}}>Research & Knowledge</h1>
        <p style={{fontSize: "18px", lineHeight: 1.7, color: "var(--muted)"}}>
          CAPIVANCE conducts applied and policy-oriented research on the economy, banking and finance, capital markets, the corporate sector, CMSMEs, entrepreneurship and other economic and social issues. Through research, surveys, studies, case analyses and publications, we generate evidence-based knowledge and practical insights to support informed decision-making, policy development, business improvement and sustainable economic and social progress.
        </p>
        <Link className="button button-dark" href="/">Back to home</Link>
      </div>
    </main>
  );
}
