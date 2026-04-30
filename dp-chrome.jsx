// dp-chrome.jsx — shared header (top info bar + sticky nav) and footer used on every page.
// Loaded after dp-shared.jsx (which exports DPLogo).

const RECENT_ROUTES = [
  { from: "🇯🇵 Japan",  to: "🇵🇰 Pakistan", price: "¥11,823" },
  { from: "🇺🇸 USA",    to: "🇳🇬 Nigeria",  price: "$24" },
  { from: "🇬🇧 UK",     to: "🇰🇪 Kenya",    price: "£18" },
  { from: "🇩🇪 Germany",to: "🇦🇪 UAE",      price: "€21" },
  { from: "🇨🇳 China",  to: "🇪🇬 Egypt",    price: "¥98" },
  { from: "🇹🇷 Turkey", to: "🇲🇦 Morocco",  price: "₺240" },
  { from: "🇮🇹 Italy",  to: "🇿🇦 S. Africa",price: "€32" },
  { from: "🇫🇷 France", to: "🇬🇭 Ghana",    price: "€28" },
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
      background: "var(--dp-ink)", color: "var(--dp-paper)",
      padding: "9px 28px", display: "flex", alignItems: "center", justifyContent: "space-between",
      fontSize: 12.5, letterSpacing: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "nowrap", whiteSpace: "nowrap", minWidth: 0, overflow: "hidden" }}>
        <span style={{ opacity: 0.55, whiteSpace: "nowrap" }}>Recent route</span>
        <span key={i} style={{ animation: "dp-float-up 0.5s ease-out", whiteSpace: "nowrap" }}>
          <strong style={{ fontWeight: 500 }}>{r.from}</strong>
          <span style={{ margin: "0 8px", opacity: 0.55 }}>→</span>
          <strong style={{ fontWeight: 500 }}>{r.to}</strong>
          <span style={{ margin: "0 10px", opacity: 0.4 }}>·</span>
          <span style={{ color: "var(--dp-accent)" }}>from {r.price}</span>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <a href="#" style={{ color: "rgba(255,255,255,0.7)", display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
          Track
        </a>
        <select style={{
          background: "transparent", color: "rgba(255,255,255,0.85)",
          border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999,
          padding: "3px 10px", fontSize: 12, font: "inherit",
        }}>
          <option>🌐 English</option><option>Français</option><option>العربية</option><option>中文</option>
        </select>
      </div>
    </div>
  );
}

function DPSiteNav({ active = "home" }) {
  const links = [
    { id: "home",     l: "Home",          h: "/" },
    { id: "how",      l: "How it works",  h: "/how-it-works" },
    { id: "services", l: "Services",      h: "/services" },
    { id: "locations",l: "Locations",     h: "/locations" },
    { id: "resources",l: "Resources",     h: "/resources" },
  ];
  return (
    <nav className="dp-nav">
      <a href="/" style={{ display: "flex", alignItems: "center" }}><DPLogo size={32} /></a>
      <div className="dp-nav-links">
        {links.map(l => (
          <a key={l.id} href={l.h}
            style={{ color: active === l.id ? "var(--dp-accent)" : "var(--dp-ink-2)" }}>
            {l.l}
          </a>
        ))}
      </div>
      <div className="dp-nav-cta">
        <a href="http://127.0.0.1:3000/signin" className="dp-btn dp-btn-ghost" style={{ padding: "8px 14px" }}>Sign in</a>
        <a href="http://127.0.0.1:3000/request" className="dp-btn dp-btn-primary" style={{ padding: "9px 16px" }}>
          Get an address
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
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
      background: "var(--dp-ink)", color: "var(--dp-paper)",
      padding: "72px 40px 28px",
    }}>
      <div className="dp-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.3fr", gap: 40 }}>
          <div>
            <div style={{ filter: "invert(1) hue-rotate(180deg)" }}><DPLogo size={32} /></div>
            <p style={{ marginTop: 16, fontSize: 14, color: "rgba(255,255,255,0.6)", maxWidth: 300, lineHeight: 1.55 }}>
              Virtual addresses in 60+ countries. Shop borderless — we'll bring it home.
            </p>
            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 10 }}>Subscribe</div>
              <form style={{ display: "flex", gap: 6, maxWidth: 320 }} onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="you@email.com" style={{
                  flex: 1, padding: "10px 12px", borderRadius: 8,
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--dp-paper)", font: "inherit", fontSize: 13,
                }}/>
                <button className="dp-btn dp-btn-accent" style={{ padding: "10px 14px", fontSize: 13 }}>Join</button>
              </form>
            </div>
          </div>
          {[
            { h: "Services", l: ["Shop for Me", "Buy for Me", "Consolidation", "Repacking", "Personal shopper", "Hazardous goods"] },
            { h: "Locations", l: ["United States", "United Kingdom", "Europe", "Nordic countries", "China", "All countries"] },
            { h: "Resources", l: ["About us", "Blog", "Contact", "Careers", "Press"] },
            { h: "Legal & support", l: ["Track a parcel", "Help center", "Terms", "Privacy", "GDPR", "Prohibited items"] },
          ].map(col => (
            <div key={col.h}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}>{col.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {col.l.map(x => <li key={x} style={{ fontSize: 14 }}><a href="#" style={{ color: "rgba(255,255,255,0.78)" }}>{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
          fontSize: 13, color: "rgba(255,255,255,0.55)",
        }}>
          <span>© 2026 Forward Solutions · Shop borderless.</span>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            {["VISA", "Mastercard", "PayPal", "Stripe", "Bitcoin", "Bank"].map(p => (
              <span key={p} style={{
                padding: "4px 9px", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 6, fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--dp-mono)",
              }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Floating chat bubble — sticky on every page
function DPChatBubble() {
  return (
    <button style={{
      position: "fixed", right: 22, bottom: 22, zIndex: 40,
      width: 56, height: 56, borderRadius: "50%",
      background: "var(--dp-accent)", color: "#fff",
      border: "none", cursor: "pointer",
      boxShadow: "0 12px 32px rgba(200,85,61,0.35)",
      display: "grid", placeItems: "center",
    }} title="Chat with us">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    </button>
  );
}

Object.assign(window, { DPTopBar, DPSiteNav, DPHeader, DPSiteFooter, DPChatBubble });
