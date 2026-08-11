import Link from "next/link";
import { DonorCta, PageHero, SectionHeading, SiteFooter, SiteHeader } from "./site-chrome";
import type { Program } from "./program-data";

export function ProgramPage({ program }: { program: Program }) {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow={program.eyebrow} title={program.name} accent={program.headline} intro={program.intro} image={program.image} imageAlt={program.imageAlt} />
      <section className="program-snapshot">
        <div><span>2026/27 target</span><strong>{program.target}</strong></div>
        <div><span>Planned investment</span><strong>{program.investment}</strong><small>{program.investmentNote}</small></div>
        <div><span>Global alignment</span><strong>{program.sdg}</strong></div>
      </section>
      <section className="section-pad program-focus">
        <SectionHeading eyebrow="How the programme works" title="Practical support. Sustainable change." intro="We address the immediate barrier, strengthen the person or household, and build local systems that can carry progress forward." />
        <div className="focus-grid">{program.focus.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>
      <section className="outcomes-section section-pad">
        <div><p className="eyebrow"><span />What success looks like</p><h2>We measure the change that matters in daily life.</h2></div>
        <ul>{program.outcomes.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul>
      </section>
      <section className="delivery-section section-pad">
        <SectionHeading eyebrow="Our delivery model" title="From listening to learning." intro="Each intervention follows a simple, accountable cycle designed around the people it serves." />
        <ol>{program.delivery.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p></li>)}</ol>
      </section>
      {program.evidence && <section className="program-evidence"><div className="evidence-image"><img src={program.evidence.image} alt="" /></div><div><p className="eyebrow"><span />From the field</p><h2>{program.evidence.title}</h2><p>{program.evidence.copy}</p><a className="text-link" href={program.evidence.href}>Read the full story <span>↗</span></a></div></section>}
      <section className="related-programs"><span>Explore more</span><Link href="/programs">View all Care &amp; Joy programs →</Link></section>
      <DonorCta title={`Help advance ${program.name.toLowerCase()} in Uganda.`} />
      <SiteFooter />
    </main>
  );
}
