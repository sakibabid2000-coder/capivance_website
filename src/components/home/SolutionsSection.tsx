import Link from "next/link";

const solutions = [
  ["01", "CMSME Bankability Platform", "Financial assessment · Readiness · Action plans"],
  ["02", "Loan Origination System", "Application · KYC · Appraisal · Approval"],
  ["03", "Loan Documentation System", "Documentation · Controls · Audit trail"],
  ["04", "Loan Monitoring & Early Warning", "Portfolio · Risk signals · Alerts"],
];

export default function SolutionsSection() {
  return <section className="solutions section"><div className="container solutions-grid"><div className="solutions-copy"><p className="eyebrow">Financial & Digital Solutions</p><h2>Technology that makes finance <span>more actionable.</span></h2><p>Our future product suite is designed for data-poor CMSMEs and institutions that need stronger financial assessment, credit workflow and portfolio visibility.</p><Link className="text-link" href="/solutions">Explore solutions →</Link></div><div className="solution-list">{solutions.map(([number,title,text]) => <Link href="/solutions" key={number}><span>{number}</span><strong>{title}</strong><small>{text}</small></Link>)}</div></div></section>;
}
