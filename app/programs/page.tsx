import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "../components/program-data";
import { DonorCta, PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = { title: "Programs | Care & Joy Africa", description: "Explore Care & Joy Africa's programs for women, water and sanitation, special needs, elderly care, children and education, and the girl child." };

export default function ProgramsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Our programs" title="Meeting urgent needs." accent="Building lasting opportunity." intro="Our six programme areas are designed to work together because the challenges facing a family rarely arrive one at a time." image="images/children.webp" imageAlt="Children during a Care and Joy Africa community programme" />
      <section className="section-pad programs-overview">
        <SectionHeading eyebrow="Programme portfolio" title="Choose an area. See the plan." intro="Each page explains the need, our response, planned reach, investment line and the outcomes we intend to track." />
        <div className="program-overview-grid">{programs.map((program, index) => <Link href={`/programs/${program.slug}`} key={program.slug}><div className="program-overview-image"><img src={program.image} alt="" /><span>0{index + 1}</span></div><div><small>{program.eyebrow}</small><h2>{program.name}</h2><p>{program.intro}</p><dl><div><dt>Target</dt><dd>{program.target}</dd></div><div><dt>Investment</dt><dd>{program.investment}</dd></div></dl><strong>Explore this program →</strong></div></Link>)}</div>
      </section>
      <section className="delivery-model section-pad">
        <SectionHeading eyebrow="One shared method" title="Listen. Design. Deliver. Learn." intro="Programme details differ, but our commitment to community ownership and responsible use of funds remains consistent." light />
        <ol><li><span>01</span><strong>Listen locally</strong><p>Assess needs with families, schools, caregivers and local leaders.</p></li><li><span>02</span><strong>Design together</strong><p>Match the response to the real barrier and available local capacity.</p></li><li><span>03</span><strong>Deliver clearly</strong><p>Set targets, responsible roles, budgets and a practical timeline.</p></li><li><span>04</span><strong>Learn and improve</strong><p>Monitor delivery, report results and adapt what does not work.</p></li></ol>
      </section>
      <section className="crosscutting section-pad"><div><p className="eyebrow dark"><span />Cross-cutting priorities</p><h2>Protection, gender equality, mental health and sustainability run through every program.</h2></div><div className="tag-cloud"><span>Safeguarding</span><span>Gender equality</span><span>Community ownership</span><span>Psychosocial wellbeing</span><span>Climate resilience</span><span>Disability inclusion</span><span>Education</span><span>Accountability</span></div></section>
      <DonorCta title="Fund the programme that speaks most clearly to you." />
      <SiteFooter />
    </main>
  );
}
