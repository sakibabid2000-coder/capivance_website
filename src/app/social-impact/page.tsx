import Link from "next/link";

export default function Page() {
  return (
    <main className="section">
      <div className="container" style={{maxWidth: "900px"}}>
        <p className="eyebrow">CAPIVANCE</p>
        <h1 style={{fontSize: "clamp(42px, 7vw, 78px)", lineHeight: 1, letterSpacing: "-0.055em", marginBottom: "24px"}}>Social Impact</h1>
        <p style={{fontSize: "18px", lineHeight: 1.7, color: "var(--muted)"}}>
      

  CAPIVANCE promotes awareness, informed thinking, positive mindsets and responsible behaviour to help build healthier, financially aware and socially responsible communities. We engage community leaders, professionals and influencers as catalysts and ambassadors for positive change, extending knowledge and awareness to grassroots and underserved communities. Our initiatives address health, finance, education, social values, harmful habits, misinformation, misconceptions and superstitions, fostering critical thinking, empathy, cooperation and constructive mindsets.                   
      </p>
        <Link className="button button-dark" href="/">Back to home</Link>
      </div>
    </main>
  );
}
