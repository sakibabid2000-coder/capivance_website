import Link from "next/link";
import Arrow from "@/components/ui/Arrow";

export default function ContactCTA() {
  return <section className="contact-cta"><div className="container contact-cta-inner"><div><p className="eyebrow">Build with CAPIVANCE</p><h2>Let’s turn capability into <span>action.</span></h2><p>Training, research, enterprise support, advisory or technology — start with a conversation.</p></div><Link className="button button-light" href="/contact">Contact CAPIVANCE <Arrow /></Link></div></section>;
}
