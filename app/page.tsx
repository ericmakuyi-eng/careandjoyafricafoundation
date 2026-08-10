import Link from "next/link";
import { programs } from "./components/program-data";
import { donateUrl, DonorCta, SectionHeading, SiteFooter, SiteHeader } from "./components/site-chrome";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow"><span />Rooted in Uganda. Open to the world.</p>
          <h1>Care meets the moment.<br/><em>Opportunity changes the future.</em></h1>
          <p>Care &amp; Joy Africa works alongside vulnerable children, women, older people and persons with disabilities—turning compassion into clean water, education, livelihoods and dignified care.</p>
          <div className="hero-actions"><a className="button button-primary" href={donateUrl}>Fund the next step <span>↗</span></a><Link className="text-link" href="/impact">See the evidence <span>→</span></Link></div>
          <div className="trust-row"><span>Community-led</span><span>Clear targets</span><span>Accountable growth</span></div>
        </div>
        <div className="home-hero-visual">
          <img src="images/kayunga.webp" alt="Care and Joy Africa delivering practical support in Kimooli Village" />
          <div className="hero-impact-card"><span>Recent field evidence</span><strong>7 families</strong><p>supported with relief, counselling and disability advocacy in Kimooli Village.</p></div>
          <div className="hero-founder-thumb"><img src="images/founder.webp" alt="Founder Ritah Namutebi with children during outreach" /></div>
        </div>
      </section>

      <section className="commitments" aria-label="2026 to 2027 programme commitments">
        <div className="section-kicker"><span>2026/27 commitments</span></div>
        <div className="commitment-grid">
          <article><strong>500</strong><span>household water purification kits</span></article>
          <article><strong>250</strong><span>children to receive education support</span></article>
          <article><strong>100</strong><span>women to gain livelihood skills</span></article>
          <article><strong>25</strong><span>assistive mobility devices planned</span></article>
        </div>
        <p className="source-note">Targets drawn from the FY 2026/27 strategic workplan.</p>
      </section>

      <section className="section-pad home-programs">
        <SectionHeading eyebrow="Our programs" title="Six connected paths to stronger communities." intro="Like leading global NGOs, we connect immediate relief to long-term change—so support today keeps creating opportunity tomorrow." />
        <div className="program-card-grid">
          {programs.map((program, index) => <Link className="program-link-card" href={`/programs/${program.slug}`} key={program.slug}><div className="program-card-image"><img src={program.image} alt="" /><span>0{index + 1}</span></div><div><small>{program.sdg}</small><h3>{program.name}</h3><p>{program.intro}</p><strong>Explore program →</strong></div></Link>)}
        </div>
        <Link className="view-all-link" href="/programs">View the complete programme portfolio →</Link>
      </section>

      <section className="home-founder">
        <div className="home-founder-image"><img src="images/founder.webp" alt="Ritah Namutebi, Founder and CEO of Care and Joy Africa" /></div>
        <div className="home-founder-copy"><p className="eyebrow"><span />Why we began</p><h2>A door opened for Ritah.<br/><em>Now she opens doors for others.</em></h2><p>After poverty and an attempted forced early marriage nearly ended her education, timely support helped Ritah Namutebi return to school and build a future. Care &amp; Joy Africa grew from her conviction that the right support, at the right time, can change a life’s direction.</p><Link className="text-link" href="/about">Meet our founder and team <span>→</span></Link></div>
      </section>

      <section className="section-pad proof-section">
        <SectionHeading eyebrow="Stories with evidence" title="Progress you can see." intro="We report through people, places and practical results—not only promises." />
        <div className="proof-grid">
          <Link href="/impact#itojo" className="proof-card proof-main"><img src="images/itojo.webp" alt="Borehole at Itojo Primary School" /><div><span>WASH · Ntoroko District</span><h3>A borehole gives classroom time back to Itojo’s children.</h3><p>Clean water now serves pupils, staff and neighbouring households.</p></div></Link>
          <Link href="/impact#veronica" className="proof-card"><img src="images/veronica.webp" alt="Veronica Nabunya continuing her nursing studies" /><div><span>Education</span><h3>Veronica is building a future in nursing.</h3><p>Our first education beneficiary is now in her second year at Mildmay Uganda.</p></div></Link>
          <Link href="/impact#kimooli" className="proof-card"><img src="images/kayunga.webp" alt="Kimooli Village community outreach" /><div><span>Inclusive care · Kayunga</span><h3>Seven families received practical, dignified support.</h3><p>Relief, counselling and advocacy reached households caring for children with disabilities.</p></div></Link>
        </div>
      </section>

      <section className="confidence-section section-pad">
        <div><p className="eyebrow"><span />Give with confidence</p><h2>Local leadership. Clear priorities. A plan donors can follow.</h2><p>Our one-year workplan links programme activities to delivery targets, responsible roles, quarterly milestones and a defined monitoring cycle.</p><Link className="button button-light" href="/impact">Explore accountability <span>→</span></Link></div>
        <div className="confidence-list"><article><span>01</span><strong>Listen locally</strong><p>Community needs shape the response before resources are committed.</p></article><article><span>02</span><strong>Fund clearly</strong><p>Programme lines show the priority, planned reach and intended use.</p></article><article><span>03</span><strong>Monitor often</strong><p>Weekly operations, monthly budget checks and quarterly board reviews.</p></article><article><span>04</span><strong>Learn and report</strong><p>Annual independent review is built into the scale-up plan.</p></article></div>
      </section>

      <DonorCta />
      <SiteFooter />
    </main>
  );
}
