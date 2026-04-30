// Variation A — "Editorial" — refined Sequence-style with serif display, single-column hero with globe, country picker as a featured card.

const { useState: useStateA, useEffect: useEffectA } = React;

function VariationA({ tweaks }) {
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPNav cta="Get a free address" />

      {/* ═══ HERO ═══ */}
      <section style={{
        position: "relative",
        padding: "calc(80px * var(--dp-density)) 40px calc(60px * var(--dp-density))",
        overflow: "hidden",
      }}>
        <div className="dp-container" style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 64,
          alignItems: "center",
        }}>
          {/* Left: copy */}
          <div>
            <div className="dp-eyebrow" style={{ marginBottom: 28 }}>
              <span className="dot"></span>
              <span>Now serving 20+ origin countries</span>
            </div>

            <h1 style={{
              fontSize: "clamp(48px, 6.2vw, 88px)",
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              marginBottom: 28,
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
              maxWidth: 480, marginBottom: 36,
            }}>
              Get virtual addresses in the US, UK, China, Turkey & more.
              Shop any store, we consolidate, repack and ship to your door —
              anywhere in Africa, the Middle East and Europe.
            </p>

            <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
              <a href="#" className="dp-btn dp-btn-primary" style={{ padding: "14px 22px", fontSize: 15 }}>
                Get an address — free
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#" className="dp-btn dp-btn-ghost" style={{ padding: "14px 20px", fontSize: 15 }}>
                See how it works
              </a>
            </div>

            <div style={{ display: "flex", gap: 28, fontSize: 13, color: "var(--dp-muted)" }}>
              <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ color: "var(--dp-accent)" }}>✓</span> No subscription
              </span>
              <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ color: "var(--dp-accent)" }}>✓</span> 30-day free storage
              </span>
              <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ color: "var(--dp-accent)" }}>✓</span> Up to 80% off DHL
              </span>
            </div>
          </div>

          {/* Right: globe */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <DPGlobe variant={tweaks.heroVisual} accent="var(--dp-accent)" />

            {/* Floating chips */}
            <FloatChip top="6%" left="-2%" delay={0.3}>
              <span style={{ fontSize: 18 }}>📦</span>
              <div>
                <div style={{ fontSize: 11, color: "var(--dp-muted)" }}>From New York</div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>Nike Air · 1.2 kg</div>
              </div>
            </FloatChip>

            <FloatChip top="62%" left="-6%" delay={0.6}>
              <span style={{ fontSize: 18 }}>🚚</span>
              <div>
                <div style={{ fontSize: 11, color: "var(--dp-accent)" }}>In transit</div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>3 packages · Lagos</div>
              </div>
            </FloatChip>

            <FloatChip top="22%" right="-4%" delay={0.9}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 14 }}>🇬🇧</span>
                <span style={{ fontSize: 14 }}>→</span>
                <span style={{ fontSize: 14 }}>🇰🇪</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--dp-muted)" }}>4-day express</div>
            </FloatChip>

            <FloatChip top="70%" right="-2%" delay={1.2}>
              <span style={{ fontSize: 18 }}>✓</span>
              <div>
                <div style={{ fontSize: 11, color: "var(--dp-muted)" }}>Delivered</div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>+$284 saved</div>
              </div>
            </FloatChip>
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══ */}
      <section style={{ padding: "32px 0 56px", borderTop: "1px solid var(--dp-line)", borderBottom: "1px solid var(--dp-line)" }}>
        <div style={{ textAlign: "center", marginBottom: 28, fontSize: 12, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.18em" }}>
          Shop from the world's biggest stores
        </div>
        <DPRetailerStrip />
      </section>

      {/* ═══ COUNTRY PICKER ═══ */}
      <section id="countries" className="dp-section">
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="dp-eyebrow-h">Where to?</div>
              <h2 style={{ fontSize: "clamp(36px, 4.4vw, 60px)", marginBottom: 20 }}>
                One address per <em style={{ color: "var(--dp-accent)" }}>country</em>.<br/>
                One destination — <em style={{ color: "var(--dp-accent)" }}>yours</em>.
              </h2>
              <p style={{ fontSize: 17, color: "var(--dp-muted)", lineHeight: 1.55, maxWidth: 480, marginBottom: 28 }}>
                Pick where you want to shop from and where it should land.
                We'll quote you instantly — no sign-up, no surprise fees at the door.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {FROM_COUNTRIES.slice(0, 6).map(c => (
                  <span key={c.code} style={{
                    display: "inline-flex", gap: 8, alignItems: "center",
                    padding: "7px 13px 7px 9px",
                    border: "1px solid var(--dp-line)",
                    borderRadius: 999, fontSize: 13, background: "var(--dp-card)",
                  }}>
                    <span style={{ fontSize: 16 }}>{c.flag}</span>
                    <span>{c.name}</span>
                  </span>
                ))}
                <span style={{
                  display: "inline-flex", gap: 6, alignItems: "center",
                  padding: "7px 13px",
                  border: "1px dashed var(--dp-line-2)",
                  borderRadius: 999, fontSize: 13, color: "var(--dp-muted)",
                }}>
                  +14 more
                </span>
              </div>
            </div>
            <DPCountryPicker />
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how" className="dp-section" style={{ background: "var(--dp-paper-2)" }}>
        <div className="dp-container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div className="dp-eyebrow-h">How it works</div>
            <h2 style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}>
              Four steps. Zero friction. <em style={{ color: "var(--dp-accent)" }}>Real savings.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              { n: "01", t: "Sign up free", b: "Create an account in 60 seconds. Get virtual addresses in every country we serve — instantly." },
              { n: "02", t: "Shop any store", b: "Use your new address at checkout. Amazon, eBay, Nike, ASOS — anywhere that won't ship to you." },
              { n: "03", t: "We receive & repack", b: "We photograph every package, consolidate multiple orders, and remove unnecessary weight." },
              { n: "04", t: "Choose your speed", b: "Pick express, standard or economy. Pay once. Track door-to-door, all the way home." },
            ].map((s, i) => (
              <div key={s.n} style={{
                padding: 28, background: "var(--dp-card)",
                border: "1px solid var(--dp-line)",
                borderRadius: "var(--dp-radius)",
                position: "relative",
              }}>
                <div className="dp-step-num" style={{ marginBottom: 20 }}>STEP {s.n}</div>
                <h3 style={{ fontSize: 24, marginBottom: 12, fontFamily: "var(--dp-display)" }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: "var(--dp-muted)", lineHeight: 1.55 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES GRID ═══ */}
      <section id="features" className="dp-section">
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 56, alignItems: "end" }}>
            <div>
              <div className="dp-eyebrow-h">Built-in extras</div>
              <h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>
                Things you didn't know you needed —<br/>
                <em style={{ color: "var(--dp-accent)" }}>included.</em>
              </h2>
            </div>
            <p style={{ fontSize: 16, color: "var(--dp-muted)", lineHeight: 1.55, maxWidth: 460, justifySelf: "end" }}>
              Every feature you'd pay extra for at our competitors. With us, they're standard. Because shopping borderless shouldn't have asterisks.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--dp-line)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", overflow: "hidden" }}>
            {[
              { i: "📦", t: "Free consolidation", b: "Bundle 30 days of orders into one shipment. Save up to 80%." },
              { i: "📷", t: "Package photos", b: "Every parcel is photographed before & after repacking." },
              { i: "✂️", t: "Repack & remove", b: "Strip excess packaging to cut billable weight in half." },
              { i: "🛒", t: "Personal shopper", b: "Buying from a store that won't take foreign cards? We'll buy for you." },
              { i: "🛡️", t: "Insurance included", b: "$100 of free coverage on every shipment. Top up to any value." },
              { i: "💸", t: "Tax-free routes", b: "Claim US sales tax back on Oregon and Delaware addresses." },
            ].map(f => (
              <div key={f.t} style={{ padding: 28, background: "var(--dp-card)" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{f.i}</div>
                <h3 style={{ fontSize: 19, marginBottom: 10, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{f.t}</h3>
                <p style={{ fontSize: 14, color: "var(--dp-muted)", lineHeight: 1.55 }}>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding: "calc(80px * var(--dp-density)) 40px", borderTop: "1px solid var(--dp-line)", borderBottom: "1px solid var(--dp-line)" }}>
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              { n: "10K+", l: "Active shoppers" },
              { n: "20+", l: "Origin countries" },
              { n: "1.2M", l: "Parcels delivered" },
              { n: "$8.4M", l: "Saved on shipping" },
            ].map(s => (
              <div key={s.l}>
                <div className="dp-stat-num">{s.n}</div>
                <div style={{ marginTop: 10, fontSize: 13, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-eyebrow-h" style={{ justifyContent: "center", display: "flex" }}>What customers say</div>
          <h2 style={{ textAlign: "center", fontSize: "clamp(32px, 3.6vw, 48px)", maxWidth: 800, margin: "0 auto 56px" }}>
            From <em style={{ color: "var(--dp-accent)" }}>Lagos to Lyon</em> — shoppers who shop borderless.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { q: "I run a sneaker resell shop in Lagos. Forward Solutions cut my US-to-NG shipping bill in half. The consolidation alone pays for itself.", n: "Tunde A.", r: "Sneaker reseller · Nigeria", a: "T" },
              { q: "I'm a student in Cairo. Most US sites won't ship here. Now I shop on Nike, Sephora and Apple like I live in Manhattan.", n: "Layla M.", r: "Student · Egypt", a: "L" },
              { q: "We import boutique stock from Italy and Turkey. The repacking service saves us 40% on every shipment. Honestly, no contest.", n: "David O.", r: "Founder · Kenya", a: "D" },
            ].map((t, i) => (
              <figure key={i} style={{
                padding: 28, background: "var(--dp-card)",
                border: "1px solid var(--dp-line)",
                borderRadius: "var(--dp-radius)",
                margin: 0, display: "flex", flexDirection: "column", gap: 24,
              }}>
                <blockquote style={{
                  margin: 0, fontFamily: "var(--dp-display)", fontSize: 19,
                  letterSpacing: "-0.015em", lineHeight: 1.4,
                }}>
                  "{t.q}"
                </blockquote>
                <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "var(--dp-accent)", color: "#fff",
                    display: "grid", placeItems: "center",
                    fontFamily: "var(--dp-display)", fontSize: 15,
                  }}>{t.a}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{t.n}</div>
                    <div style={{ fontSize: 12, color: "var(--dp-muted)" }}>{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING / CALCULATOR ═══ */}
      <section id="pricing" className="dp-section" style={{ background: "var(--dp-ink)", color: "var(--dp-paper)" }}>
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 12px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999, fontSize: 12,
              color: "rgba(255,255,255,0.7)", marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--dp-accent)" }}></span>
              Transparent pricing
            </div>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "var(--dp-paper)", marginBottom: 20 }}>
              Pay only for what <em style={{ color: "var(--dp-accent)" }}>moves</em>.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.55, maxWidth: 420, marginBottom: 32 }}>
              No subscription. No setup. No fee for storing your packages for the first 30 days. You pay shipping — at our negotiated rates.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "14px 20px", maxWidth: 380 }}>
              {[
                ["Up to 80%", "off published carrier rates"],
                ["$0", "monthly fee · ever"],
                ["30 days", "free storage on every package"],
                ["No markup", "on insurance or duties"],
              ].map(([k, v]) => (
                <React.Fragment key={k}>
                  <div style={{ fontFamily: "var(--dp-display)", fontSize: 22, color: "var(--dp-accent)", letterSpacing: "-0.02em" }}>{k}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", alignSelf: "center" }}>{v}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--dp-card)", padding: 6, borderRadius: "calc(var(--dp-radius) + 4px)" }}>
            <div data-dp-theme="light"><DPCountryPicker /></div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="dp-section">
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80 }}>
          <div>
            <div className="dp-eyebrow-h">FAQ</div>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
              Questions, <em style={{ color: "var(--dp-accent)" }}>answered</em>.
            </h2>
            <p style={{ marginTop: 16, fontSize: 15, color: "var(--dp-muted)", maxWidth: 320 }}>
              Still curious? <a href="#" className="dp-tlink">Talk to a human</a> — we reply in under an hour.
            </p>
          </div>
          <DPFaq items={[
            { q: "Do I need a separate address for each country?", a: "No — one Forward Solutions account gives you a virtual address in every country we serve. You can use them all simultaneously, and we'll tell you which one each retailer prefers." },
            { q: "How long does shipping take?", a: "Express: 3–6 business days door-to-door. Standard: 7–12 days. Economy: 14–21 days. Times depend on origin, destination, and customs clearance." },
            { q: "What about customs and duties?", a: "We pre-calculate duties at checkout based on declared value and destination — no surprise bills at the door. We can pay duties on your behalf with no markup." },
            { q: "Can I ship anywhere in the world?", a: "We ship to Africa, the Middle East, and most of Europe. Coverage is expanding monthly. Enter your destination above to confirm." },
            { q: "What's prohibited?", a: "Lithium batteries (in some lanes), liquids over 1L, weapons, and anything illegal at origin or destination. We screen automatically — you'll know within an hour." },
          ]} />
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{
        padding: "calc(120px * var(--dp-density)) 40px",
        background: "var(--dp-paper-2)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="dp-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }}></div>
        <div className="dp-container" style={{ position: "relative" }}>
          <h2 style={{ fontSize: "clamp(48px, 6vw, 96px)", letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: 24 }}>
            Shop the world.<br/>
            <em style={{ color: "var(--dp-accent)" }}>We'll bring it home.</em>
          </h2>
          <p style={{ fontSize: 19, color: "var(--dp-muted)", maxWidth: 540, margin: "0 auto 32px" }}>
            Get your first virtual address in 60 seconds. Free, forever.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a href="#" className="dp-btn dp-btn-primary" style={{ padding: "16px 26px", fontSize: 16 }}>
              Start shopping borderless
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

function FloatChip({ children, top, left, right, delay = 0 }) {
  return (
    <div style={{
      position: "absolute", top, left, right,
      background: "var(--dp-card)",
      border: "1px solid var(--dp-line)",
      borderRadius: 12,
      padding: "10px 14px",
      display: "flex", alignItems: "center", gap: 10,
      boxShadow: "0 8px 24px rgba(20,15,10,0.06)",
      animation: `dp-float-up 0.7s ${delay}s both ease-out`,
      zIndex: 2,
    }}>
      {children}
    </div>
  );
}

window.VariationA = VariationA;
