import type { Metadata } from "next";
import Link from "next/link";
import { DonorCta, PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = { title: "Our Impact | Care & Joy Africa", description: "See Care & Joy Africa's field evidence, programme targets, funding priorities and accountability cycle." };

export default function ImpactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Impact and accountability" title="Evidence before applause." accent="Learning before scale." intro="We combine verified field stories with clear future targets so donors can see what has happened, what is planned and how progress will be reviewed." image="images/itojo.webp" imageAlt="Completed borehole at Itojo Primary School" />

      <section className="impact-now section-pad">
        <SectionHeading eyebrow="Evidence on the ground" title="Early results. Human meaning." intro="These are concrete results described in Care & Joy Africa’s current public field reports." />
        <div className="impact-now-grid"><article><strong>1</strong><span>operational borehole</span><p>Serving Itojo Primary School and neighbouring households.</p></article><article><strong>7</strong><span>families reached</span><p>Relief, counselling and disability advocacy in Kimooli Village.</p></article><article><strong>1</strong><span>education journey</span><p>Veronica, our first beneficiary, is in her second year of nursing studies.</p></article><article><strong>3</strong><span>district stories</span><p>Field evidence documented across Ntoroko, Kayunga and Kampala-linked outreach.</p></article></div>
      </section>

      <section className="impact-stories section-pad">
        <article id="itojo"><div><img src="images/itojo.webp" alt="Clean water flowing from the Itojo Primary School borehole" /></div><div><span>01 · WASH · Ntoroko District</span><h2>Clean water gives time, health and learning back.</h2><p>Before the borehole, pupils and teachers left lessons to walk for water from contaminated open sources. Care &amp; Joy financed a deep borehole at Itojo Primary School that also serves surrounding families.</p><a href="https://careandjoyafrica.org/clean-water-bright-futures-monitoring-our-vital-borehole-project-at-itojo-primary-school/">Read the field report ↗</a></div></article>
        <article id="veronica"><div><img src="images/veronica.webp" alt="Veronica Nabunya during her nursing studies" /></div><div><span>02 · Education sponsorship</span><h2>A missed education became a nursing future.</h2><p>Veronica first met Care &amp; Joy’s founder while looking for domestic work after her family could no longer afford school. Full sponsorship helped her return to education; she is now in her second year of nursing studies at Mildmay Uganda.</p><a href="https://careandjoyafrica.org/from-maid-to-nurse-celebrating-veronica-nabunyas-inspiring-journey-with-care-joy-foundation/">Read Veronica’s story ↗</a></div></article>
        <article id="kimooli"><div><img src="images/kayunga.webp" alt="Care and Joy Africa team supporting families in Kimooli Village" /></div><div><span>03 · Inclusive care · Kayunga District</span><h2>Practical relief delivered with time to listen.</h2><p>Following a community assessment, the team reached seven families in Kimooli Village with food, clothing, counselling and advocacy—including households caring for children with complex disabilities.</p><a href="https://careandjoyafrica.org/beyond-kampala-delivering-hope-and-essential-relief-to-kayunga-district/">Read the outreach report ↗</a></div></article>
      </section>

      <section className="targets-section section-pad">
        <SectionHeading eyebrow="What comes next" title="FY 2026/27 targets." intro="Planned targets are shown separately from completed results—a transparency practice used by leading international NGOs." light />
        <div className="targets-grid"><div><strong>500</strong><span>water purification kits</span></div><div><strong>3</strong><span>community boreholes</span></div><div><strong>250</strong><span>children supported</span></div><div><strong>100</strong><span>women trained</span></div><div><strong>25</strong><span>mobility aids</span></div><div><strong>3</strong><span>homes for older persons</span></div></div>
      </section>

      <section className="funding-page-section section-pad">
        <div className="funding-page-intro"><p className="eyebrow dark"><span />Funding priorities</p><h2>Five core field programme lines total UGX 212.5 million.</h2><p>This figure is calculated from the itemised programme lines and excludes resource mobilisation, institutional setup, systems and staffing.</p><Link className="button button-outline" href="/contact">Request the workplan <span>→</span></Link></div>
        <div className="funding-bars">
          {[["WASH & boreholes","UGX 114M","53.6%"],["Older persons’ housing","UGX 45M","21.2%"],["Children & education","UGX 20M","9.4%"],["Special needs & inclusion","UGX 17M","8%"],["Women’s livelihoods","UGX 16.5M","7.8%"]].map(([name, value, width]) => <div key={name}><p><span>{name}</span><strong>{value}</strong></p><i><b style={{width}} /></i></div>)}
        </div>
      </section>

      <section className="accountability-page section-pad">
        <SectionHeading eyebrow="How accountability works" title="Frequent review. Clear responsibility." intro="The workplan builds monitoring into the operating rhythm rather than waiting until the year ends." />
        <div className="accountability-steps"><article><span>Every week</span><h3>Operations meeting</h3><p>Programme leads track delivery against milestones and resolve field barriers.</p></article><article><span>Every month</span><h3>Budget variance analysis</h3><p>Spending is reviewed against line items; material deviations go to the board.</p></article><article><span>Every quarter</span><h3>Board review</h3><p>Management presents programme progress and financial reporting.</p></article><article><span>Every year</span><h3>Independent audit</h3><p>External financial and programmatic assessment is planned at year end.</p></article></div>
      </section>

      <section className="year-roadmap section-pad"><div><p className="eyebrow"><span />A year built for scale</p><h2>Formalise. Deliver. Build capacity. Scale responsibly.</h2></div><ol><li><span>Q1</span><strong>Legal and governance setup</strong><p>Local engagement, registration, tax compliance, banking and board systems.</p></li><li><span>Q2</span><strong>Field programme delivery</strong><p>Donor mobilisation and volunteer-led interventions across priority areas.</p></li><li><span>Q3</span><strong>Institutional capacity</strong><p>Office setup, equipment and recruitment of professional management roles.</p></li><li><span>Q4</span><strong>Systems and partnerships</strong><p>Policies, finance and HR systems, strategic alliances and flagship launches.</p></li></ol></section>
      <DonorCta title="Help us turn transparent targets into documented results." />
      <SiteFooter />
    </main>
  );
}
