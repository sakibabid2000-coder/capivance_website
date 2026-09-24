import { journey } from "@/data/site";

export default function Journey() {
  return <section className="journey section"><div className="container"><div className="journey-heading"><div><p className="eyebrow">The connected journey</p><h2>Learn → Build → Diagnose → Prepare → Finance → <span>Monitor</span></h2></div><p>Our long-term platform is designed to connect capability development with enterprise performance and financial decision-making.</p></div><div className="journey-track">{journey.map(([title, text], index) => <div className="journey-step" key={title}><span className="step-index">0{index + 1}</span><div className="step-dot" /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>;
}
