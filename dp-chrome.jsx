// dp-chrome.jsx — shared header (top info bar + sticky nav) and footer used on every page.
// Loaded after dp-shared.jsx (which exports DPLogo).

const RECENT_ROUTES = [
  { from: ["jp","Japan"],   to: ["pk","Pakistan"],  price: "¥11,823" },
  { from: ["us","USA"],     to: ["ng","Nigeria"],   price: "$24" },
  { from: ["gb","UK"],      to: ["ke","Kenya"],     price: "£18" },
  { from: ["de","Germany"], to: ["ae","UAE"],       price: "€21" },
  { from: ["cn","China"],   to: ["eg","Egypt"],     price: "¥98" },
  { from: ["tr","Turkey"],  to: ["ma","Morocco"],   price: "₺240" },
  { from: ["it","Italy"],   to: ["za","S. Africa"], price: "€32" },
  { from: ["fr","France"],  to: ["gh","Ghana"],     price: "€28" },
];

function DPTopBar() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % RECENT_ROUTES.length), 3000);
    return () => clearInterval(t);
  }, []);
  const r = RECENT_ROUTES[i];
  return (
    <div style={{
      background: "#0ea5e9", color: "#fff",
      padding: "9px 28px", display: "flex", alignItems: "center", justifyContent: "space-between",
      fontSize: 12.5, letterSpacing: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "nowrap", whiteSpace: "nowrap", minWidth: 0, overflow: "hidden" }}>
        <span style={{ color: "#fff", fontWeight: 600, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>Recent route</span>
        <span key={i} style={{ animation: "dp-float-up 0.5s ease-out", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <img src={`https://flagcdn.com/w20/${r.from[0]}.png`} alt={r.from[1]} width={16} height={11} style={{ borderRadius: 1, verticalAlign: "middle" }} />
          <strong style={{ fontWeight: 600, color: "#fff" }}>{r.from[1]}</strong>
          <span style={{ margin: "0 4px", color: "#fff" }}>→</span>
          <img src={`https://flagcdn.com/w20/${r.to[0]}.png`} alt={r.to[1]} width={16} height={11} style={{ borderRadius: 1, verticalAlign: "middle" }} />
          <strong style={{ fontWeight: 600, color: "#fff" }}>{r.to[1]}</strong>
          <span style={{ margin: "0 10px", color: "rgba(255,255,255,0.7)" }}>·</span>
          <span style={{ color: "#fff700", fontWeight: 600 }}>from {r.price}</span>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <a href="#" style={{ color: "#fff", fontWeight: 500, display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
          Track
        </a>
        <select style={{
          background: "rgba(255,255,255,0.2)", color: "#fff",
          border: "1px solid rgba(255,255,255,0.5)", borderRadius: 999,
          padding: "3px 10px", fontSize: 12, font: "inherit",
        }}>
          <option>🌐 English</option><option>Français</option><option>العربية</option><option>中文</option>
        </select>
      </div>
    </div>
  );
}

function DPSiteNav({ active = "home" }) {
  const [open, setOpen] = React.useState(false);
  const [resOpen, setResOpen] = React.useState(false);
  const links = [
    { id: "home",      l: "Home",         h: "/" },
    { id: "how",       l: "How it works", h: "/how-it-works" },
    { id: "services",  l: "Services",     h: "/services" },
    { id: "locations", l: "Locations",    h: "/locations" },
  ];
  const resKids = [
    { l: "About us", h: "/resources#about" },
    { l: "Blog",     h: "/resources#blog" },
    { l: "Contact",  h: "/resources#contact" },
  ];
  return (
    <nav className="dp-nav">
      <a href="/" style={{ display: "flex", alignItems: "center" }}><DPLogo size={32} /></a>

      <div className={`dp-nav-links${open ? " dp-nav-open" : ""}`}>
        {links.map(l => (
          <a key={l.id} href={l.h} onClick={() => setOpen(false)}
            style={{ color: active === l.id ? "var(--dp-accent)" : "var(--dp-ink-2)" }}>
            {l.l}
          </a>
        ))}

        <div className="dp-nav-has-drop"
          onMouseEnter={() => setResOpen(true)}
          onMouseLeave={() => setResOpen(false)}>
          <a href="/resources" onClick={() => setOpen(false)}
            style={{ color: active === "resources" ? "var(--dp-accent)" : "var(--dp-ink-2)", display: "inline-flex", alignItems: "center", gap: 4 }}>
            Resources
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{ opacity: 0.5, transition: "transform 0.2s", transform: resOpen ? "rotate(180deg)" : "none" }}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
          <div className={`dp-nav-drop${resOpen ? " dp-nav-drop-open" : ""}`}>
            {resKids.map(c => (
              <a key={c.l} href={c.h} onClick={() => setOpen(false)}>{c.l}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="dp-nav-cta">
        <a href="/signin" className="dp-btn dp-btn-ghost" style={{ padding: "8px 14px" }}>Sign in</a>
        <a href="/request" className="dp-btn dp-btn-primary" style={{ padding: "9px 16px" }}>
          Get an address
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <button className="dp-hamburger" onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ background: "transparent", border: "none", cursor: "pointer", padding: 8, borderRadius: 8, color: "var(--dp-ink)", display: "none", alignItems: "center", justifyContent: "center" }}>
          {open
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8h16M4 16h16"/></svg>
          }
        </button>
      </div>
    </nav>
  );
}

function DPHeader({ active }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30 }}>
      <DPTopBar />
      <DPSiteNav active={active} />
    </header>
  );
}

function DPSiteFooter() {
  return (
    <footer style={{
      background: "#0ea5e9", color: "#fff",
      padding: "72px 40px 28px",
    }}>
      <div className="dp-container">
        <div className="dp-footer-grid" style={{ gap: 40 }}>
          <div>
            <div style={{ filter: "invert(1) hue-rotate(180deg)" }}><DPLogo size={32} /></div>
            <p style={{ marginTop: 16, fontSize: 14, color: "rgba(255,255,255,0.92)", maxWidth: 300, lineHeight: 1.55 }}>
              Virtual addresses in 60+ countries. Shop borderless — we'll bring it home.
            </p>
            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 11, color: "#fff", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 10 }}>Subscribe</div>
              <form style={{ display: "flex", gap: 6, maxWidth: 320 }} onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="you@email.com" style={{
                  flex: 1, padding: "10px 12px", borderRadius: 8,
                  background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.45)",
                  color: "#fff", font: "inherit", fontSize: 13,
                }}/>
                <button className="dp-btn dp-btn-accent" style={{ padding: "10px 14px", fontSize: 13 }}>Join</button>
              </form>
            </div>
          </div>
          {[
            { h: "Services", l: ["Shop for Me", "Buy for Me", "Consolidation", "Repacking", "Personal shopper", "Hazardous goods"] },
            { h: "Locations", l: ["United States", "United Kingdom", "Europe", "Nordic countries", "China", "All countries"] },
            { h: "Resources", l: ["About us", "Blog", "Contact", "Careers", "Press"] },
            { h: "Legal & support", l: ["Track a parcel", "Help center", "Terms", "Privacy", "GDPR", "Prohibited items", { label: "Admin · Queries", href: "/dashboard" }] },
          ].map(col => (
            <div key={col.h}>
              <div style={{ fontSize: 11, color: "#fff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>{col.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {col.l.map(x => {
                  const label = typeof x === "string" ? x : x.label;
                  const href  = typeof x === "string" ? "#" : x.href;
                  return (
                    <li key={label} style={{ fontSize: 14 }}>
                      <a href={href} style={{ color: "rgba(255,255,255,0.95)" }}>{label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        {/* ── Carrier logos ── */}
        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "#fff", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", whiteSpace: "nowrap" }}>Ships via</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <span title="DHL" style={{ display:"inline-flex" }}>
              <svg width="44" height="26" viewBox="0 0 44 26" aria-label="DHL" role="img">
                <rect width="44" height="26" rx="5" fill="#D40511"/>
                <text x="22" y="19" textAnchor="middle" fill="#FECC00" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="2">DHL</text>
              </svg>
            </span>
            <span title="FedEx" style={{ display:"inline-flex" }}>
              <svg width="54" height="26" viewBox="0 0 54 26" aria-label="FedEx" role="img">
                <rect width="54" height="26" rx="5" fill="rgba(255,255,255,0.95)"/>
                <text x="27" y="19" textAnchor="middle" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif">
                  <tspan fill="#4D148C">Fed</tspan><tspan fill="#FF6200">Ex</tspan>
                </text>
              </svg>
            </span>
            <span title="UPS" style={{ display:"inline-flex" }}>
              <svg width="44" height="26" viewBox="0 0 44 26" aria-label="UPS" role="img">
                <rect width="44" height="26" rx="5" fill="#351C15"/>
                <text x="22" y="19" textAnchor="middle" fill="#FFB500" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="2">UPS</text>
              </svg>
            </span>
            <span title="EMS" style={{ display:"inline-flex" }}>
              <svg width="44" height="26" viewBox="0 0 44 26" aria-label="EMS" role="img">
                <rect width="44" height="26" rx="5" fill="#005DAA"/>
                <text x="22" y="19" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="1">EMS</text>
              </svg>
            </span>
            <span title="PostNord" style={{ display:"inline-flex" }}>
              <svg width="64" height="26" viewBox="0 0 64 26" aria-label="PostNord" role="img">
                <rect width="64" height="26" rx="5" fill="#E8430A"/>
                <text x="32" y="19" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.3">PostNord</text>
              </svg>
            </span>
          </div>
        </div>

        <div style={{
          marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.3)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
          fontSize: 13, color: "rgba(255,255,255,0.92)",
        }}>
          <span>© 2026 Forward Solutions · Shop borderless.</span>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            {/* Visa */}
            <span title="Visa" style={{ display:"inline-flex" }}>
              <svg width="44" height="28" viewBox="0 0 44 28" aria-label="Visa" role="img">
                <rect width="44" height="28" rx="5" fill="#1a1f71"/>
                <text x="22" y="20" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="1.5">VISA</text>
              </svg>
            </span>
            {/* Mastercard */}
            <span title="Mastercard" style={{ display:"inline-flex" }}>
              <svg width="44" height="28" viewBox="0 0 44 28" aria-label="Mastercard" role="img">
                <rect width="44" height="28" rx="5" fill="#1a1a1a"/>
                <circle cx="17" cy="14" r="8" fill="#eb001b"/>
                <circle cx="27" cy="14" r="8" fill="#f79e1b" opacity="0.92"/>
              </svg>
            </span>
            {/* PayPal */}
            <span title="PayPal" style={{ display:"inline-flex" }}>
              <svg width="44" height="28" viewBox="0 0 44 28" aria-label="PayPal" role="img">
                <rect width="44" height="28" rx="5" fill="#003087"/>
                <text x="22" y="19" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="10" letterSpacing="0.3">
                  <tspan fill="#fff">Pay</tspan><tspan fill="#009cde">Pal</tspan>
                </text>
              </svg>
            </span>
            {/* Stripe */}
            <span title="Stripe" style={{ display:"inline-flex" }}>
              <svg width="44" height="28" viewBox="0 0 44 28" aria-label="Stripe" role="img">
                <rect width="44" height="28" rx="5" fill="#635bff"/>
                <text x="22" y="19" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.5">stripe</text>
              </svg>
            </span>
            {/* Bitcoin */}
            <span title="Bitcoin" style={{ display:"inline-flex" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" aria-label="Bitcoin" role="img">
                <circle cx="14" cy="14" r="14" fill="#f7931a"/>
                <text x="14" y="20" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" fontFamily="system-ui,sans-serif">₿</text>
              </svg>
            </span>
            {/* Bank transfer */}
            <span title="Bank transfer" style={{ display:"inline-flex", alignItems:"center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="1.5" strokeLinecap="round" aria-label="Bank transfer" role="img">
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3"/>
                <path d="M5 10v11M9 10v11M12 10v11M15 10v11M19 10v11"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Floating chat bubble + contact panel
function DPChatBubble() {
  const [open, setOpen]       = React.useState(false);
  const [email, setEmail]     = React.useState("");
  const [problem, setProblem] = React.useState("");
  const [sent, setSent]       = React.useState(false);

  const close = () => setOpen(false);

  const handleSend = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`From: ${email}\n\n${problem}`);
    window.location.href = `mailto:hello@deliveringparcel.com?subject=Support+request&body=${body}`;
    setSent(true);
    setTimeout(() => { setSent(false); setOpen(false); setEmail(""); setProblem(""); }, 4000);
  };

  const handleChat = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi! My email is ${email}. ${problem}`);
    window.open(`https://wa.me/447700900000?text=${msg}`, "_blank");
  };

  const panelStyle = {
    position: "fixed", right: 22, bottom: 90, zIndex: 41,
    width: 320, background: "var(--dp-paper)",
    border: "1px solid var(--dp-line)", borderRadius: 18,
    boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
    fontFamily: "var(--dp-sans)", fontSize: 14,
    animation: "dp-float-up 0.22s ease-out",
    overflow: "hidden",
  };

  return (
    <>
      {open && (
        <div style={panelStyle} role="dialog" aria-label="Contact us">

          {/* Header */}
          <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--dp-line)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--dp-ink)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--dp-accent)", display: "grid", placeItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--dp-paper)" }}>Forward Solutions</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>We reply in under an hour</div>
              </div>
            </div>
            <button onClick={close} aria-label="Close chat" style={{ background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", padding: 6, borderRadius: 8, display: "grid", placeItems: "center" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {sent ? (
            /* Success state */
            <div style={{ padding: "32px 24px", textAlign: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#00b67a22", display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b67a" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Message sent!</div>
              <div style={{ fontSize: 13, color: "var(--dp-muted)", lineHeight: 1.5 }}>We'll reply to <strong>{email}</strong> shortly.</div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSend} style={{ padding: 18, display: "grid", gap: 13 }}>
              <label style={{ display: "grid", gap: 5 }}>
                <span style={{ fontSize: 11, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.11em" }}>Your email</span>
                <input
                  type="email" required
                  value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="dp-input"
                  style={{ padding: "9px 12px", fontSize: 14 }}
                />
              </label>

              <label style={{ display: "grid", gap: 5 }}>
                <span style={{ fontSize: 11, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.11em" }}>What can we help with?</span>
                <textarea
                  required
                  value={problem} onChange={e => setProblem(e.target.value)}
                  placeholder="Describe your issue or question…"
                  rows={4}
                  className="dp-input"
                  style={{ padding: "9px 12px", fontSize: 14, resize: "none", fontFamily: "inherit", lineHeight: 1.5 }}
                />
              </label>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 2 }}>
                <button type="button" onClick={handleChat}
                  className="dp-btn dp-btn-ghost"
                  style={{ padding: "10px 12px", fontSize: 13, display: "flex", gap: 6, alignItems: "center", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  Start Chat
                </button>
                <button type="submit"
                  className="dp-btn dp-btn-accent"
                  style={{ padding: "10px 12px", fontSize: 13, justifyContent: "center" }}>
                  Send Message
                </button>
              </div>

              <p style={{ fontSize: 11, color: "var(--dp-muted)", textAlign: "center", margin: 0 }}>
                Start Chat opens WhatsApp · Send Message opens your email client
              </p>
            </form>
          )}
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
        style={{
          position: "fixed", right: 22, bottom: 22, zIndex: 42,
          width: 56, height: 56, borderRadius: "50%",
          background: "var(--dp-accent)", color: "#fff",
          border: "none", cursor: "pointer",
          boxShadow: "0 12px 32px rgba(200,85,61,0.35)",
          display: "grid", placeItems: "center",
          transition: "transform 0.18s ease, box-shadow 0.18s ease",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(200,85,61,0.45)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)";    e.currentTarget.style.boxShadow = "0 12px 32px rgba(200,85,61,0.35)"; }}>
        {open
          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        }
      </button>
    </>
  );
}

Object.assign(window, { DPTopBar, DPSiteNav, DPHeader, DPSiteFooter, DPChatBubble });
