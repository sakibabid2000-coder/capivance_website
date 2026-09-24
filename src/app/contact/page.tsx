import Link from "next/link";

export default function Page() {
  return (
    <main className="section">
      <div className="container" style={{maxWidth: "900px"}}>
        <p className="eyebrow">CAPIVANCE</p>
        <h1 style={{fontSize: "clamp(42px, 7vw, 78px)", lineHeight: 1, letterSpacing: "-0.055em", marginBottom: "24px"}}>Contact CAPIVANCE</h1>
        <p style={{fontSize: "18px", lineHeight: 1.7, color: "var(--muted)"}}> CAPIVANCE Learning, Research and Business Solutions Limited.<br/> 
House # 07, Road # 01, Latif Real Estate, West Katasur, Mohammadpur, Dhaka 1207</p>
        <Link className="button button-dark" href="/">Back to home</Link>
      </div>
    </main>
  );
}
