// home.jsx — full home page rewritten from the brief.
// Top bar + sticky nav from dp-chrome. All sections per spec.

function HomePage({ tweaks }) {
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="home" />

      {/* ═══ HERO ═══ */}
      <section style={{ position: "relative", padding: "calc(72px * var(--dp-density)) 40px calc(56px * var(--dp-density))", overflow: "hidden" }}>
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="dp-eyebrow" style={{ marginBottom: 28 }}>
              <span className="dot"></span>
              <span>International parcel forwarding · 60+ countries</span>
            </div>
            <h1 style={{ fontSize: "clamp(44px, 5.8vw, 84px)", lineHeight: 1.04, letterSpacing: "-0.035em", marginBottom: 24 }}>
              {tweaks.heroHeadline.split("\n").map((line, i, arr) => (
                <span key={i} style={{ display: "block" }}>
                  {i === arr.length - 1 ? <em style={{ fontStyle: "italic", color: "var(--dp-accent)", fontWeight: 300 }}>{line}</em> : line}
                </span>
              ))}
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--dp-muted)", maxWidth: 500, marginBottom: 32 }}>
              International package forwarding company. Get your favorite products delivered from the EU, US, UK or Asia to your doorstep — fast, transparent, no surprise fees.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
              <a href="http://127.0.0.1:3000/signin" className="dp-btn dp-btn-primary" style={{ padding: "14px 22px", fontSize: 15 }}>
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#calculator" className="dp-btn dp-btn-ghost" style={{ padding: "14px 20px", fontSize: 15 }}>Check shipping rates</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 12, color: "var(--dp-muted)" }}>
              <span style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>We ship with</span>
              <div style={{ display: "flex", gap: 14, fontFamily: "var(--dp-mono)", fontWeight: 500, fontSize: 12 }}>
                {["DHL", "FedEx", "UPS", "EMS", "PostNord"].map(c => (
                  <span key={c} style={{ padding: "5px 9px", border: "1px solid var(--dp-line)", borderRadius: 6, color: "var(--dp-ink-2)" }}>{c}</span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "var(--dp-muted)" }}>
              <span style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>Pay with confidence</span>
              <div style={{ display: "flex", gap: 8 }}>
                {["VISA", "MC", "PayPal", "BTC", "Bank"].map(p => (
                  <span key={p} style={{ padding: "4px 8px", border: "1px solid var(--dp-line)", borderRadius: 5, fontSize: 11, fontFamily: "var(--dp-mono)", fontWeight: 500 }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <DPGlobe variant={tweaks.heroVisual} accent="var(--dp-accent)" />
            <div style={{ position: "absolute", top: "8%", left: "-2%", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 12, padding: "10px 14px", display: "flex", gap: 10, alignItems: "center", boxShadow: "0 8px 24px rgba(20,15,10,0.06)", animation: "dp-float-up 0.7s 0.3s both" }}>
              <span style={{ fontSize: 18 }}>📦</span>
              <div><div style={{ fontSize: 11, color: "var(--dp-muted)" }}>From New York</div><div style={{ fontSize: 13, fontWeight: 500 }}>Nike Air · 1.2 kg</div></div>
            </div>
            <div style={{ position: "absolute", top: "62%", left: "-6%", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 12, padding: "10px 14px", display: "flex", gap: 10, alignItems: "center", boxShadow: "0 8px 24px rgba(20,15,10,0.06)", animation: "dp-float-up 0.7s 0.6s both" }}>
              <span style={{ fontSize: 18 }}>🚚</span>
              <div><div style={{ fontSize: 11, color: "var(--dp-accent)" }}>In transit</div><div style={{ fontSize: 13, fontWeight: 500 }}>3 packages · Lagos</div></div>
            </div>
            <div style={{ position: "absolute", top: "70%", right: "-2%", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 12, padding: "10px 14px", display: "flex", gap: 10, alignItems: "center", boxShadow: "0 8px 24px rgba(20,15,10,0.06)", animation: "dp-float-up 0.7s 1.2s both" }}>
              <span style={{ fontSize: 18 }}>✓</span>
              <div><div style={{ fontSize: 11, color: "var(--dp-muted)" }}>Delivered</div><div style={{ fontSize: 13, fontWeight: 500 }}>+$284 saved</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Retailer marquee */}
      <section style={{ padding: "32px 0 56px", borderTop: "1px solid var(--dp-line)", borderBottom: "1px solid var(--dp-line)" }}>
        <div style={{ textAlign: "center", marginBottom: 24, fontSize: 12, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.18em" }}>
          Shop from the world's biggest stores
        </div>
        <DPRetailerStrip />
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="dp-section">
        <div className="dp-container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div className="dp-eyebrow-h">Services we offer</div>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 68px)" }}>
              Shop the world, <em style={{ color: "var(--dp-accent)" }}>ship with ease</em>.
            </h2>
            <p style={{ marginTop: 16, fontSize: 17, color: "var(--dp-muted)", maxWidth: 580, lineHeight: 1.55 }}>
              Discover the freedom to shop from any store worldwide and have your packages delivered to your doorstep.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <ServiceCard icon="🛍️" title="Shop for Me Service" desc="Shop globally, ship effortlessly. Use your virtual address at checkout — Amazon, eBay, Nike, ASOS — anywhere that won't ship to you. We receive, repack and forward to your door." cta="Get an address" />
            <ServiceCard icon="🤖" title="Buy for Me Service" badge="NEW" desc="Can't shop internationally? Our 'Buy for Me' service breaks barriers — we purchase on your behalf from stores that don't ship to your country or accept your payment. We handle payment, shipping and delivery." cta="Request a buy" />
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section id="locations" className="dp-section" style={{ background: "var(--dp-paper-2)" }}>
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 48 }}>
            <div>
              <div className="dp-eyebrow-h">Where we are</div>
              <h2 style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}>
                Every continent. <em style={{ color: "var(--dp-accent)" }}>60+ countries</em>.
              </h2>
            </div>
            <p style={{ fontSize: 16, color: "var(--dp-muted)", lineHeight: 1.55 }}>
              Even in regions where no other forwarder operates, we've got you covered. From bustling cities to remote destinations — your favorite products reach your doorstep.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
            {[
              ["🇺🇸","USA"],["🇬🇧","UK"],["🇩🇪","Germany"],["🇨🇳","China"],["🇯🇵","Japan"],["🇹🇷","Turkey"],
              ["🇮🇹","Italy"],["🇫🇷","France"],["🇳🇴","Norway"],["🇩🇰","Denmark"],["🇸🇪","Sweden"],["🇫🇮","Finland"],
              ["🇳🇱","Netherlands"],["🇧🇪","Belgium"],["🇧🇬","Bulgaria"],["🇷🇸","Serbia"],["🇺🇦","Ukraine"],["🇦🇪","UAE"],
              ["🇹🇼","Taiwan"],["🇻🇳","Vietnam"],["🇰🇷","Korea"],["🇵🇱","Poland"],["🇪🇸","Spain"],["🇨🇦","Canada"],
            ].map(([f,n]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 10 }}>
                <span style={{ fontSize: 20 }}>{f}</span>
                <span style={{ fontSize: 13 }}>{n}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <a href="locations.html" className="dp-tlink" style={{ fontSize: 14 }}>See all 60+ countries →</a>
          </div>
        </div>
      </section>

      {/* ═══ DELIVERED TODAY ═══ */}
      <section className="dp-section">
        <div className="dp-container">
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 48, gap: 32 }}>
            <div>
              <div className="dp-eyebrow-h">Delivered today</div>
              <h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)", maxWidth: 720 }}>
                Fashion finds, tech treasures — <em style={{ color: "var(--dp-accent)" }}>we forward it all</em>.
              </h2>
            </div>
            <a href="#" className="dp-btn dp-btn-ghost">View live feed</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { icon:"👟", item:"Nike Pegasus 41", store:"nike.com", from:"🇺🇸", to:"🇳🇬", w:"1.2 kg", price:"$38" },
              { icon:"📱", item:"iPhone 16 case", store:"Amazon", from:"🇺🇸", to:"🇰🇪", w:"0.3 kg", price:"$14" },
              { icon:"👜", item:"Louis Vuitton wallet", store:"FarFetch", from:"🇮🇹", to:"🇦🇪", w:"0.8 kg", price:"€42" },
              { icon:"💄", item:"Sephora haul", store:"Sephora", from:"🇫🇷", to:"🇪🇬", w:"2.1 kg", price:"€56" },
              { icon:"🎮", item:"Nintendo Switch", store:"Best Buy", from:"🇺🇸", to:"🇿🇦", w:"1.4 kg", price:"$48" },
              { icon:"⌚", item:"Casio G-Shock", store:"Rakuten", from:"🇯🇵", to:"🇲🇦", w:"0.5 kg", price:"¥4,200" },
              { icon:"👗", item:"ASOS dress", store:"ASOS", from:"🇬🇧", to:"🇬🇭", w:"0.4 kg", price:"£18" },
              { icon:"🎧", item:"Sony WH-1000XM5", store:"Argos", from:"🇬🇧", to:"🇸🇦", w:"0.9 kg", price:"£24" },
            ].map((p, i) => (
              <div key={i} style={{ background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", padding: 18 }}>
                <div style={{ width: "100%", aspectRatio: "1", background: "var(--dp-paper-2)", borderRadius: "var(--dp-radius-sm)", display: "grid", placeItems: "center", marginBottom: 14, fontSize: 56 }}>{p.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{p.item}</div>
                <div style={{ fontSize: 12, color: "var(--dp-muted)", marginBottom: 10 }}>{p.store} · {p.w}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span>{p.from}</span><span style={{ color: "var(--dp-muted)" }}>→</span><span>{p.to}</span>
                  </span>
                  <span style={{ color: "var(--dp-accent)", fontWeight: 500 }}>{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — WHAT/HOW/WHEN/WHERE ═══ */}
      <section id="how" className="dp-section" style={{ background: "var(--dp-ink)", color: "var(--dp-paper)" }}>
        <div className="dp-container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}><span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.3)" }}></span>How it works</div>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "var(--dp-paper)" }}>
              Four steps. <em style={{ color: "var(--dp-accent)" }}>Zero friction.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.08)" }}>
            {[
              { k: "WHAT",  t: "you need to do",     b: "Fill out a simple request form with your item URL, size, color and quantity. Need help buying? Pick 'Buy for Me' and we handle the purchase." },
              { k: "HOW",   t: "pricing works",      b: "Receive a personalized offer that includes shipping and service fees up front. You're in control — accept or decline." },
              { k: "WHEN",  t: "to choose shipping", b: "Ship to our forwarding address or use Buy for Me. Once received, access photos, consolidation and repacking to save on shipping." },
              { k: "WHERE", t: "your parcel goes",   b: "We ship directly to your international address with tracking and notifications. Sit back and enjoy seamless shopping." },
            ].map((s, i) => (
              <div key={s.k} style={{ padding: "32px 28px", background: "var(--dp-ink)" }}>
                <div style={{ fontFamily: "var(--dp-display)", fontSize: 56, color: "var(--dp-accent)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 16 }}>{s.k}</div>
                <h3 style={{ fontSize: 18, color: "var(--dp-paper)", marginBottom: 14, fontFamily: "var(--dp-sans)", letterSpacing: "-0.01em", fontWeight: 500 }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ═══ */}
      <section className="dp-section">
        <div className="dp-container">
          <div style={{ marginBottom: 56, maxWidth: 760 }}>
            <div className="dp-eyebrow-h">Why Forward Solutions</div>
            <h2 style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}>
              Reshipping that <em style={{ color: "var(--dp-accent)" }}>truly goes beyond borders</em>.
            </h2>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--dp-muted)", lineHeight: 1.55 }}>
              Free storage, expert repackaging, cheap reshipping — covering 143 countries. Your trusted partner for cost-effective international shipping.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--dp-line)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", overflow: "hidden" }}>
            {[
              { i:"🌍", t:"Global residential reach",  b:"Forwarding addresses in hard-to-find countries — Norway, Denmark, Taiwan, Vietnam, UAE, Belgium, Bulgaria, Serbia, Ukraine." },
              { i:"📦", t:"35-day free storage",       b:"Store purchases up to 35 days. Consolidate multiple shipments into one package and save." },
              { i:"🛒", t:"Dedicated personal shoppers", b:"Local shoppers in-country buy on your behalf — perfect for stores that block international cards." },
              { i:"🆓", t:"Free sign-up",              b:"Create an account, get a local delivery address. Zero upfront cost." },
              { i:"⚙️", t:"Tailored convenience",       b:"Free photos, custom declarations, flexible carriers — Royal Mail, EMS, Posten, PostNord and more." },
              { i:"⚠️", t:"Hazardous goods shipping",  b:"Safe shipment of electronics, batteries and liquids with expert customs declarations." },
              { i:"💳", t:"Flexible payment",          b:"Bank cards, PayPal, Bitcoin and bank transfers — pay how you prefer." },
              { i:"📮", t:"Repack & consolidate",      b:"Combine purchases from multiple stores into one shipment to slash shipping fees." },
              { i:"💬", t:"Reliable support",          b:"Email, phone or WhatsApp — every question answered promptly." },
            ].map(f => (
              <div key={f.t} style={{ padding: 28, background: "var(--dp-card)" }}>
                <div style={{ fontSize: 26, marginBottom: 14 }}>{f.i}</div>
                <h3 style={{ fontSize: 18, marginBottom: 10, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{f.t}</h3>
                <p style={{ fontSize: 13.5, color: "var(--dp-muted)", lineHeight: 1.55 }}>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO CAN BENEFIT ═══ */}
      <section className="dp-section" style={{ background: "var(--dp-paper-2)" }}>
        <div className="dp-container">
          <div className="dp-eyebrow-h">Who can benefit</div>
          <h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)", maxWidth: 760, marginBottom: 56 }}>
            Built for everyone who shops <em style={{ color: "var(--dp-accent)" }}>across borders</em>.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { i:"🛍️", t:"Global Shoppers", b:"Purchase from international websites and get items delivered home." },
              { i:"✈️", t:"Expatriates", b:"Access products from your home country, wherever life takes you." },
              { i:"🌐", t:"International Buyers", b:"Local addresses and tailored services for shopping abroad." },
              { i:"📦", t:"Dropshippers", b:"Source from international suppliers, consolidate to reduce costs." },
            ].map(p => (
              <div key={p.t} style={{ padding: 24, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{p.i}</div>
                <h3 style={{ fontSize: 19, marginBottom: 8, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{p.t}</h3>
                <p style={{ fontSize: 13.5, color: "var(--dp-muted)", lineHeight: 1.55 }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALCULATOR ═══ */}
      <section id="calculator" className="dp-section">
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="dp-eyebrow-h">Quick estimate</div>
            <h2 style={{ fontSize: "clamp(36px, 4.4vw, 60px)", marginBottom: 20 }}>
              Live shipping <em style={{ color: "var(--dp-accent)" }}>calculator</em>.
            </h2>
            <p style={{ fontSize: 17, color: "var(--dp-muted)", lineHeight: 1.55, maxWidth: 460, marginBottom: 28 }}>
              Pick origin, destination and weight. We'll quote you instantly — including duties, insurance and our negotiated carrier rates. No sign-up required.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
              {[
                "Real-time rates from DHL, FedEx, UPS, EMS",
                "Pre-cleared customs and duties (no door surprises)",
                "Express, standard or economy speeds",
              ].map(x => (
                <li key={x} style={{ display: "flex", gap: 10, fontSize: 14 }}>
                  <span style={{ color: "var(--dp-accent)" }}>✓</span>{x}
                </li>
              ))}
            </ul>
          </div>
          <DPCountryPicker />
        </div>
      </section>

      {/* ═══ SHOPPING CENTER ═══ */}
      <section className="dp-section" style={{ background: "var(--dp-ink)", color: "var(--dp-paper)" }}>
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Shopping center</div>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "var(--dp-paper)", marginBottom: 20 }}>
              Fast, reliable, affordable <em style={{ color: "var(--dp-accent)" }}>parcel forwarding</em>.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.55, maxWidth: 520, marginBottom: 32 }}>
              We bridge the gap between international stores and your doorstep — with parcel consolidation, repackaging and affordable reshipping.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 28 }}>
              {["Amazon","eBay","Nike","ASOS","SHEIN","Apple","Sephora","Target","Walmart","Macy's","Costco","Best Buy"].map(b => (
                <div key={b} style={{ padding: "12px 8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, textAlign: "center", fontSize: 12.5, color: "rgba(255,255,255,0.85)", fontFamily: "var(--dp-display)", letterSpacing: "-0.01em" }}>{b}</div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" className="dp-btn dp-btn-accent" style={{ padding: "14px 22px" }}>Explore brands →</a>
              <a href="#calculator" className="dp-btn" style={{ padding: "14px 20px", border: "1px solid rgba(255,255,255,0.2)", color: "var(--dp-paper)" }}>Calculate cost</a>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "1", borderRadius: 24, background: "linear-gradient(135deg, rgba(200,85,61,0.15), rgba(200,85,61,0.02))", border: "1px solid rgba(255,255,255,0.08)", padding: 32, display: "grid", placeItems: "center" }}>
            <DPGlobe variant="orbits" accent="var(--dp-accent)" />
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-eyebrow-h" style={{ display: "flex", justifyContent: "center" }}>What customers say</div>
          <h2 style={{ textAlign: "center", fontSize: "clamp(32px, 3.6vw, 48px)", maxWidth: 800, margin: "0 auto 56px" }}>
            From <em style={{ color: "var(--dp-accent)" }}>Lagos to Lyon</em>.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { q:"Cut my US-to-NG shipping bill in half. The consolidation alone pays for itself.", n:"Tunde A.", r:"Sneaker reseller · 🇳🇬 Nigeria", a:"T", s:5 },
              { q:"Most US sites won't ship here. Now I shop on Nike, Sephora and Apple like I live in Manhattan.", n:"Layla M.", r:"Student · 🇪🇬 Egypt", a:"L", s:5 },
              { q:"Repacking saves us 40% per shipment. Honestly, no contest.", n:"David O.", r:"Founder · 🇰🇪 Kenya", a:"D", s:5 },
            ].map((t, i) => (
              <figure key={i} style={{ padding: 28, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", margin: 0 }}>
                <div style={{ color: "var(--dp-accent)", marginBottom: 14, letterSpacing: 2 }}>{"★".repeat(t.s)}</div>
                <blockquote style={{ margin: 0, fontFamily: "var(--dp-display)", fontSize: 19, letterSpacing: "-0.015em", lineHeight: 1.4, marginBottom: 24 }}>"{t.q}"</blockquote>
                <figcaption style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--dp-accent)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--dp-display)", fontSize: 15 }}>{t.a}</div>
                  <div><div style={{ fontSize: 14, fontWeight: 500 }}>{t.n}</div><div style={{ fontSize: 12, color: "var(--dp-muted)" }}>{t.r}</div></div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: "center", display: "flex", justifyContent: "center", gap: 14, fontSize: 13, color: "var(--dp-muted)" }}>
            <span>Reviews on</span>
            {["Trustpilot","Google Reviews","Sitejabber"].map(p => (
              <span key={p} style={{ padding: "4px 10px", border: "1px solid var(--dp-line)", borderRadius: 6, fontFamily: "var(--dp-mono)", fontSize: 12 }}>{p} ★ 4.8</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST & SECURITY ═══ */}
      <section style={{ padding: "48px 40px", borderTop: "1px solid var(--dp-line)", borderBottom: "1px solid var(--dp-line)" }}>
        <div className="dp-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div style={{ fontSize: 12, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.14em" }}>Trusted & secure</div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
            {[
              { i:"🔒", l:"SSL Secure" },
              { i:"🛡️", l:"GDPR Compliant" },
              { i:"✓", l:"Verified by Trustpilot" },
              { i:"📦", l:"DHL Partner" },
              { i:"📦", l:"FedEx Partner" },
              { i:"📦", l:"UPS Partner" },
            ].map(b => (
              <div key={b.l} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 999, fontSize: 13 }}>
                <span>{b.i}</span><span>{b.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG TEASER ═══ */}
      <section className="dp-section">
        <div className="dp-container">
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 40, gap: 32 }}>
            <div>
              <div className="dp-eyebrow-h">From the blog</div>
              <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)" }}>
                Guides for <em style={{ color: "var(--dp-accent)" }}>borderless shoppers</em>.
              </h2>
            </div>
            <a href="resources.html" className="dp-btn dp-btn-ghost">All articles</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { tag:"Guide", t:"How to ship from USA to UAE", d:"Routes, duties and the cheapest carriers for the US-AE corridor.", time:"6 min" },
              { tag:"List",  t:"Top stores that don't ship internationally", d:"And exactly how to use Buy for Me to get around it.", time:"4 min" },
              { tag:"Guide", t:"Package consolidation explained", d:"Bundle 30 days of orders into one shipment. Save 30–80%.", time:"5 min" },
            ].map((a, i) => (
              <a key={i} href="#" style={{ display: "block", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", overflow: "hidden", background: "var(--dp-card)" }}>
                <div style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, var(--dp-paper-2), var(--dp-accent-soft))", display: "grid", placeItems: "center", fontSize: 48 }}>📰</div>
                <div style={{ padding: 22 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 12 }}>
                    <span>{a.tag}</span><span>{a.time}</span>
                  </div>
                  <h3 style={{ fontSize: 22, marginBottom: 10, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{a.t}</h3>
                  <p style={{ fontSize: 14, color: "var(--dp-muted)", lineHeight: 1.55 }}>{a.d}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ padding: "calc(120px * var(--dp-density)) 40px", background: "var(--dp-paper-2)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="dp-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }}></div>
        <div className="dp-container" style={{ position: "relative" }}>
          <h2 style={{ fontSize: "clamp(48px, 6vw, 96px)", letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: 24 }}>
            Shop the world.<br/><em style={{ color: "var(--dp-accent)" }}>We'll bring it home.</em>
          </h2>
          <p style={{ fontSize: 19, color: "var(--dp-muted)", maxWidth: 540, margin: "0 auto 32px" }}>Get your virtual address in 60 seconds. Free, forever.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <a href="http://127.0.0.1:3000/signin" className="dp-btn dp-btn-primary" style={{ padding: "16px 26px", fontSize: 16 }}>
              Start shopping borderless
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="services.html" className="dp-btn dp-btn-ghost" style={{ padding: "16px 22px", fontSize: 16 }}>See services</a>
          </div>
        </div>
      </section>

      <DPSiteFooter />
      <DPChatBubble />
    </div>
  );
}

function ServiceCard({ icon, title, badge, desc, cta }) {
  return (
    <div style={{ padding: 32, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <span style={{ fontSize: 36 }}>{icon}</span>
        <h3 style={{ fontSize: 28, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{title}</h3>
        {badge && <span style={{ padding: "3px 10px", background: "var(--dp-accent)", color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em" }}>{badge}</span>}
      </div>
      <p style={{ fontSize: 15, color: "var(--dp-muted)", lineHeight: 1.6, marginBottom: 24 }}>{desc}</p>
      <a href="#" className="dp-btn dp-btn-ghost" style={{ alignSelf: "flex-start" }}>{cta} →</a>
    </div>
  );
}

window.HomePage = HomePage;
