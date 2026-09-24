import Link from "next/link";
import Arrow from "@/components/ui/Arrow";

export default function ResearchSection() {
  return <section className="research section"><div className="container research-grid"><div className="research-copy"><p className="eyebrow">Research & Knowledge</p><h2>Evidence that helps people <span>decide better.</span></h2><p>CAPIVANCE will develop and curate practical knowledge around CMSMEs, banking and finance, entrepreneurship, financial inclusion, credit, digital finance and sector performance.</p><Link className="text-link" href="/research">Explore research <Arrow /></Link></div><div className="research-board"><div className="board-top"><span>KNOWLEDGE HUB</span><span>2026</span></div><div className="research-bars"><div><span>CMSME Finance</span><i style={{width:"88%"}} /></div><div><span>Entrepreneurship</span><i style={{width:"72%"}} /></div><div><span>Digital Finance</span><i style={{width:"64%"}} /></div><div><span>Credit & Risk</span><i style={{width:"81%"}} /></div></div><div className="board-footer"><strong>Reports</strong><strong>Policy briefs</strong><strong>Case studies</strong></div></div></div></section>;
}
