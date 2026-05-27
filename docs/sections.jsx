// ============================================
// CoderFire BR — page sections
// ============================================

const { useState: _useState, useEffect: _useEffect, useRef: _useRef } = React;

// ---------- HERO ----------
function Hero({ onCta }) {
  const t = useT();
  const { terminal, stats } = t.hero;

  return (
    <section className="cf-hero" id="top">
      <div className="cf-hero-glow"></div>
      <div className="cf-hero-bg-grid"></div>
      <div className="cf-hero-inner">
        <div className="cf-hero-text">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="cf-hero-title">
            {t.hero.title1}<br/>
            <span className="cf-hero-title-accent">{t.hero.title2}</span>
          </h1>
          <p className="cf-hero-sub">{t.hero.sub}</p>
          <div className="cf-hero-cta">
            <Button variant="primary" size="lg" glow onClick={onCta} icon={<Icon.ArrowRight size={18}/>}>{t.hero.cta}</Button>
            <Button variant="ghost" size="lg" as="a" href="#work">{t.hero.ctaSecondary}</Button>
          </div>
          <div className="cf-hero-meta">
            <span className="cf-hero-meta-dot" />
            <span>{t.hero.metaPrefix} <strong>{t.hero.metaStrong}</strong></span>
          </div>
        </div>

        <div className="cf-hero-terminal" aria-hidden="true">
          <div className="cf-term-chrome">
            <span className="cf-term-dot" style={{background:'var(--cf-magma)'}}></span>
            <span className="cf-term-dot" style={{background:'var(--cf-flare)'}}></span>
            <span className="cf-term-dot" style={{background:'var(--cf-success, #28a745)'}}></span>
            <span className="cf-term-title">{terminal.title}</span>
          </div>
          <div className="cf-term-body">
            {terminal.lines.map((l, i) => (
              <div className="cf-term-line" key={i} style={{ animationDelay: `${i * 220}ms` }}>
                {l.p && <span className="cf-term-prompt">{l.p} <span className="cf-term-tick">$</span></span>}
                {l.c && <span className="cf-term-cmd">{l.c}</span>}
                {l.d && <span className={l.p ? "cf-term-out" : "cf-term-block"}>{l.d}</span>}
              </div>
            ))}
            <div className="cf-term-line cf-term-cursor-line">
              <span className="cf-term-prompt">~/coderfire <span className="cf-term-tick">$</span></span>
              <span className="cf-term-cursor" />
            </div>
          </div>
        </div>
      </div>

      <div className="cf-hero-stats">
        {stats.map(s => (
          <div key={s.n + s.l}>
            <span className="cf-stat-n">{s.n}</span>
            <span className="cf-stat-l">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- LOGO STRIP ----------
function LogoStrip() {
  const t = useT();
  const logos = ["Pinterest", "Accenture", "BairesDev", "Pollux", "Refatore"];
  return (
    <section className="cf-strip">
      <div className="cf-strip-label">{t.logoStrip.label}</div>
      <div className="cf-strip-logos">
        {logos.map(l => <span key={l} className="cf-strip-logo">{l}</span>)}
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
function ServiceCard({ tag, title, desc, features, popular, flag }) {
  return (
    <div className={`cf-service ${popular ? 'cf-service-hot' : ''}`}>
      {popular && <div className="cf-service-flag">{flag}</div>}
      <Eyebrow>{tag}</Eyebrow>
      <h3 className="cf-service-title">{title}</h3>
      <p className="cf-service-desc">{desc}</p>
      <ul className="cf-service-list">
        {features.map(f => <li key={f}><Icon.Check size={14}/> {f}</li>)}
      </ul>
    </div>
  );
}

function Services({ onCta }) {
  const t = useT();
  return (
    <section id="services" className="cf-section">
      <Eyebrow>{t.services.eyebrow}</Eyebrow>
      <h2 className="cf-section-title">{t.services.title}</h2>
      <p className="cf-section-sub">{t.services.sub}</p>
      <div className="cf-service-grid">
        {t.services.cards.map(card => (
          <ServiceCard
            key={card.tag}
            tag={card.tag}
            title={card.title}
            desc={card.desc}
            features={card.features}
            popular={card.popular}
            flag={card.flag}
          />
        ))}
      </div>
      <div className="cf-services-foot">
        <span>{t.services.notSure}</span>
        <a className="cf-link-arrow" href="#" onClick={(e)=>{e.preventDefault(); onCta();}}>
          {t.services.ctaLink} <Icon.ArrowRight size={14}/>
        </a>
      </div>
    </section>
  );
}

// ---------- CAPABILITIES ----------
function Capabilities() {
  const t = useT();
  const icons = [
    <Icon.Layers size={18}/>,
    <Icon.Brain size={18}/>,
    <Icon.Eye size={18}/>,
    <Icon.Cpu size={18}/>,
    <Icon.Database size={18}/>,
    <Icon.Smartphone size={18}/>,
    <Icon.Cloud size={18}/>,
    <Icon.Layers size={18}/>,
  ];
  return (
    <section id="capabilities" className="cf-section">
      <Eyebrow>{t.capabilities.eyebrow}</Eyebrow>
      <h2 className="cf-section-title">{t.capabilities.title}</h2>
      <p className="cf-section-sub">{t.capabilities.sub}</p>
      <div className="cf-cap-grid">
        {t.capabilities.groups.map((g, i) => (
          <div className="cf-cap" key={g.title}>
            <div className="cf-cap-icon">{icons[i]}</div>
            <div className="cf-cap-title">{g.title}</div>
            <div className="cf-cap-stack">{g.stack}</div>
            <p className="cf-cap-blurb">{g.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- CASE STUDIES ----------
function CaseRow({ tag, title, metric, metricLabel, desc, stack }) {
  return (
    <article className="cf-case">
      <div className="cf-case-meta">
        <Eyebrow color="var(--cf-flare)">{tag}</Eyebrow>
        <div className="cf-case-metric"><span className="cf-case-n">{metric}</span><span className="cf-case-ml">{metricLabel}</span></div>
        <div className="cf-case-stack">{stack}</div>
      </div>
      <div className="cf-case-body">
        <h3 className="cf-case-title">{title}</h3>
        <p className="cf-case-desc">{desc}</p>
      </div>
    </article>
  );
}

function CaseStudies() {
  const t = useT();
  return (
    <section id="work" className="cf-section cf-section-dark">
      <Eyebrow color="var(--cf-flare)">{t.caseStudies.eyebrow}</Eyebrow>
      <h2 className="cf-section-title">{t.caseStudies.title}</h2>
      <p className="cf-section-sub" style={{color:'oklch(0.78 0.012 60)'}}>{t.caseStudies.sub}</p>
      <div className="cf-case-list">
        {t.caseStudies.cases.map(c => (
          <CaseRow
            key={c.tag}
            tag={c.tag}
            title={c.title}
            metric={c.metric}
            metricLabel={c.metricLabel}
            stack={c.stack}
            desc={c.desc}
          />
        ))}
      </div>
    </section>
  );
}

// ---------- INDUSTRIES ----------
function Industries() {
  const t = useT();
  return (
    <section id="industries" className="cf-section">
      <Eyebrow>{t.industries.eyebrow}</Eyebrow>
      <h2 className="cf-section-title">{t.industries.title}</h2>
      <p className="cf-section-sub">{t.industries.sub}</p>
      <ul className="cf-ind-grid">
        {t.industries.list.map(i => (
          <li className="cf-ind" key={i.tag}>
            <span className="cf-ind-tag">{i.tag}</span>
            <span className="cf-ind-note">{i.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------- HOW WE WORK ----------
function HowWeWork() {
  const principles = [
    { n: "01", t: "Senior craftsmanship.", d: "18+ years of production code behind every line CoderFire ships. No junior hands hidden on the invoice." },
    { n: "02", t: "Predictable cadence.", d: "Bi-weekly demos, weekly written status. You always know what shipped, what didn't, and why." },
    { n: "03", t: "Your repo, your tools.", d: "Work happens in your VCS, your tracker, your Slack. No proprietary lock-in, no hand-off surprise." },
    { n: "04", t: "Remote-first · BRT ±5h.", d: "Brasília time overlaps São Paulo, Lisbon, and NYC the same day. One zone, three meetings, no nights." },
    { n: "05", t: "Boring on purpose.", d: "We pick the boring stack that works and push back on framework-of-the-month. That's why you hire us." },
    { n: "06", t: "Português · English · Español.", d: "Native PT. Proficient EN. Working ES. Same engineer reads your contract, your roadmap, and your standup." },
  ];
  return (
    <section className="cf-section">
      <Eyebrow>HOW CODERFIRE WORKS · 06</Eyebrow>
      <h2 className="cf-section-title">Six rules. Non-negotiable.</h2>
      <div className="cf-principles">
        {principles.map(p => (
          <div className="cf-principle" key={p.n}>
            <div className="cf-principle-n">{p.n}</div>
            <div className="cf-principle-body">
              <div className="cf-principle-t">{p.t}</div>
              <div className="cf-principle-d">{p.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- LEADERSHIP ----------
function Leadership() {
  const t = useT();
  return (
    <section id="team" className="cf-section">
      <Eyebrow>{t.leadership.eyebrow}</Eyebrow>
      <h2 className="cf-section-title">{t.leadership.title}</h2>
      <p className="cf-section-sub">{t.leadership.sub}</p>

      <div className="cf-lead">
        <div className="cf-lead-card">
          <div className="cf-lead-avatar">
            <span className="cf-lead-initials">RF</span>
            <span className="cf-lead-flame"><Logo size={28} /></span>
          </div>
          <div className="cf-lead-body">
            <div className="cf-lead-name">{t.leadership.name}</div>
            <div className="cf-lead-role">{t.leadership.role}</div>
            <p className="cf-lead-bio" dangerouslySetInnerHTML={{__html: t.leadership.bio}} />
            <div className="cf-lead-tags">
              <span className="cf-tag">Python</span>
              <span className="cf-tag">React</span>
              <span className="cf-tag">TypeScript</span>
              <span className="cf-tag">OpenCV</span>
              <span className="cf-tag">AirFlow</span>
              <span className="cf-tag">C/C++</span>
            </div>
            <div className="cf-lead-links">
              <a href="https://linkedin.com/in/basask/" target="_blank" rel="noreferrer"><Icon.Linkedin size={14}/> linkedin.com/in/basask</a>
              <a href="https://github.com/basask" target="_blank" rel="noreferrer"><Icon.Github size={14}/> github.com/basask</a>
              <a href="mailto:rafael@coderfire.com.br"><Icon.Mail size={14}/> rafael@coderfire.com.br</a>
            </div>
          </div>
        </div>

        <div className="cf-lead-side">
          <Eyebrow>{t.leadership.cvLabel}</Eyebrow>
          <ul className="cf-cv">
            <li><span className="cf-cv-y">2021&nbsp;—&nbsp;now</span><span><strong>Pinterest</strong> · Software Engineer · Business Platform</span></li>
            <li><span className="cf-cv-y">2021&nbsp;—&nbsp;22</span><span><strong>Refatore</strong> · Co-Founder, then Board Member</span></li>
            <li><span className="cf-cv-y">2018&nbsp;—&nbsp;21</span><span><strong>Pollux / Accenture</strong> · Technical Leader</span></li>
            <li><span className="cf-cv-y">2015&nbsp;—&nbsp;18</span><span><strong>Collabo</strong> · COO &amp; Tech Lead</span></li>
            <li><span className="cf-cv-y">2012&nbsp;—&nbsp;15</span><span><strong>Humantech</strong> · Senior Developer</span></li>
            <li><span className="cf-cv-y">2011&nbsp;—&nbsp;13</span><span><strong>OrangeBox</strong> · Founder · Android POS</span></li>
          </ul>
          <div className="cf-cv-edu">
            <div className="cf-cv-edu-row"><span className="cf-cv-edu-y">2018</span><span>Deep Learning Specialization · <em>DeepLearning.ai</em></span></div>
            <div className="cf-cv-edu-row"><span className="cf-cv-edu-y">2017</span><span>Machine Learning · <em>Stanford</em></span></div>
            <div className="cf-cv-edu-row"><span className="cf-cv-edu-y">2011</span><span>Project Management · <em>PUC-PR</em></span></div>
            <div className="cf-cv-edu-row"><span className="cf-cv-edu-y">2010</span><span>BSc Information Tech · <em>UDESC</em></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- CTA BANNER ----------
function CtaBanner({ onCta }) {
  const t = useT();
  return (
    <section className="cf-cta-banner">
      <div className="cf-cta-banner-bg"></div>
      <div className="cf-cta-banner-inner">
        <div>
          <Eyebrow color="var(--cf-spark)">{t.ctaBanner.eyebrow}</Eyebrow>
          <h2 className="cf-cta-title">{t.ctaBanner.title}</h2>
          <p className="cf-cta-sub">{t.ctaBanner.sub}</p>
        </div>
        <PixelButton onClick={onCta}>{t.ctaBanner.button}</PixelButton>
      </div>
    </section>
  );
}

Object.assign(window, {
  Hero, LogoStrip, Services, Capabilities, CaseStudies, Industries, HowWeWork, Leadership, CtaBanner,
});
