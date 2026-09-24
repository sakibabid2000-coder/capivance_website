import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import { pillars } from "@/data/site";

export default function CapabilityPillars() {
  return <section className="pillars section"><div className="container"><div className="section-heading"><div><p className="eyebrow">One platform. Five capabilities.</p><h2>Designed around the real needs of <span>people and enterprises.</span></h2></div><p>Each capability can stand alone. Together, they create a connected development and finance ecosystem.</p></div><div className="pillar-grid">{pillars.map((pillar) => <Link className="pillar-card" href={pillar.href} key={pillar.number}><span className="pillar-number">{pillar.number}</span><div className="pillar-arrow"><Arrow /></div><h3>{pillar.title}</h3><p>{pillar.text}</p></Link>)}</div></div></section>;
}
