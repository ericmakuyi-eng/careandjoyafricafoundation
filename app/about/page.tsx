import type { Metadata } from "next";
import Link from "next/link";
import { DonorCta, PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = { title: "About Us | Care & Joy Africa", description: "Meet Care & Joy Africa's founder, leadership, team structure, mission, values and governance approach." };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="About Care & Joy Africa" title="Local experience." accent="Community power. Lasting possibility." intro="We are a Ugandan charity working with vulnerable children, women, older people and persons with disabilities to expand access to education, health, clean water, livelihoods and dignified care." image="images/founder.webp" imageAlt="Founder and CEO Ritah Namutebi during community outreach" />

      <section className="about-intro section-pad">
        <div><p className="eyebrow dark"><span />Our foundation</p><h2>We believe care should lead to capability.</h2></div>
        <div className="about-copy"><p>Care &amp; Joy Africa began as a volunteer-led response to the realities facing families across Uganda: children missing school, women excluded from opportunity, communities relying on unsafe water, older people living without support, and persons with disabilities facing preventable barriers.</p><p>Our work responds to immediate need while helping people build the confidence, skills, networks and systems that make progress last.</p></div>
      </section>

      <section className="vision-grid">
        <article><span>Our vision</span><h2>A society where every vulnerable person can live with dignity and realise their potential.</h2></article>
        <article><span>Our mission</span><h2>To transform lives through education, healthcare, empowerment and community-based support that fosters self-reliance, hope and joy.</h2></article>
      </section>

      <section className="founder-profile section-pad" id="founder">
        <div className="founder-profile-image"><img src="images/founder.webp" alt="Ritah Namutebi, Founder and CEO" /><div><span>Founder &amp; CEO</span><strong>Ritah Namutebi</strong></div></div>
        <div className="founder-profile-copy"><p className="eyebrow dark"><span />Leadership shaped by lived experience</p><h2>Ritah knows what a second chance can unlock.</h2><p>After Senior Four, poverty put Ritah’s education at risk and relatives attempted to force her into an early marriage. She resisted, sought help and, through the support of people who believed in her, eventually completed A-level, earned a Bachelor’s Degree in Entrepreneurship and later a Master’s in Business Administration.</p><p>That turning point became a calling. Ritah began using the resources she had to support vulnerable families and girls. Today she leads Care &amp; Joy Africa with a personal commitment to education, women and girl-child empowerment, clean water, gender equality, disability inclusion and care for older people.</p><blockquote>“Because I was blessed with a brighter future, I am dedicated to lifting others too.”</blockquote><a className="text-link dark-link" href="https://careandjoyafrica.org/namutebi-ritahs-story-from-early-marriage-trap-to-executive-director/">Read Ritah’s full story <span>↗</span></a></div>
      </section>

      <section className="team-section section-pad" id="staff">
        <SectionHeading eyebrow="Our people" title="Leadership close to the work." intro="We are building a professional institution without losing the local relationships and volunteer energy that made the work possible." />
        <div className="team-grid">
          <article className="team-card team-featured"><img src="images/founder.webp" alt="Ritah Namutebi" /><div><span>Founder &amp; Chief Executive Officer</span><h3>Ritah Namutebi</h3><p>Organisation strategy, donor relationships, partnerships and community mission.</p></div></article>
          <article className="team-card"><div className="team-placeholder">H</div><div><span>Co-Founder · Community Outreach</span><h3>Hassan</h3><p>Field monitoring, community mobilisation and direct outreach alongside families.</p></div></article>
          <article className="team-card"><div className="team-placeholder">B</div><div><span>Governance</span><h3>Board of Directors</h3><p>Strategic oversight, policy approval, risk review and accountability to stakeholders.</p></div></article>
          <article className="team-card"><div className="team-placeholder">V</div><div><span>Programme delivery</span><h3>Volunteer Leads</h3><p>WASH, women’s empowerment, child protection, inclusion and resource mobilisation.</p></div></article>
        </div>
        <p className="team-note">Only leadership names confirmed in Care &amp; Joy Africa’s current public materials are shown. Additional staff profiles can be added when official names and biographies are approved.</p>
      </section>

      <section className="planned-team section-pad">
        <div><p className="eyebrow"><span />Building the institution</p><h2>A professional team planned for responsible scale.</h2><p>The FY 2026/27 roadmap includes merit-based recruitment for four management roles. These are planned positions, not current staff appointments.</p></div>
        <div className="role-list"><article><span>Programme Director</span><p>Programme quality, monitoring, donor reporting and field management.</p></article><article><span>Finance Manager</span><p>Internal controls, audit readiness and donor financial reporting.</p></article><article><span>Human Resource Manager</span><p>Safeguarding, performance, recruitment and organisational development.</p></article><article><span>Communications Manager</span><p>Public accountability, donor relations, visibility and partnerships.</p></article></div>
      </section>

      <section className="values-section section-pad">
        <SectionHeading eyebrow="Our values" title="How we choose to work." />
        <div className="values-grid">{[["Compassion","We listen with empathy and respond to the whole person."],["Integrity","We value transparency, accountability and trust."],["Empowerment","We build ability, confidence and self-reliance."],["Community","We work alongside local people—not around them."],["Respect","Every person is treated with dignity."],["Sustainability","We pursue solutions that can outlast a single intervention."]].map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="governance-strip"><div><span>Weekly</span><strong>Operations review</strong></div><div><span>Monthly</span><strong>Budget analysis</strong></div><div><span>Quarterly</span><strong>Board review</strong></div><div><span>Annually</span><strong>Independent audit</strong></div></section>
      <DonorCta title="Stand with a locally led organisation building for the long term." />
      <SiteFooter />
    </main>
  );
}
