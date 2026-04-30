// Shared building blocks for both DeliveringParcel landing variations.
// Exported to window so each variation file can pick what it needs.

const { useState, useEffect, useRef, useMemo } = React;

// ─── Country data ──────────────────────────────────────────────────────
const FROM_COUNTRIES = [
  { code: "US", name: "United States",  flag: "🇺🇸", x: 24, y: 38 },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧", x: 47, y: 30 },
  { code: "DE", name: "Germany",        flag: "🇩🇪", x: 50, y: 32 },
  { code: "CN", name: "China",          flag: "🇨🇳", x: 76, y: 42 },
  { code: "TR", name: "Turkey",         flag: "🇹🇷", x: 56, y: 40 },
  { code: "IT", name: "Italy",          flag: "🇮🇹", x: 51, y: 37 },
  { code: "FR", name: "France",         flag: "🇫🇷", x: 48, y: 34 },
  { code: "JP", name: "Japan",          flag: "🇯🇵", x: 84, y: 42 },
];

const TO_COUNTRIES = [
  { code: "NG", name: "Nigeria",         flag: "🇳🇬", x: 50, y: 56 },
  { code: "KE", name: "Kenya",           flag: "🇰🇪", x: 57, y: 60 },
  { code: "ZA", name: "South Africa",    flag: "🇿🇦", x: 54, y: 72 },
  { code: "EG", name: "Egypt",           flag: "🇪🇬", x: 55, y: 44 },
  { code: "AE", name: "UAE",             flag: "🇦🇪", x: 62, y: 47 },
  { code: "SA", name: "Saudi Arabia",    flag: "🇸🇦", x: 60, y: 48 },
  { code: "GH", name: "Ghana",           flag: "🇬🇭", x: 48, y: 56 },
  { code: "MA", name: "Morocco",         flag: "🇲🇦", x: 47, y: 42 },
];

const RETAILERS = [
  "Amazon", "eBay", "ASOS", "Nike", "SHEIN", "Target", "Walmart", "Best Buy",
  "Apple", "Sephora", "Macy's", "Costco",
];

// ─── Logo / wordmark ────────────────────────────────────────────────────
function DPLogo({ size = 32 }) {
  return (
    <div className="dp-nav-logo" style={{ gap: 10 }}>
      {/* Geometric "DP" mark — stacked parallelogram layers with green→teal gradient */}
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logo-g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2eecc5"/>
            <stop offset="100%" stopColor="#0f9d7a"/>
          </linearGradient>
          <linearGradient id="logo-g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1bd4aa"/>
            <stop offset="100%" stopColor="#0c7a60"/>
          </linearGradient>
          <linearGradient id="logo-g3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#13a884"/>
            <stop offset="100%" stopColor="#085c47"/>
          </linearGradient>
        </defs>
        {/* Top slab */}
        <path d="M14 12 L50 12 L44 22 L8 22 Z" fill="url(#logo-g1)"/>
        {/* Middle slab — inset, slightly darker */}
        <path d="M20 25 L50 25 L44 35 L14 35 Z" fill="url(#logo-g2)" opacity="0.88"/>
        {/* Bottom slab — darkest */}
        <path d="M26 38 L50 38 L44 50 L20 50 Z" fill="url(#logo-g3)" opacity="0.78"/>
        {/* Vertical left edge connector */}
        <path d="M14 12 L8 22 L14 35 L20 25 Z" fill="url(#logo-g2)" opacity="0.6"/>
        <path d="M20 25 L14 35 L20 50 L26 38 Z" fill="url(#logo-g3)" opacity="0.55"/>
      </svg>
      <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
        Forward<span style={{ fontStyle: "italic", color: "var(--dp-accent)", fontWeight: 400 }}> Solutions</span>
      </span>
    </div>
  );
}

// ─── Top nav ────────────────────────────────────────────────────────────
function DPNav({ cta = "Get an address" }) {
  return (
    <nav className="dp-nav">
      <DPLogo />
      <div className="dp-nav-links">
        <a href="#how">How it works</a>
        <a href="#countries">Countries</a>
        <a href="#pricing">Pricing</a>
        <a href="#features">Features</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="dp-nav-cta">
        <a href="#" className="dp-btn dp-btn-ghost" style={{ padding: "8px 14px" }}>Sign in</a>
        <a href="#" className="dp-btn dp-btn-primary" style={{ padding: "9px 16px" }}>
          {cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </nav>
  );
}

// ─── Animated globe (minimalist line-art) ───────────────────────────────
// Variant: 'globe' or 'map' or 'orbits'
function DPGlobe({ variant = "globe", accent }) {
  if (variant === "map") return <DPWorldMap accent={accent} />;
  if (variant === "orbits") return <DPOrbits accent={accent} />;
  return <DPGlobeBall accent={accent} />;
}

function DPGlobeBall({ accent = "var(--dp-accent)" }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1", maxWidth: 560 }}>
      {/* Outer ambient glow */}
      <div style={{
        position: "absolute", inset: "-8%",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`,
        animation: "dp-glow-pulse 4s ease-in-out infinite",
        pointerEvents: "none",
      }}/>
      <svg viewBox="0 0 400 400" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        <defs>
          <radialGradient id="g-shade" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="var(--dp-card)" />
            <stop offset="60%" stopColor="var(--dp-paper-2)" />
            <stop offset="100%" stopColor="var(--dp-line-2)" />
          </radialGradient>
          <radialGradient id="g-sheen" cx="30%" cy="28%" r="40%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="g-arc-fwd" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={accent} stopOpacity="0" />
            <stop offset="45%"  stopColor={accent} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="g-arc-rev" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor={accent} stopOpacity="0" />
            <stop offset="45%"  stopColor={accent} stopOpacity="0.6" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
          <clipPath id="globe-clip">
            <circle cx="200" cy="200" r="160" />
          </clipPath>
        </defs>

        {/* Sphere base */}
        <circle cx="200" cy="200" r="160" fill="url(#g-shade)" stroke="var(--dp-line-2)" strokeWidth="1.5" />

        {/* Grid lines — latitude */}
        <g clipPath="url(#globe-clip)" stroke="var(--dp-line-2)" strokeWidth="0.8" fill="none" opacity="0.6">
          <ellipse cx="200" cy="200" rx="160" ry="48" />
          <ellipse cx="200" cy="200" rx="160" ry="90" />
          <ellipse cx="200" cy="200" rx="160" ry="130" />
          <ellipse cx="200" cy="200" rx="160" ry="155" />
        </g>

        {/* Grid lines — longitude */}
        <g clipPath="url(#globe-clip)" stroke="var(--dp-line-2)" strokeWidth="0.8" fill="none" opacity="0.6">
          <ellipse cx="200" cy="200" rx="48"  ry="160" />
          <ellipse cx="200" cy="200" rx="90"  ry="160" />
          <ellipse cx="200" cy="200" rx="130" ry="160" />
        </g>

        {/* Rotating equator band */}
        <g style={{ transformOrigin: "200px 200px", animation: "dp-spin 18s linear infinite" }}>
          <ellipse cx="200" cy="200" rx="160" ry="38"
            fill="none" stroke={accent} strokeWidth="1.5"
            strokeDasharray="4 7" opacity="0.5" clipPath="url(#globe-clip)" />
        </g>

        {/* Continents */}
        <g clipPath="url(#globe-clip)" fill="var(--dp-ink)" opacity="0.75">
          <path d="M205 162 q15 -9 24 5 q9 14 -1 30 q-8 16 -3 31 q4 18 -8 24 q-13 6 -19 -10 q-7 -17 -1 -33 q4 -16 -2 -28 q-4 -11 4 -14 q3 -2 6 -5z" />
          <path d="M148 128 q26 -9 52 -2 q28 7 52 0 q-1 13 -22 17 q-24 5 -42 0 q-19 -3 -42 -2 q-2 -7 2 -13z" />
          <path d="M72 176 q15 -11 25 2 q11 14 5 31 q-5 21 -15 27 q-13 4 -17 -9 q-5 -15 1 -29 q3 -15 1 -22z" />
          <path d="M284 246 q13 -3 19 7 q5 9 -3 15 q-13 7 -24 0 q-7 -5 -2 -13 q4 -7 10 -9z" />
        </g>

        {/* Sphere sheen (highlight) */}
        <circle cx="200" cy="200" r="160" fill="url(#g-sheen)" />

        {/* ── Orbit ring 1 — forward, 20s ── */}
        <g style={{ transformOrigin: "200px 200px", animation: "dp-spin 20s linear infinite" }}>
          <ellipse cx="200" cy="200" rx="182" ry="182"
            fill="none" stroke="url(#g-arc-fwd)" strokeWidth="2.5"
            strokeDasharray="220 900" />
          {/* Parcel box on orbit 1 */}
          <g transform="translate(382 200)">
            <rect x="-9" y="-9" width="18" height="18" rx="3.5" fill={accent} />
            <line x1="-9" y1="-2" x2="9" y2="-2" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
            <line x1="0"  y1="-9" x2="0"  y2="9"  stroke="#fff" strokeWidth="1.5" opacity="0.4" />
          </g>
        </g>

        {/* ── Orbit ring 2 — reverse, 30s ── */}
        <g style={{ transformOrigin: "200px 200px", animation: "dp-spin-rev 30s linear infinite" }}>
          <ellipse cx="200" cy="200" rx="197" ry="197"
            fill="none" stroke="url(#g-arc-rev)" strokeWidth="1.5"
            strokeDasharray="140 1000" />
          {/* Small parcel on orbit 2 */}
          <g transform="translate(397 200)">
            <rect x="-6" y="-6" width="12" height="12" rx="2.5" fill="var(--dp-ink)" stroke={accent} strokeWidth="1.2" />
          </g>
          <g transform="translate(3 200)">
            <rect x="-6" y="-6" width="12" height="12" rx="2.5" fill={accent} opacity="0.8" />
          </g>
        </g>

        {/* ── Location pins with pulse rings ── */}
        {[
          { x: 122, y: 158, delay: "0s" },
          { x: 232, y: 143, delay: "0.5s" },
          { x: 287, y: 198, delay: "1s" },
          { x: 182, y: 248, delay: "1.5s" },
          { x: 253, y: 255, delay: "0.8s" },
        ].map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y})`}>
            {/* Pulse ring 1 */}
            <circle r="4" fill={accent} opacity="0.25"
              style={{ transformOrigin: "0 0", animation: `dp-pulse 2.8s ${p.delay} ease-out infinite` }} />
            {/* Pulse ring 2 — offset */}
            <circle r="4" fill={accent} opacity="0.15"
              style={{ transformOrigin: "0 0", animation: `dp-pulse 2.8s calc(${p.delay} + 0.6s) ease-out infinite` }} />
            {/* Pin dot */}
            <circle r="3.5" fill={accent} />
            <circle r="1.5" fill="#fff" opacity="0.8" />
          </g>
        ))}

        {/* Equator circle border */}
        <circle cx="200" cy="200" r="160" fill="none" stroke="var(--dp-line-2)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function DPWorldMap({ accent = "var(--dp-accent)" }) {
  // Stylized dot-matrix world map
  const dots = [];
  for (let y = 0; y < 24; y++) {
    for (let x = 0; x < 48; x++) {
      // crude continent silhouette via noise function
      const cx = (x - 24) / 24, cy = (y - 12) / 12;
      const americas = Math.abs(cx + 0.7) < 0.25 && Math.abs(cy) < 0.7;
      const eurasia = cx > 0 && cx < 0.7 && cy > -0.4 && cy < 0.1 && (Math.abs(cy + 0.1) + cx * 0.3) < 0.5;
      const africa = cx > -0.05 && cx < 0.25 && cy > 0 && cy < 0.6;
      const oceania = cx > 0.55 && cx < 0.75 && cy > 0.35 && cy < 0.55;
      if (americas || eurasia || africa || oceania) {
        dots.push([x, y]);
      }
    }
  }
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "2/1" }}>
      <svg viewBox="0 0 480 240" style={{ width: "100%", height: "100%" }}>
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x * 10 + 5} cy={y * 10 + 5} r="1.5" fill="var(--dp-ink)" opacity="0.45" />
        ))}
        {/* Routes */}
        {[
          [80, 90, 240, 130], [120, 100, 360, 100], [220, 110, 280, 150], [380, 110, 420, 180]
        ].map(([x1, y1, x2, y2], i) => (
          <g key={i}>
            <path d={`M${x1} ${y1} Q${(x1 + x2) / 2} ${Math.min(y1, y2) - 40} ${x2} ${y2}`}
              fill="none" stroke={accent} strokeWidth="1.4"
              strokeDasharray="4 4"
              style={{ animation: `dp-dash ${4 + i * 0.5}s linear infinite` }} />
            <circle cx={x1} cy={y1} r="3" fill={accent} />
            <circle cx={x2} cy={y2} r="3" fill="var(--dp-ink)" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function DPOrbits({ accent = "var(--dp-accent)" }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1", maxWidth: 560 }}>
      <svg viewBox="0 0 400 400" style={{ width: "100%", height: "100%" }}>
        {[60, 110, 160, 200].map((r, i) => (
          <circle key={i} cx="200" cy="200" r={r}
            fill="none" stroke="var(--dp-line-2)" strokeWidth="1" strokeDasharray="2 4" />
        ))}
        <circle cx="200" cy="200" r="32" fill="var(--dp-ink)" />
        <text x="200" y="206" textAnchor="middle" fill="var(--dp-paper)" fontSize="11" fontFamily="var(--dp-sans)" fontWeight="600">YOU</text>
        {[
          { r: 60, dur: 8, label: "🇺🇸" },
          { r: 110, dur: 14, label: "🇬🇧" },
          { r: 160, dur: 22, label: "🇨🇳" },
          { r: 200, dur: 30, label: "🇹🇷" },
        ].map((o, i) => (
          <g key={i} style={{ transformOrigin: "200px 200px", animation: `dp-spin ${o.dur}s linear infinite ${i * 0.5}s` }}>
            <g transform={`translate(${200 + o.r} 200)`}>
              <circle r="14" fill="var(--dp-card)" stroke={accent} strokeWidth="1.5" />
              <text textAnchor="middle" y="5" fontSize="14">{o.label}</text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─── Retailer marquee ───────────────────────────────────────────────────
function DPRetailerStrip({ items = RETAILERS }) {
  const doubled = [...items, ...items];
  return (
    <div className="dp-marquee">
      <div className="dp-marquee-track">
        {doubled.map((r, i) => (
          <span key={i} style={{
            fontFamily: "var(--dp-display)",
            fontSize: 32,
            color: "var(--dp-ink)",
            opacity: 0.55,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}>{r}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Country picker ──────────────────────────────────────────────────────
function DPCountryPicker({ compact = false }) {
  const [from, setFrom] = useState(FROM_COUNTRIES[0]);
  const [to, setTo] = useState(TO_COUNTRIES[0]);
  const [weight, setWeight] = useState(2);
  const price = useMemo(() => {
    const base = { US: 8, UK: 9, DE: 10, CN: 6, TR: 7, IT: 11, FR: 11, JP: 14 }[from.code] || 9;
    return (base + weight * 4.5).toFixed(2);
  }, [from, weight]);

  return (
    <div className="dp-card" style={{
      padding: compact ? 20 : 28,
      background: "var(--dp-card)",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "end" }}>
        <CountryField label="Ship from" list={FROM_COUNTRIES} value={from} onChange={setFrom} />
        <div style={{ paddingBottom: 14, color: "var(--dp-muted)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
        <CountryField label="Ship to" list={TO_COUNTRIES} value={to} onChange={setTo} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 18 }}>
        <div>
          <label style={{ fontSize: 12, color: "var(--dp-muted)", display: "block", marginBottom: 8 }}>Estimated weight</label>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input type="range" min="0.5" max="20" step="0.5" value={weight}
              onChange={e => setWeight(parseFloat(e.target.value))}
              style={{ flex: 1, accentColor: "var(--dp-accent)" }} />
            <span style={{ minWidth: 56, textAlign: "right", fontVariantNumeric: "tabular-nums", fontSize: 14 }}>{weight} kg</span>
          </div>
        </div>
        <div style={{
          padding: 14, borderRadius: "var(--dp-radius-sm)",
          background: "var(--dp-paper-2)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Estimated</div>
            <div style={{ fontFamily: "var(--dp-display)", fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1 }}>${price}</div>
          </div>
          <span style={{ fontSize: 12, color: "var(--dp-muted)" }}>3–6 days</span>
        </div>
      </div>

      <button className="dp-btn dp-btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 16, padding: "13px 18px" }}>
        Get my address in {to.name}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}

function CountryField({ label, list, value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <label style={{ fontSize: 12, color: "var(--dp-muted)", display: "block", marginBottom: 8 }}>{label}</label>
      <button onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: 10,
          padding: "12px 14px",
          background: "var(--dp-paper-2)",
          border: "1px solid var(--dp-line)",
          borderRadius: "var(--dp-radius-sm)",
          textAlign: "left",
          color: "var(--dp-ink)",
        }}>
        <span style={{ fontSize: 22 }}>{value.flag}</span>
        <span style={{ flex: 1, fontSize: 14 }}>{value.name}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }}><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 10,
          background: "var(--dp-card)", border: "1px solid var(--dp-line)",
          borderRadius: "var(--dp-radius-sm)", padding: 6,
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
          maxHeight: 240, overflowY: "auto",
        }}>
          {list.map(c => (
            <button key={c.code} onClick={() => { onChange(c); setOpen(false); }}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10,
                padding: "9px 10px", border: "none", background: c.code === value.code ? "var(--dp-paper-2)" : "transparent",
                borderRadius: 6, textAlign: "left", fontSize: 14, color: "var(--dp-ink)",
              }}>
              <span style={{ fontSize: 18 }}>{c.flag}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────────
function DPFaq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ borderTop: "1px solid var(--dp-line)" }}>
      {items.map((q, i) => (
        <div key={i} style={{ borderBottom: "1px solid var(--dp-line)" }}>
          <button onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "22px 4px", border: "none", background: "transparent",
              fontFamily: "var(--dp-display)", fontSize: 22, letterSpacing: "-0.02em",
              color: "var(--dp-ink)", textAlign: "left",
            }}>
            <span>{q.q}</span>
            <span style={{ color: "var(--dp-accent)", transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s", fontSize: 24 }}>+</span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: 22, color: "var(--dp-muted)", fontSize: 15, maxWidth: 680, lineHeight: 1.55 }}>
              {q.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────
function DPFooter() {
  return (
    <footer style={{
      borderTop: "1px solid var(--dp-line)",
      padding: "56px 40px 32px",
      background: "var(--dp-paper)",
    }}>
      <div className="dp-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <DPLogo />
            <p style={{ marginTop: 16, fontSize: 14, color: "var(--dp-muted)", maxWidth: 280, lineHeight: 1.55 }}>
              Virtual addresses in 20+ countries. Shop borderless, we handle the rest.
            </p>
          </div>
          {[
            { h: "Product", l: ["Virtual addresses", "Shipping calculator", "Consolidation", "Package photos", "Personal shopper"] },
            { h: "Countries", l: ["United States", "United Kingdom", "China", "Turkey", "All countries"] },
            { h: "Company", l: ["About", "Press", "Careers", "Partners", "Contact"] },
            { h: "Legal", l: ["Terms", "Privacy", "Cookies", "Security"] },
          ].map(col => (
            <div key={col.h}>
              <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--dp-muted)", marginBottom: 14 }}>{col.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {col.l.map(x => <li key={x} style={{ fontSize: 14 }}><a href="#" className="dp-tlink" style={{ borderBottom: "none" }}>{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--dp-line)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 13, color: "var(--dp-muted)",
        }}>
          <span>© 2026 Forward Solutions. Shop borderless.</span>
          <span>Made with care · 20+ countries</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Export to global scope so variation files can use them ─────────────
Object.assign(window, {
  DPLogo, DPNav, DPGlobe, DPGlobeBall, DPWorldMap, DPOrbits,
  DPRetailerStrip, DPCountryPicker, DPFaq, DPFooter,
  FROM_COUNTRIES, TO_COUNTRIES, RETAILERS,
});
