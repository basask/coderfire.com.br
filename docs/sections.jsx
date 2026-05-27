// ============================================
// CoderFire BR — page sections
// ============================================

const { useState: _useState, useEffect: _useEffect, useRef: _useRef } = React;

// ---------- HERO ----------
function Hero({ onCta }) {
  // Animated terminal lines (typed in on load)
  const lines = [
    { p: '~/coderfire', c: 'whoami', d: 'software engineering firm · Brazil' },
    { p: '~/coderfire', c: 'cat services.toml', d: null },
    { p: null, c: null, d: '[delivery]    fixed_scope = true   demo = "biweekly"' },
    { p: null, c: null, d: '[consulting]  architecture = true   review = true' },
    { p: null, c: null, d: '[ai_iot]      cv = true   llm_integration = true' },
    { p: '~/coderfire', c: 'history --since 2006 | wc -l', d: '180+ projects shipped' },
    { p: '~/coderfire', c: 'status', d: 'remote · async · BRT ±5h' },
  ];

  return (
    <section className="cf-hero" id="top">
      <div className="cf-hero-glow"></div>
      <div className="cf-hero-bg-grid"></div>
      <div className="cf-hero-inner">
        <div className="cf-hero-text">
          <Eyebrow>SOFTWARE ENGINEERING FIRM · SINCE 2006 · BRAZIL</Eyebrow>
          <h1 className="cf-hero-title">
            Production software,<br/>
            <span className="cf-hero-title-accent">forged with fire.</span>
          </h1>
          <p className="cf-hero-sub">
            A Brazilian software firm building, shipping, and consulting on web platforms,
            computer vision, and LLM-powered products. Remote-first. Senior craftsmanship.
          </p>
          <div className="cf-hero-cta">
            <Button variant="primary" size="lg" glow onClick={onCta} icon={<Icon.ArrowRight size={18}/>}>Book a call</Button>
            <Button variant="ghost" size="lg" as="a" href="#work">See case studies</Button>
          </div>
          <div className="cf-hero-meta">
            <span className="cf-hero-meta-dot" />
            <span>Currently accepting new engagements · reply within <strong>1&nbsp;business&nbsp;day</strong></span>
          </div>
        </div>

        <div className="cf-hero-terminal" aria-hidden="true">
          <div className="cf-term-chrome">
            <span className="cf-term-dot" style={{background:'var(--cf-magma)'}}></span>
            <span className="cf-term-dot" style={{background:'var(--cf-flare)'}}></span>
            <span className="cf-term-dot" style={{background:'var(--cf-success, #28a745)'}}></span>
            <span className="cf-term-title">coderfire — zsh — 80×24</span>
          </div>
          <div className="cf-term-body">
            {lines.map((l, i) => (
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
        <div><span className="cf-stat-n">18+</span><span className="cf-stat-l">years shipping production code</span></div>
        <div><span className="cf-stat-n">8</span><span className="cf-stat-l">industries served</span></div>
        <div><span className="cf-stat-n">3</span><span className="cf-stat-l">languages PT · EN · ES</span></div>
        <div><span className="cf-stat-n">100%</span><span className="cf-stat-l">remote · async-friendly</span></div>
      </div>
    </section>
  );
}

// ---------- LOGO STRIP ----------
function LogoStrip() {
  const logos = ["Pinterest", "Accenture", "BairesDev", "Pollux", "Refatore"];
  return (
    <section className="cf-strip">
      <div className="cf-strip-label">WHERE CODERFIRE HAS SHIPPED</div>
      <div className="cf-strip-logos">
        {logos.map(l => <span key={l} className="cf-strip-logo">{l}</span>)}
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
function ServiceCard({ tag, title, desc, features, popular }) {
  return (
    <div className={`cf-service ${popular ? 'cf-service-hot' : ''}`}>
      {popular && <div className="cf-service-flag">CORE PRACTICE</div>}
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
  return (
    <section id="services" className="cf-section">
      <Eyebrow>SERVICES · 03</Eyebrow>
      <h2 className="cf-section-title">Two ways CoderFire ships.</h2>
      <p className="cf-section-sub">Pick the engagement that matches the bottleneck. We&rsquo;ll tell you on the scoping call if we&rsquo;re not the right fit — every engagement priced after a brief scope.</p>
      <div className="cf-service-grid">
        <ServiceCard
          tag="01 · PRODUCT DELIVERY"
          title="Build &amp; ship, end-to-end"
          desc="Fixed-scope delivery: we architect, build, and ship — then hand it off with docs, tests, and a warranty period. Greenfield products or features inside an existing platform."
          features={["Scoped in 1 week","Bi-weekly demos","Full handoff package","Post-launch warranty","Source on your VCS"]}
          popular
        />
        <ServiceCard
          tag="02 · CONSULTING"
          title="Architecture &amp; technical leadership"
          desc="Drop us into your roadmap before the code lands. Architecture reviews, technical due diligence, code audits, and fractional-CTO engagements — grounded in 18 years of shipping."
          features={["Architecture deep-dive","Code & security review","Hiring rubrics","Fractional CTO","Async-friendly cadence"]}
        />
        {/* <ServiceCard
          tag="03 · AI · CV · LLM"
          title="Computer vision &amp; LLM integration"
          desc="Real-time defect inspection, OCR, vision pipelines on edge or cloud. Plus LLM integration into your product — pick the model, we bring the pipeline, the guardrails, and the evals."
          features={["Bring your own LLM · OpenAI · Anthropic · self-hosted","RAG, agents, structured output","OpenCV · edge inference","Eval & observability","On-prem or AWS"]}
        /> */}
      </div>
      <div className="cf-services-foot">
        <span>Not sure which fits?</span>
        <a className="cf-link-arrow" href="#" onClick={(e)=>{e.preventDefault(); onCta();}}>Book a 30-min scoping call <Icon.ArrowRight size={14}/></a>
      </div>
    </section>
  );
}

// ---------- CAPABILITIES ----------
function Capabilities() {
  const groups = [
    {
      icon: <Icon.Layers size={18}/>,
      title: "Full-stack product",
      stack: "Python · JavaScript · TypeScript · React · Django · Flask",
      blurb: "Web and SaaS, front to back. Greenfield builds, rescue missions, and the boring legacy work other shops won't touch.",
    },
    {
      icon: <Icon.Brain size={18}/>,
      title: "LLM integration",
      stack: "OpenAI · Anthropic · self-hosted · RAG · evals",
      blurb: "Integrate the model of your choice into your product. We bring the retrieval, the structured output, the guardrails, and the evals — you keep your data.",
    },
    {
      icon: <Icon.Eye size={18}/>,
      title: "Computer vision",
      stack: "OpenCV · Edge inference",
      blurb: "Quality inspection on production lines. Real-time defect detection. Shipped to automotive and consumer-goods plants.",
    },
    {
      icon: <Icon.Cpu size={18}/>,
      title: "IoT & Industry 4.0",
      stack: "ZeroMQ · RabbitMQ · MQTT · Edge gateways",
      blurb: "Telemetry, line-side dashboards. Took vision models out of notebooks and onto the shop floor.",
    },
    {
      icon: <Icon.Database size={18}/>,
      title: "Data engineering",
      stack: "SQL · SparkSQL · AirFlow",
      blurb: "Pipelines, scorecards, and quality-health dashboards. Built the analytics platform to power your product decisions",
    },
    {
      icon: <Icon.Smartphone size={18}/>,
      title: "Mobile · embedded",
      stack: "C/C++ · ReactNative",
      blurb: "Mobile Apps and embedded gaming systems",
    },
    {
      icon: <Icon.Cloud size={18}/>,
      title: "DevOps · cloud",
      stack: "Linux · AWS · Docker · CI/CD",
      blurb: "From bare-metal Linux configuration up. Certified at 4linux. We own deploys end-to-end.",
    },
    {
      icon: <Icon.Layers size={18}/>,
      title: "Legacy & rescue",
      stack: "C/C++ · Qt · 18 yrs of CVS history",
      blurb: "We don&rsquo;t flinch at old stacks. Inheriting a 2008 codebase is most weeks for us.",
    },
  ];
  return (
    <section id="capabilities" className="cf-section">
      <Eyebrow>CAPABILITIES · 08 AREAS</Eyebrow>
      <h2 className="cf-section-title">What CoderFire does, in plain text.</h2>
      <p className="cf-section-sub">Eight areas of practice, all under one roof. No layers, no account managers — you talk to the engineer doing the work.</p>
      <div className="cf-cap-grid">
        {groups.map(g => (
          <div className="cf-cap" key={g.title}>
            <div className="cf-cap-icon">{g.icon}</div>
            <div className="cf-cap-title">{g.title}</div>
            <div className="cf-cap-stack">{g.stack}</div>
            <p className="cf-cap-blurb" dangerouslySetInnerHTML={{__html: g.blurb}} />
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
        {/* <a className="cf-case-link" href="#" onClick={e=>e.preventDefault()}>Read the case study <Icon.ArrowUpRight size={14}/></a> */}
      </div>
    </article>
  );
}

function CaseStudies() {
  return (
    <section id="work" className="cf-section cf-section-dark">
      <Eyebrow color="var(--cf-flare)">CASE STUDIES · SHIPPED</Eyebrow>
      <h2 className="cf-section-title">Real fires CoderFire has put out.</h2>
      <p className="cf-section-sub" style={{color:'oklch(0.78 0.012 60)'}}>Four engagements across as many industries. Every metric is from production, not pitch decks.</p>
      <div className="cf-case-list">
        <CaseRow
          tag="AD-TECH · PINTEREST · 4+ YRS"
          title="Quality Health Scorecard & Business Entity Service"
          metric="20+"
          metricLabel="products and service scored, daily"
          stack="Python · React · SparkSQL · AirFlow · Jenkins"
          desc="Lead engineering on Pinterest's internal analytics for code and product quality enabling teams to set quarterly goals based on metrics. Also lead on Business Preferences APIs (Business Entity Services)."
        />
        <CaseRow
          tag="AUTOMOTIVE · POLLUX / ACCENTURE · 3 YRS"
          title="Computer-vision defect inspection on a Tier-1 line."
          metric="+99%"
          metricLabel="defect-detection recall"
          stack="Python · TensorFlow · OpenCV · ZeroMQ · GenICam"
          desc="Visual inspection with a real-time CV pipeline running on edge GPUs at the cell. Three years technical lead across automotive, aerospatial, and consumer-goods deployments."
        />
        <CaseRow
          tag="CIVIL SUPPLY · COLLABO · 2.5 YRS"
          title="Geolocation-driven marketplace for civil engineering supply."
          metric="1k+"
          metricLabel="Demands connected"
          stack="C/C++ · Python · Django · Qt · SQLAlchemy · RabbitMQ"
          desc="Built and operated a SaaS platform connecting product demand with regional suppliers across Brazil. Led architecture, engineering, and some of the sales conversations."
        />
        <CaseRow
          tag="EDTECH · REFATORE · 1 YEAR"
          title="Programming literacy for 100+ kids in Brazilian public schools."
          metric="100+"
          metricLabel="kids reached"
          stack="Python · JavaScript · Code.org · AWS"
          desc="Co-founded an early-stage EdTech to bring programming to underserved schools. Designed the curriculum, the platform, and ran the classes. Now operates as a board-level engagement."
        />
      </div>
    </section>
  );
}

// ---------- INDUSTRIES ----------
function Industries() {
  const list = [
    { tag: "AD-TECH", note: "Business platforms, scorecards, preferences APIs" },
    { tag: "AUTOMOTIVE", note: "Tier-1 inspection, line telemetry, Manufacturing Execution System (MES)" },
    { tag: "AEROSPATIAL", note: "Industrial control &amp; vision, Manufacturing Execution System (MES)" },
    { tag: "CONSUMER GOODS", note: "Quality control, demand forecasting" },
    { tag: "EDTECH", note: "K-12 curriculum, gamified learning" },
    { tag: "CIVIL SUPPLY CHAIN", note: "Marketplace SaaS, geolocation" },
    { tag: "GAMING", note: "Embedded slot, bingo, poker (worldwide)" },
    { tag: "DEVTOOLS", note: "Internal platforms, CI/CD scorecards" },
  ];
  return (
    <section id="industries" className="cf-section">
      <Eyebrow>INDUSTRIES · 08</Eyebrow>
      <h2 className="cf-section-title">On the line, in the cloud, on your phone.</h2>
      <p className="cf-section-sub">A multi-industry background means CoderFire reads your domain faster. The gotchas tend to look familiar.</p>
      <ul className="cf-ind-grid">
        {list.map(i => (
          <li className="cf-ind" key={i.tag}>
            <span className="cf-ind-tag" dangerouslySetInnerHTML={{__html: i.tag}} />
            <span className="cf-ind-note" dangerouslySetInnerHTML={{__html: i.note}} />
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
    { n: "02", t: "Predictable cadence.", d: "Bi-weekly demos, weekly written status. You always know what shipped, what didn&rsquo;t, and why." },
    { n: "03", t: "Your repo, your tools.", d: "Work happens in your VCS, your tracker, your Slack. No proprietary lock-in, no hand-off surprise." },
    { n: "04", t: "Remote-first · BRT ±5h.", d: "Brasília time overlaps São Paulo, Lisbon, and NYC the same day. One zone, three meetings, no nights." },
    { n: "05", t: "Boring on purpose.", d: "We pick the boring stack that works and push back on framework-of-the-month. That&rsquo;s why you hire us." },
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
  return (
    <section id="team" className="cf-section">
      <Eyebrow>CODERFIRE · PRINCIPAL</Eyebrow>
      <h2 className="cf-section-title">Who&rsquo;s on the call.</h2>
      <p className="cf-section-sub">No account managers. No marketplace middlemen. You talk to the engineer who&rsquo;ll architect the work.</p>

      <div className="cf-lead">
        <div className="cf-lead-card">
          <div className="cf-lead-avatar">
            <span className="cf-lead-initials">RF</span>
            <span className="cf-lead-flame"><Logo size={28} /></span>
          </div>
          <div className="cf-lead-body">
            <div className="cf-lead-name">Rafael Fernandes</div>
            <div className="cf-lead-role">Founder &amp; Software Engineer</div>
            <p className="cf-lead-bio">
              18+ years building production software across automotive, ad-tech, edtech, and gaming.
              Currently Software Engineer @ <strong>Pinterest</strong>, formerly Tech Lead at <strong>Pollux/Accenture</strong> (industrial automation and computer vision), co-founder of <strong>Refatore</strong> (EdTech), and <strong>Collabo</strong> (SaaS supply chain).
            </p>
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
          <Eyebrow>CV · HIGHLIGHTS</Eyebrow>
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
  return (
    <section className="cf-cta-banner">
      <div className="cf-cta-banner-bg"></div>
      <div className="cf-cta-banner-inner">
        <div>
          <Eyebrow color="var(--cf-spark)">READY WHEN YOU ARE</Eyebrow>
          <h2 className="cf-cta-title">Let&rsquo;s scope it out.</h2>
          <p className="cf-cta-sub">30-minute call. No pitch deck. We&rsquo;ll tell you on the call whether CoderFire is a fit — and if we&rsquo;re not, we&rsquo;ll point you to who is.</p>
        </div>
        <PixelButton onClick={onCta}>BOOK&nbsp;A&nbsp;CALL</PixelButton>
      </div>
    </section>
  );
}

Object.assign(window, {
  Hero, LogoStrip, Services, Capabilities, CaseStudies, Industries, HowWeWork, Leadership, CtaBanner,
});
