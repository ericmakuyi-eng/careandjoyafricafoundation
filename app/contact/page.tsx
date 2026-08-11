import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-chrome";
import ContactForm from "./contact-form";

const socialLinks = [
  { name: "TikTok", mark: "TT", href: "https://www.tiktok.com/@careandjoyafrica" },
  { name: "Instagram", mark: "IG", href: "https://www.instagram.com/careandjoyafrica/" },
  { name: "LinkedIn", mark: "in", href: "https://www.linkedin.com/company/care-and-joy-africa/" },
  { name: "YouTube", mark: "▶", href: "https://www.youtube.com/@careandjoyafrica" },
];

export const metadata: Metadata = { title: "Contact Us | Care & Joy Africa", description: "Contact Care & Joy Africa in Kampala about donations, partnerships, volunteering, media and programme support." };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Contact us" title="Start with a conversation." accent="Build change with us." intro="Whether you are an individual donor, foundation, company, volunteer or community partner, we will help connect your interest to the right part of our work." image="images/community.webp" imageAlt="A grandmother and children in a Ugandan community" />
      <section className="contact-page section-pad">
        <div className="contact-details"><p className="eyebrow dark"><span />Care &amp; Joy Africa</p><h2>We would like to hear from you.</h2><p>Our headquarters are in Kampala, with programme outreach shaped around community need across Uganda.</p><div className="contact-methods"><div><span>Email</span><a href="mailto:info@careandjoyafrica.org">info@careandjoyafrica.org</a><a href="mailto:careandjoyafrica@gmail.com">careandjoyafrica@gmail.com</a></div><div><span>Telephone</span><a href="tel:+256777738484">+256 777 738 484</a><a href="tel:+256759738484">+256 759 738 484</a></div><div><span>Location</span><p>Kampala, Uganda<br/>East Africa</p></div><div><span>WhatsApp</span><a href="https://wa.me/256777738484?text=Hello%20Care%20%26%20Joy%20Africa%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work." target="_blank" rel="noreferrer">Message +256 777 738 484 ↗</a></div></div></div>
        <ContactForm />
      </section>
      <section className="social-section section-pad"><div><p className="eyebrow dark"><span />Follow the work</p><h2>Stay connected to every story of change.</h2><p>Follow Care &amp; Joy Foundation Africa for programme updates, community stories and opportunities to support.</p></div><div className="social-grid">{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`Follow Care and Joy Africa on ${social.name}`}><span>{social.mark}</span><strong>{social.name}</strong><small>Follow us ↗</small></a>)}</div></section>
      <section className="contact-paths section-pad"><article><span>For donors</span><h3>Request a proposal or programme budget.</h3><a href="mailto:info@careandjoyafrica.org?subject=Donor%20information%20request">Contact donor relations →</a></article><article><span>For organisations</span><h3>Build a grant, CSR or technical partnership.</h3><a href="mailto:info@careandjoyafrica.org?subject=Institutional%20partnership">Start a partnership →</a></article><article><span>For volunteers</span><h3>Offer time, skills or field support.</h3><a href="mailto:info@careandjoyafrica.org?subject=Volunteer%20interest">Express interest →</a></article><article><span>For communities</span><h3>Share a need or programme referral.</h3><a href="mailto:info@careandjoyafrica.org?subject=Community%20referral">Contact the team →</a></article></section>
      <section className="contact-note"><strong>Safeguarding and accountability</strong><p>Concerns relating to programme conduct, dignity or protection can be sent confidentially to <a href="mailto:info@careandjoyafrica.org?subject=Confidential%20safeguarding%20or%20accountability%20concern">info@careandjoyafrica.org</a>.</p></section>
      <SiteFooter />
    </main>
  );
}
