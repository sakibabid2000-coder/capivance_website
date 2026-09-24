import Link from "next/link";
import Arrow from "@/components/ui/Arrow";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow">Learning · Research · Enterprise · Finance · Technology</p>
          <h1>Advancing <em>people.</em><br />Enterprises.<br /><span>Finance.</span></h1>
          <p className="hero-lead">CAPIVANCE brings capability development, applied research, enterprise support, business advisory and financial technology together in one connected platform.</p>
          <div className="actions">
            <Link className="button button-dark" href="/about">Explore CAPIVANCE <Arrow /></Link>
            <Link className="button button-light" href="/contact">Start a conversation</Link>
          </div>
          <div className="hero-proof"><div><strong>Learn</strong><span>Capability</span></div><div><strong>Build</strong><span>Enterprise</span></div><div><strong>Enable</strong><span>Finance</span></div></div>
        </div>
        <div className="hero-visual" aria-label="CAPIVANCE ecosystem illustration">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="hero-card hero-card-main">
            <div className="mini-label">CAPIVANCE ECOSYSTEM</div>
            <div className="score-row"><div><span className="score-caption">Enterprise readiness</span><strong>78<span>%</span></strong></div><span className="status-pill">On track</span></div>
            <div className="score-line"><span /></div>
            <div className="metric-grid"><div><span>Capability</span><strong>82</strong></div><div><span>Financials</span><strong>74</strong></div><div><span>Governance</span><strong>71</strong></div></div>
          </div>
          <div className="floating-card floating-card-top"><span className="floating-icon">↗</span><div><strong>Bankability</strong><span>Improvement plan</span></div></div>
          <div className="floating-card floating-card-bottom"><span className="floating-icon">✓</span><div><strong>Learning path</strong><span>6 modules completed</span></div></div>
          <div className="hero-ring ring-one" /><div className="hero-ring ring-two" />
        </div>
      </div>
    </section>
  );
}
