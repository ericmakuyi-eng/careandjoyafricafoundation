import type { Metadata } from "next";
import Link from "next/link";
import { donateUrl, PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = { title: "Donate | Care & Joy Africa", description: "Support Care & Joy Africa with a one-time gift, monthly partnership or programme sponsorship." };

export default function DonatePage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Ways to give" title="Your generosity can become" accent="someone’s turning point." intro="Choose a one-time gift or commit monthly. Selecting a donation option will take you to Care & Joy Africa’s JPesa payment page to complete your contribution." image="images/community.webp" imageAlt="A grandmother with children in her care" />

      <section className="giving-page section-pad">
        <SectionHeading eyebrow="Choose your path" title="Give in the way that fits you." intro="Select a donation option to continue to the JPesa payment page, or contact our team to design a larger institutional partnership." />
        <div className="giving-card-grid">
          <article><span>One-time gift</span><h2>$100</h2><p>Suggested contribution toward school materials and education support.</p><a className="button button-primary" href={donateUrl}>Donate through JPesa <span>↗</span></a></article>
          <article className="giving-featured"><span>Monthly partner</span><h2>$500</h2><p>Suggested monthly partnership across essential community services.</p><a className="button button-light" href={donateUrl}>Continue to JPesa <span>↗</span></a></article>
          <article><span>Custom or institutional</span><h2>Let’s talk</h2><p>Design a grant, corporate partnership or designated programme gift.</p><a className="button button-outline" href="mailto:info@careandjoyafrica.org?subject=Custom%20donation%20or%20institutional%20partnership">Contact our team <span>↗</span></a></article>
        </div>
        <p className="giving-guidance">Suggested amounts reflect Care &amp; Joy Africa’s current public donor guidance. No tax-deductibility claim is made. Online contributions are completed on the JPesa page selected by the organisation.</p>
      </section>

      <section className="program-sponsorship section-pad">
        <SectionHeading eyebrow="Sponsor a priority" title="Direct your interest. Build a clear scope." intro="For larger gifts, our team can prepare a proposal linked to programme targets, milestones and reporting." light />
        <div>{[["Clean water & WASH","Boreholes, purification kits and school hygiene.","/programs/wash"],["Children & education","School fees, learning materials and mentorship.","/programs/children-education"],["Women’s livelihoods","Skills training, enterprise and savings groups.","/programs/women"],["Special needs","Mobility aids, care camps and caregiver support.","/programs/special-needs"],["Elderly care","Safe shelter, relief and medical access.","/programs/elderly"],["Girl child","Education, menstrual health and protection.","/programs/girl-child"]].map(([name, copy, href]) => <Link href={href} key={name}><span>{name}</span><p>{copy}</p><strong>View programme →</strong></Link>)}</div>
      </section>

      <section className="donor-process section-pad">
        <SectionHeading eyebrow="What happens next" title="A human, transparent giving process." />
        <ol><li><span>01</span><h3>Choose</h3><p>Select a giving path or programme priority.</p></li><li><span>02</span><h3>Continue</h3><p>The donation button redirects you to the JPesa payment page.</p></li><li><span>03</span><h3>Complete</h3><p>Enter and confirm your contribution using the available JPesa options.</p></li><li><span>04</span><h3>Follow</h3><p>For designated partnerships, agree milestones and reporting with our team.</p></li></ol>
      </section>

      <section className="donor-confidence section-pad"><div><p className="eyebrow"><span />Give with confidence</p><h2>We are building the systems serious donors expect.</h2><p>The strategic plan includes formal governance, finance and HR systems, quarterly board review, safeguarding policy development and independent annual audit.</p><Link className="text-link" href="/impact">Review our accountability plan <span>→</span></Link></div><div><article><strong>Clear scope</strong><p>Know the programme, target and planned investment line.</p></article><article><strong>Local leadership</strong><p>Field priorities are shaped close to the communities served.</p></article><article><strong>Defined review</strong><p>Weekly, monthly, quarterly and annual checks are built into the plan.</p></article></div></section>

      <section className="donate-faq section-pad"><SectionHeading eyebrow="Donation questions" title="Before you give." /><div><details><summary>How do I donate online?</summary><p>Select Donate or any JPesa donation button. You will be redirected to the payment page provided by Care &amp; Joy Africa.</p></details><details><summary>Can I designate my donation?</summary><p>You can express a programme preference. The team will confirm whether the gift can be restricted and document the agreed scope.</p></details><details><summary>Can a company or foundation partner with Care &amp; Joy?</summary><p>Yes. Corporate, foundation, technical and grant partnerships are welcome. A tailored concept and budget can be prepared.</p></details><details><summary>Will I receive project information?</summary><p>For designated and institutional partnerships, reporting expectations, milestones and communication can be agreed before funding.</p></details><details><summary>Can I ask for help before paying?</summary><p>Yes. Contact the donor team by email or WhatsApp if you need clarification about the payment page or programme allocation.</p></details></div></section>
      <section className="final-give"><div><h2>Ready to begin?</h2><p>Continue to JPesa to complete your contribution.</p></div><div><a className="button button-primary" href={donateUrl}>Donate through JPesa <span>↗</span></a><a className="button button-outline-light" href="https://wa.me/256777738484?text=Hello%20Care%20%26%20Joy%20Africa%2C%20I%20would%20like%20to%20support%20your%20work.">Talk on WhatsApp</a></div></section>
      <SiteFooter />
    </main>
  );
}
