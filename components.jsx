// ============================================
// CoderFire BR — base UI primitives & nav/footer
// ============================================

const { useState, useEffect, useRef } = React;



// ---------- Lucide-style inline SVG icons ----------
const Icon = {
  ArrowRight: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  ArrowUpRight: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>,
  Check: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  X: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>,
  Github: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.94-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.39.97 0 1.95.13 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.66.79.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z"/></svg>,
  Linkedin: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07s.92-2.06 2.06-2.06 2.06.93 2.06 2.06c0 1.14-.92 2.07-2.06 2.07zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>,
  Mail: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  Cpu: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>,
  Eye: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  Brain: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4 17.5a2.5 2.5 0 0 1-1.96-4.04A2.5 2.5 0 0 1 4 9.5a2.5 2.5 0 0 1 .9-1.92A2.5 2.5 0 0 1 5 4.5a2.5 2.5 0 0 1 4.5-2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 20 17.5a2.5 2.5 0 0 0 1.96-4.04A2.5 2.5 0 0 0 20 9.5a2.5 2.5 0 0 0-.9-1.92A2.5 2.5 0 0 0 19 4.5a2.5 2.5 0 0 0-4.5-2Z"/></svg>,
  Layers: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/></svg>,
  Database: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>,
  Cloud: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9c-.07 0-.13 0-.2.02A7 7 0 0 0 4 12.5 4.5 4.5 0 0 0 6.5 21h11Z"/></svg>,
  Smartphone: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  MapPin: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
};

// ---------- Logo ----------
function Logo({ size = 32 }) {
  return <img src="assets/logo-flame.svg" alt="CoderFire" width={size} height={size * (18/16)} style={{ imageRendering: 'pixelated', display: 'block' }} />;
}

// ---------- Eyebrow ----------
function Eyebrow({ children, color }) {
  return <div className="cf-eyebrow" style={color ? { color } : null}>{children}</div>;
}

// ---------- Button ----------
function Button({ variant = "primary", size = "md", glow = false, children, onClick, as = "button", href, icon, type, disabled }) {
  const cls = `cf-btn cf-btn-${variant} cf-btn-${size}${glow ? ' cf-btn-glow' : ''}`;
  const inner = <>{children}{icon ? <span style={{display:'inline-flex'}}>{icon}</span> : null}</>;
  if (as === "a") return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick} type={type || 'button'} disabled={disabled}>{inner}</button>;
}

// ---------- Pixel button (marketing CTA) ----------
function PixelButton({ children, onClick, variant = "spark" }) {
  return <button className={`cf-pixel-btn cf-pixel-btn-${variant}`} onClick={onClick}>{children}</button>;
}

// ---------- Nav ----------
function Nav({ onCta }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`cf-nav ${scrolled ? 'cf-nav-scrolled' : ''}`}>
      <div className="cf-nav-inner">
        <a className="cf-nav-brand" href="#top">
          <Logo size={28} />
          <span className="cf-nav-wordmark">CODER<span style={{color:'var(--cf-blaze)'}}>FIRE</span><span className="cf-nav-tld">.com.br</span></span>
        </a>
        <nav className="cf-nav-links">
          <a href="#services">Services</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#work">Work</a>
          <a href="#industries">Industries</a>
          <a href="#team">Team</a>
        </nav>
        <div className="cf-nav-actions">
          <a className="cf-nav-link-quiet" href="mailto:rafael@coderfire.com.br">rafael@coderfire.com.br</a>
          <Button variant="primary" size="sm" onClick={onCta}>Book a call</Button>
        </div>
      </div>
    </header>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="cf-footer">
      <div className="cf-footer-inner">
        <div className="cf-footer-brand">
          <Logo size={36} />
          <div>
            <div className="cf-footer-wordmark">CODER<span style={{color:'var(--cf-blaze)'}}>FIRE</span></div>
            <div className="cf-footer-tag">A Brazilian software firm.<br/>Forged with fire · shipped worldwide.<br/>Senior craftsmanship since 2006.</div>
          </div>
        </div>
        <div className="cf-footer-cols">
          <div>
            <div className="cf-footer-col-title">Hire</div>
            <a href="#services">Product delivery</a>
            <a href="#services">Architecture &amp; consulting</a>
            <a href="#services">CV / LLM integration</a>
          </div>
          <div>
            <div className="cf-footer-col-title">Work</div>
            <a href="#work">Case studies</a>
            <a href="#industries">Industries</a>
            <a href="#capabilities">Capabilities</a>
          </div>
          <div>
            <div className="cf-footer-col-title">Company</div>
            <a href="#team">Team</a>
            <a href="mailto:rafael@coderfire.com.br">Contact</a>
            <a href="https://linkedin.com/in/basask/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="cf-footer-social">
          <a href="https://linkedin.com/in/basask/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon.Linkedin size={18}/></a>
          <a href="mailto:rafael@coderfire.com.br" aria-label="Email"><Icon.Mail size={18}/></a>
          <a href="https://github.com/basask" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.Github size={18}/></a>
        </div>
      </div>
      <div className="cf-footer-bottom">
        <span><Icon.MapPin size={11}/> &nbsp;Brazil · Remote-first · UTC-3 (BRT)</span>
        <span className="cf-footer-version">CoderFire · v2026.05</span>
      </div>
    </footer>
  );
}

// ---------- Modal (booking) — Formspree (same /f/{id} API as @formspree/react useForm) ----------
const BOOKING_FIELD_IDS = { email: 'cf-book-email', need: 'cf-book-need', message: 'cf-book-message' };
const BOOKING_FIELD_ORDER = ['email', 'need', 'message'];
const BOOKING_FIELD_LABELS = {
  email: 'Email',
  need: 'What you need',
  message: 'What hurts?',
};

function formatFormspreeFieldError(field, message) {
  const label = BOOKING_FIELD_LABELS[field] || field;
  const text = (message || '').trim();
  if (!text) return `${label} is invalid.`;
  if (/^is required$/i.test(text)) return `${label} is required.`;
  if (/^[a-z]/.test(text)) return `${label} ${text}.`;
  return text.endsWith('.') ? text : `${text}.`;
}

function parseFormspreeErrors(body) {
  const fieldErrors = {};
  let formError = null;
  if (Array.isArray(body.errors) && body.errors.length) {
    for (const item of body.errors) {
      if (item.field) {
        fieldErrors[item.field] = formatFormspreeFieldError(item.field, item.message);
      } else if (item.message) {
        formError = item.message;
      }
    }
  }
  if (!formError && typeof body.error === 'string' && body.error !== 'Validation errors') {
    formError = body.error;
  }
  if (!formError && !Object.keys(fieldErrors).length) {
    formError = typeof body.error === 'string' ? body.error : 'Could not send your message. Please try again.';
  }
  return { fieldErrors, formError };
}

function BookingModal({ open, onClose }) {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    if (!open) {
      setSucceeded(false);
      setSubmitting(false);
      setFormError(null);
      setFieldErrors({});
    }
  }, [open]);

  function clearFieldError(name) {
    setFieldErrors(prev => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setFormError(null);
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const formId = typeof window !== 'undefined' && window.FORMSPREE_BOOKING_FORM_ID;
    if (!formId || formId === 'YOUR_FORM_ID') {
      setFormError('Set window.FORMSPREE_BOOKING_FORM_ID in index.html to your Formspree form id.');
      setFieldErrors({});
      return;
    }
    const form = ev.currentTarget;
    const fd = new FormData(form);
    setFormError(null);
    setFieldErrors({});
    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && (body.ok === true || body.next != null)) {
        setSucceeded(true);
        form.reset();
        return;
      }
      const { fieldErrors: nextFieldErrors, formError: nextFormError } = parseFormspreeErrors(body);
      setFieldErrors(nextFieldErrors);
      setFormError(nextFormError);
      const firstField = BOOKING_FIELD_ORDER.find(f => nextFieldErrors[f]);
      if (firstField) {
        const elId = BOOKING_FIELD_IDS[firstField];
        requestAnimationFrame(() => document.getElementById(elId)?.focus());
      }
    } catch (e) {
      setFormError(e.message || 'Network error. Try again.');
      setFieldErrors({});
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;
  return (
    <div className="cf-modal-overlay" onClick={onClose}>
      <div className="cf-modal" onClick={e => e.stopPropagation()}>
        <button className="cf-modal-close" onClick={onClose} aria-label="Close"><Icon.X size={18}/></button>
        {succeeded ? (
          <div className="cf-modal-success">
            <Logo size={48} />
            <h3 className="cf-modal-title">Thank you. We'll be in touch.</h3>
            <p className="cf-modal-sub">Expect a calendar link within one business day (BRT).</p>
            <Button variant="secondary" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="cf-form" noValidate>
            <Eyebrow>BOOK A CALL · 30 MIN · NO PITCH DECK</Eyebrow>
            <h3 className="cf-modal-title">Tell us what&rsquo;s on fire.</h3>
            <p className="cf-modal-sub">We&rsquo;ll reply within one business day. If CoderFire isn&rsquo;t the right fit, we&rsquo;ll say so on the call.</p>
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />
            <div className={`cf-field${fieldErrors.email ? ' cf-field-invalid' : ''}`}>
              <label htmlFor="cf-book-email">Email</label>
              <input
                id="cf-book-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                aria-invalid={fieldErrors.email ? 'true' : undefined}
                aria-describedby={fieldErrors.email ? 'cf-book-email-error' : undefined}
                onChange={() => clearFieldError('email')}
              />
              {fieldErrors.email ? (
                <p id="cf-book-email-error" className="cf-field-error" role="alert">{fieldErrors.email}</p>
              ) : null}
            </div>
            <div className={`cf-field${fieldErrors.need ? ' cf-field-invalid' : ''}`}>
              <label htmlFor="cf-book-need">What you need</label>
              <select
                id="cf-book-need"
                name="need"
                defaultValue="Product delivery (fixed scope)"
                aria-invalid={fieldErrors.need ? 'true' : undefined}
                aria-describedby={fieldErrors.need ? 'cf-book-need-error' : undefined}
                onChange={() => clearFieldError('need')}
              >
                <option>Product delivery (fixed scope)</option>
                <option>Architecture / consulting</option>
                <option>Computer vision / LLM integration</option>
                <option>Fractional CTO / advisory</option>
              </select>
              {fieldErrors.need ? (
                <p id="cf-book-need-error" className="cf-field-error" role="alert">{fieldErrors.need}</p>
              ) : null}
            </div>
            <div className={`cf-field${fieldErrors.message ? ' cf-field-invalid' : ''}`}>
              <label htmlFor="cf-book-message">What hurts?</label>
              <textarea
                id="cf-book-message"
                name="message"
                rows="3"
                required
                placeholder="e.g. We need a computer-vision pipeline for defect inspection on our packaging line."
                aria-invalid={fieldErrors.message ? 'true' : undefined}
                aria-describedby={fieldErrors.message ? 'cf-book-message-error' : undefined}
                onChange={() => clearFieldError('message')}
              />
              {fieldErrors.message ? (
                <p id="cf-book-message-error" className="cf-field-error" role="alert">{fieldErrors.message}</p>
              ) : null}
            </div>
            {formError ? <p className="cf-modal-error" role="alert">{formError}</p> : null}
            <Button variant="primary" size="lg" glow type="submit" disabled={submitting} icon={<Icon.ArrowRight size={18}/>}>
              {submitting ? 'Sending…' : 'Send'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

Object.assign(window, {
  Icon, Logo, Eyebrow, Button, PixelButton,
  Nav, Footer, BookingModal,
});
