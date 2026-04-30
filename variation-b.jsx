// Variation B — "Atlas" — country picker as centerpiece hero, world-map backdrop,
// asymmetric editorial grid. Same refined Sequence-style language but
// inverted hero composition.

function VariationB({ tweaks }) {
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPNav cta="Open an address" />

      {/* ═══ HERO — picker-led ═══ */}
      <section style={{
        position: "relative",
        padding: "calc(56px * var(--dp-density)) 40px calc(40px * var(--dp-density))",
        overflow: "hidden",
      }}>
        {/* Faint world-map backdrop */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 60% 80% at 50% 30%, #000 30%, transparent 80%)",
        }}>
          <DPWorldMap accent="var(--dp-line-2)" />
        </div>

        <div className="dp-container" style={{ position: "relative", textAlign: "center", maxWidth: 920, marginInline: "auto" }}>
          <div className="dp-eyebrow" style={{ marginBottom: 28 }}>
            <span className="dot"></span>
            <span>20+ origin countries · 60+ destinations</span>
          </div>

          <h1 style={{
            fontSize: "clamp(52px, 7vw, 104px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: 24,
          }}>
            {tweaks.heroHeadline.split("\n").map((line, i, arr) => (
              <span key={i} style={{ display: "block" }}>
                {i === arr.length - 1 ? (
                  <em style={{ fontStyle: "italic", color: "var(--dp-accent)", fontWeight: 300 }}>{line}</em>
                ) : line}
              </span>
            ))}
          </h1>

          <p style={{
            fontSize: 19, lineHeight: 1.5, color: "var(--dp-muted)",
            maxWidth: 580, margin: "0 auto 40px",
          }}>
            A virtual address in every major shopping hub. We receive,
            consolidate, and ship to your door — anywhere in Africa,
            the Middle East, and Europe.
          </p>

          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <DPCountryPicker />
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 28, fontSize: 13, color: "var(--dp-muted)" }}>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "var(--dp-accent)" }}>✓</span> No subscription
            </span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "var(--dp-accent)" }}>✓</span> 30-day storage
            </span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "var(--dp-accent)" }}>✓</span> Up to 80% off DHL
            </span>
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY (compressed) ═══ */}
      <section style={{ padding: "32px 0 48px", borderTop: "1px solid var(--dp-line)", borderBottom: "1px solid var(--dp-line)" }}>
        <div style={{ textAlign: "center", marginBottom: 24, fontSize: 12, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.18em" }}>
          Trusted by shoppers buying from
        </div>
        <DPRetailerStrip />
      </section>

      {/* ═══ HOW IT WORKS — alternating rows ═══ */}
      <section id="how" className="dp-section">
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "end", gap: 40, marginBottom: 80 }}>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 72px)", maxWidth: 720 }}>
              Four steps from <em style={{ color: "var(--dp-accent)" }}>checkout</em><br/>
              to <em style={{ color: "var(--dp-accent)" }}>doorstep</em>.
            </h2>
            <div></div>
            <a href="#" className="dp-btn dp-btn-ghost">Watch the demo</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
            {[
              { n: "01", t: "Get an address", b: "Sign up free. Receive virtual addresses in every supported country instantly.", v: <StepGlyphAddress /> },
              { n: "02", t: "Shop anywhere", b: "Use your address at checkout — Amazon, eBay, Nike, ASOS, anywhere.", v: <StepGlyphShop /> },
              { n: "03", t: "We handle it", b: "We photograph, consolidate and repack to slash billable weight.", v: <StepGlyphHandle /> },
              { n: "04", t: "Pick a speed", b: "Express, standard or economy. Pay once. Track every kilometer.", v: <StepGlyphShip /> },
            ].map((s, i) => (
              <div key={s.n} style={{
                padding: "32px 28px",
                borderLeft: i === 0 ? "1px solid var(--dp-line)" : "none",
                borderRight: "1px solid var(--dp-line)",
                borderTop: "1px solid var(--dp-line)",
                borderBottom: "1px solid var(--dp-line)",
                background: "var(--dp-card)",
              }}>
                <div style={{
                  height: 120, marginBottom: 24, display: "grid", placeItems: "center",
                  background: "var(--dp-paper-2)", borderRadius: "var(--dp-radius-sm)",
                }}>{s.v}</div>
                <div className="dp-step-num" style={{ marginBottom: 10 }}>{s.n}</div>
                <h3 style={{ fontSize: 22, marginBottom: 10, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: "var(--dp-muted)", lineHeight: 1.55 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ASYMMETRIC FEATURE PANEL ═══ */}
      <section id="features" className="dp-section" style={{ background: "var(--dp-paper-2)" }}>
        <div className="dp-container">
          <div style={{ marginBottom: 56 }}>
            <div className="dp-eyebrow-h">Built-in extras</div>
            <h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)", maxWidth: 760 }}>
              Everything competitors charge extra for.<br/>
              <em style={{ color: "var(--dp-accent)" }}>With us, it's standard.</em>
            </h2>
          </div>

          {/* Bento grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "minmax(180px, auto)",
            gap: 16,
          }}>
            <BentoCard span={{ col: 3, row: 2 }} kicker="Featured" title="Smart consolidation">
              <p style={{ fontSize: 15, color: "var(--dp-muted)", lineHeight: 1.55, marginBottom: 20 }}>
                Drop 30 days of orders into one outbound shipment. Our algorithm picks the cheapest carrier per route — automatically.
              </p>
              <ConsolidationGlyph />
            </BentoCard>

            <BentoCard span={{ col: 3, row: 1 }} kicker="Photos" title="See every package">
              <p style={{ fontSize: 14, color: "var(--dp-muted)" }}>Photos before, during, and after repacking — uploaded the moment your parcel hits our warehouse.</p>
            </BentoCard>

            <BentoCard span={{ col: 3, row: 1 }} kicker="Shopper" title="Store won't take your card?">
              <p style={{ fontSize: 14, color: "var(--dp-muted)" }}>Send us the link. We'll buy on your behalf. 4% fee, no asterisks.</p>
            </BentoCard>

            <BentoCard span={{ col: 2, row: 1 }} kicker="Repack" title="Cut weight in half">
              <p style={{ fontSize: 14, color: "var(--dp-muted)" }}>Strip excess packaging. Save 30–60% on every shipment.</p>
            </BentoCard>

            <BentoCard span={{ col: 2, row: 1 }} kicker="Insurance" title="$100 coverage free">
              <p style={{ fontSize: 14, color: "var(--dp-muted)" }}>Top up to any value. We handle claims door-to-door.</p>
            </BentoCard>

            <BentoCard span={{ col: 2, row: 1 }} kicker="Tax-free" title="Sales tax back">
              <p style={{ fontSize: 14, color: "var(--dp-muted)" }}>Oregon & Delaware addresses for tax-free US shopping.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ═══ STATS — left aligned, large ═══ */}
      <section style={{ padding: "calc(96px * var(--dp-density)) 40px" }}>
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 64, alignItems: "start" }}>
            <div style={{ maxWidth: 320 }}>
              <div className="dp-eyebrow-h">By the numbers</div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                Real volume. Real savings. Real shoppers — <em style={{ color: "var(--dp-accent)" }}>from everywhere</em>.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, borderTop: "1px solid var(--dp-line)", paddingTop: 32 }}>
              {[
                { n: "10K+", l: "Shoppers" },
                { n: "20+", l: "Countries" },
                { n: "1.2M", l: "Parcels" },
                { n: "$8.4M", l: "Saved" },
              ].map(s => (
                <div key={s.l}>
                  <div className="dp-stat-num" style={{ fontSize: "clamp(48px, 5.5vw, 80px)" }}>{s.n}</div>
                  <div style={{ marginTop: 12, fontSize: 12, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.14em" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL — single feature quote ═══ */}
      <section style={{ padding: "calc(96px * var(--dp-density)) 40px", background: "var(--dp-ink)", color: "var(--dp-paper)" }}>
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{
              fontFamily: "var(--dp-display)", fontSize: 96, lineHeight: 1,
              color: "var(--dp-accent)", marginBottom: 12,
            }}>"</div>
            <p style={{
              fontFamily: "var(--dp-display)", fontSize: "clamp(28px, 3vw, 38px)",
              letterSpacing: "-0.02em", lineHeight: 1.18, color: "var(--dp-paper)",
            }}>
              I run a sneaker resell shop in Lagos. Forward Solutions cut my US-to-NG shipping bill in half. The consolidation alone pays for itself.
            </p>
            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "var(--dp-accent)", color: "#fff",
                display: "grid", placeItems: "center",
                fontFamily: "var(--dp-display)", fontSize: 18,
              }}>T</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>Tunde A.</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>Sneaker reseller · Lagos, Nigeria</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { q: "Most US sites won't ship here. Now I shop on Nike and Sephora like I live in Manhattan.", n: "Layla M.", r: "Cairo · 🇪🇬" },
              { q: "We import boutique stock from Italy and Turkey. Repacking saves us 40% per shipment.", n: "David O.", r: "Nairobi · 🇰🇪" },
              { q: "Customs were a nightmare. They pre-clear everything. Zero surprise fees.", n: "Sara H.", r: "Dubai · 🇦🇪" },
              { q: "I save more on one Black Friday haul than the whole year's storage.", n: "Kwame B.", r: "Accra · 🇬🇭" },
            ].map((t, i) => (
              <figure key={i} style={{
                padding: 22,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "var(--dp-radius)",
                margin: 0,
              }}>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>"{t.q}"</p>
                <figcaption style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                  <strong style={{ color: "var(--dp-paper)", fontWeight: 500 }}>{t.n}</strong> · {t.r}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING calculator — full width ═══ */}
      <section id="pricing" className="dp-section">
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="dp-eyebrow-h">Pricing</div>
              <h2 style={{ fontSize: "clamp(40px, 5vw, 68px)", marginBottom: 20 }}>
                No subscription.<br/>
                <em style={{ color: "var(--dp-accent)" }}>Pay only for shipping.</em>
              </h2>
              <p style={{ fontSize: 17, color: "var(--dp-muted)", lineHeight: 1.55, maxWidth: 460, marginBottom: 32 }}>
                Our negotiated rates with DHL, FedEx and UPS are baked in — no markups, no surprise fees, no monthly minimums. Get an instant quote before your parcel even leaves the store.
              </p>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  { k: "🚀", t: "Express", d: "3–6 days · door-to-door tracked" },
                  { k: "📦", t: "Standard", d: "7–12 days · best value" },
                  { k: "🛳️", t: "Economy", d: "14–21 days · sea + ground" },
                ].map(p => (
                  <div key={p.t} style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: 16, border: "1px solid var(--dp-line)",
                    borderRadius: "var(--dp-radius-sm)",
                    background: "var(--dp-card)",
                  }}>
                    <span style={{ fontSize: 24 }}>{p.k}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 500 }}>{p.t}</div>
                      <div style={{ fontSize: 13, color: "var(--dp-muted)" }}>{p.d}</div>
                    </div>
                    <span style={{ fontSize: 13, color: "var(--dp-muted)" }}>From <strong style={{ color: "var(--dp-ink)", fontWeight: 500 }}>$12</strong></span>
                  </div>
                ))}
              </div>
            </div>
            <DPCountryPicker />
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="dp-section" style={{ background: "var(--dp-paper-2)" }}>
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80 }}>
          <div>
            <div className="dp-eyebrow-h">FAQ</div>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
              The fine print, <em style={{ color: "var(--dp-accent)" }}>plain</em>.
            </h2>
            <p style={{ marginTop: 16, fontSize: 15, color: "var(--dp-muted)", maxWidth: 320 }}>
              Still curious? <a href="#" className="dp-tlink">Talk to a human</a> — we reply in under an hour.
            </p>
          </div>
          <DPFaq items={[
            { q: "Do I need a separate address for each country?", a: "No — one Forward Solutions account gives you a virtual address in every country we serve. Use them all simultaneously." },
            { q: "How long does shipping take?", a: "Express: 3–6 days. Standard: 7–12 days. Economy: 14–21 days. All times are door-to-door, including customs clearance." },
            { q: "What about customs and duties?", a: "We pre-calculate at checkout based on declared value and destination — no surprise bills at the door." },
            { q: "Where can you ship to?", a: "Africa, the Middle East, and most of Europe. Coverage is expanding monthly." },
            { q: "What's prohibited?", a: "Lithium batteries (in some lanes), liquids over 1L, weapons, and anything illegal at origin or destination." },
          ]} />
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{
        padding: "calc(120px * var(--dp-density)) 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }}>
          <DPWorldMap accent="var(--dp-line-2)" />
        </div>
        <div className="dp-container" style={{ position: "relative" }}>
          <h2 style={{ fontSize: "clamp(56px, 7vw, 112px)", letterSpacing: "-0.04em", lineHeight: 0.94, marginBottom: 24 }}>
            Shop the world.<br/>
            <em style={{ color: "var(--dp-accent)" }}>We'll bring it home.</em>
          </h2>
          <p style={{ fontSize: 19, color: "var(--dp-muted)", maxWidth: 540, margin: "0 auto 32px" }}>
            Get your first virtual address in 60 seconds. Free, forever.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a href="#" className="dp-btn dp-btn-primary" style={{ padding: "16px 26px", fontSize: 16 }}>
              Open my address
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#" className="dp-btn dp-btn-ghost" style={{ padding: "16px 22px", fontSize: 16 }}>
              See pricing
            </a>
          </div>
        </div>
      </section>

      <DPFooter />
    </div>
  );
}

function BentoCard({ children, span, kicker, title }) {
  return (
    <div style={{
      gridColumn: `span ${span.col}`,
      gridRow: `span ${span.row}`,
      padding: 24,
      background: "var(--dp-card)",
      border: "1px solid var(--dp-line)",
      borderRadius: "var(--dp-radius)",
      display: "flex",
      flexDirection: "column",
    }}>
      <div className="dp-step-num" style={{ marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "var(--dp-sans)", fontSize: 11 }}>{kicker}</div>
      <h3 style={{ fontSize: 22, marginBottom: 12, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{title}</h3>
      {children}
    </div>
  );
}

function StepGlyphAddress() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="14" y="22" width="52" height="36" rx="3" fill="var(--dp-card)" stroke="var(--dp-ink)" strokeWidth="1.5" />
      <path d="M14 28l26 18 26-18" stroke="var(--dp-ink)" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="22" r="8" fill="var(--dp-accent)" />
    </svg>
  );
}
function StepGlyphShop() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M22 26h36l-4 26H26z" fill="var(--dp-card)" stroke="var(--dp-ink)" strokeWidth="1.5" />
      <path d="M30 26v-6a10 10 0 0120 0v6" stroke="var(--dp-ink)" strokeWidth="1.5" fill="none" />
      <circle cx="58" cy="48" r="6" fill="var(--dp-accent)" />
      <path d="M55 48l2 2 4-4" stroke="#fff" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
function StepGlyphHandle() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="16" y="30" width="22" height="22" rx="2" fill="var(--dp-card)" stroke="var(--dp-ink)" strokeWidth="1.5" />
      <rect x="42" y="30" width="22" height="22" rx="2" fill="var(--dp-card)" stroke="var(--dp-ink)" strokeWidth="1.5" />
      <rect x="29" y="20" width="22" height="22" rx="2" fill="var(--dp-accent)" stroke="var(--dp-ink)" strokeWidth="1.5" />
    </svg>
  );
}
function StepGlyphShip() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M14 50h44l8-14H22z" fill="var(--dp-card)" stroke="var(--dp-ink)" strokeWidth="1.5" />
      <circle cx="26" cy="56" r="5" fill="var(--dp-ink)" />
      <circle cx="54" cy="56" r="5" fill="var(--dp-ink)" />
      <path d="M30 36v-8h12v8" stroke="var(--dp-accent)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function ConsolidationGlyph() {
  return (
    <svg width="100%" height="120" viewBox="0 0 320 120" fill="none" style={{ marginTop: "auto" }}>
      {/* Multiple in */}
      {[20, 50, 80].map((y, i) => (
        <g key={i}>
          <rect x="10" y={y - 8} width="22" height="16" rx="2" fill="var(--dp-card)" stroke="var(--dp-ink)" strokeWidth="1.2" />
          <line x1="34" y1={y} x2="120" y2="60" stroke="var(--dp-line-2)" strokeWidth="1" strokeDasharray="3 3" />
        </g>
      ))}
      {/* Hub */}
      <circle cx="160" cy="60" r="22" fill="var(--dp-accent)" />
      <text x="160" y="65" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="var(--dp-sans)" fontWeight="600">DP</text>
      {/* Out */}
      <line x1="184" y1="60" x2="270" y2="60" stroke="var(--dp-ink)" strokeWidth="1.4" />
      <rect x="270" y="48" width="40" height="24" rx="3" fill="var(--dp-ink)" />
      <text x="290" y="64" textAnchor="middle" fill="var(--dp-paper)" fontSize="10" fontFamily="var(--dp-sans)" fontWeight="600">YOU</text>
    </svg>
  );
}

window.VariationB = VariationB;
