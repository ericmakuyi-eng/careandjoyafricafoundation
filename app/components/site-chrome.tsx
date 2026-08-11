import Link from "next/link";

export const programLinks = [
  { href: "/programs/women", label: "Women" },
  { href: "/programs/wash", label: "WASH" },
  { href: "/programs/special-needs", label: "Special Needs" },
  { href: "/programs/elderly", label: "Elderly" },
  { href: "/programs/children-education", label: "Children & Education" },
  { href: "/programs/girl-child", label: "Girl Child" },
];

export const donateUrl = "https://my.jpesa.com/?dad=xp";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " brand-inverse" : ""}`} href="/" aria-label="Care and Joy Africa home">
      <span className="brand-emblem" aria-hidden="true">
        <img src="images/care-and-joy-emblem.png" alt="" />
      </span>
      <span className="brand-name"><strong>Care &amp; Joy</strong><small><span>Foundation</span> Africa</small></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topline">
        <span>Kampala, Uganda · Community-led change</span>
        <div><a href="tel:+256777738484">+256 777 738 484</a><a href="mailto:info@careandjoyafrica.org">info@careandjoyafrica.org</a></div>
      </div>
      <div className="nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <div className="nav-dropdown">
            <Link href="/programs" aria-haspopup="true">Programs <span aria-hidden="true">⌄</span></Link>
            <div className="dropdown-panel">
              <div className="dropdown-intro"><span>What we do</span><strong>Six connected paths to stronger communities.</strong><Link href="/programs">Explore all programs →</Link></div>
              <div className="dropdown-links">
                {programLinks.map((item, index) => <Link href={item.href} key={item.href}><small>0{index + 1}</small>{item.label}<span>→</span></Link>)}
              </div>
            </div>
          </div>
          <Link href="/impact">Impact</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
        <a className="button button-primary nav-donate" href={donateUrl}>Donate <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><i /><i /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/programs">Programs overview</Link>
            <details className="mobile-programs"><summary>Program areas</summary>{programLinks.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}</details>
            <Link href="/impact">Impact</Link><Link href="/contact">Contact us</Link><a className="mobile-donate" href={donateUrl}>Donate now</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead"><Brand inverse /><p>Empowering. Nurturing. Smiling.</p><span>Working alongside vulnerable communities in Uganda to build dignity, opportunity and lasting change.</span></div>
      <div className="footer-nav"><strong>Explore</strong><Link href="/about">About us</Link><Link href="/programs">Programs</Link><Link href="/impact">Impact</Link><Link href="/donate">Ways to give</Link></div>
      <div className="footer-nav"><strong>Programs</strong>{programLinks.slice(0, 4).map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
      <div className="footer-contact"><strong>Start a conversation</strong><a href="mailto:info@careandjoyafrica.org">info@careandjoyafrica.org</a><a href="tel:+256777738484">+256 777 738 484</a><a href="tel:+256759738484">+256 759 738 484</a><a href="https://wa.me/256777738484?text=Hello%20Care%20%26%20Joy%20Africa%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20work." target="_blank" rel="noreferrer">WhatsApp our team ↗</a><Link href="/contact">Contact our team →</Link></div>
      <div className="footer-bottom"><span>© 2026 Care &amp; Joy Foundation Africa</span><span>Kampala, Uganda · East Africa</span><a href="https://careandjoyafrica.org/">Original organisation website ↗</a></div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, image, imageAlt, accent }: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string; accent?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy"><p className="eyebrow"><span />{eyebrow}</p><h1>{title}<em>{accent}</em></h1><p>{intro}</p></div>
      <div className="page-hero-image"><img src={image} alt={imageAlt} /></div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return <div className={`section-heading${light ? " heading-light" : ""}`}><div><p className={`eyebrow${light ? "" : " dark"}`}><span />{eyebrow}</p><h2>{title}</h2></div>{intro && <p>{intro}</p>}</div>;
}

export function DonorCta({ title = "Help turn the next plan into a lasting result.", copy = "Give once, become a monthly partner, or fund a complete programme with clear targets and reporting." }: { title?: string; copy?: string }) {
  return (
    <section className="donor-cta"><div><p className="eyebrow"><span />Your partnership matters</p><h2>{title}</h2><p>{copy}</p></div><div className="cta-actions"><Link className="button button-primary" href="/donate">Explore ways to give <span>↗</span></Link><Link className="text-link" href="/contact">Talk to our team <span>→</span></Link></div></section>
  );
}
