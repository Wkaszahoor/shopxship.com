// home.jsx — full home page rewritten from the brief.
// Top bar + sticky nav from dp-chrome. All sections per spec.

const REVIEWS = [
  { q: "Cut my US-to-NG shipping bill in half. The consolidation alone pays for itself.", n: "Tunde A.",  role: "Sneaker reseller",  iso: "ng", src: "Trustpilot",     s: 5 },
  { q: "Most US sites won't ship here. Now I shop on Nike, Sephora and Apple like I live in Manhattan.", n: "Layla M.",  role: "Student",          iso: "eg", src: "Google Reviews", s: 5 },
  { q: "Repacking saves us 40% per shipment. Honestly, no other forwarder comes close.",                  n: "David O.",  role: "Founder, Kenya",   iso: "ke", src: "Sitejabber",    s: 5 },
  { q: "Buy for Me got me items from stores that flat-out blocked my card. Absolute lifesaver.",          n: "Amara S.",  role: "Fashion buyer",    iso: "gh", src: "Trustpilot",     s: 5 },
  { q: "My parcel arrived faster than friends who ship from inside the US. Wild.",                        n: "Yuki T.",   role: "Tech enthusiast",  iso: "jp", src: "Google Reviews", s: 5 },
];

function ReviewCarousel() {
  const trackRef = React.useRef(null);

  const scroll = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.firstElementChild;
    const step = card ? card.offsetWidth + 20 : 300;
    t.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const srcColor = { "Trustpilot": "#00b67a", "Google Reviews": "#4285F4", "Sitejabber": "#ff6b24" };

  return (
    <div style={{ position: "relative" }}>
      <div ref={trackRef} className="dp-carousel-track">
        {REVIEWS.map((r, i) => (
          <figure key={i} className="dp-carousel-card dp-card-lift"
            style={{ margin: 0, padding: 28, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
              <span style={{ color: "#f5a623", letterSpacing: 2, fontSize: 16 }}>{"★".repeat(r.s)}</span>
              <span style={{ fontSize: 10, fontFamily: "var(--dp-mono)", padding: "3px 8px", borderRadius: 4, background: srcColor[r.src] + "18", color: srcColor[r.src], fontWeight: 600, letterSpacing: "0.05em" }}>{r.src}</span>
            </div>
            <blockquote style={{ margin: 0, fontFamily: "var(--dp-display)", fontSize: 18, letterSpacing: "-0.015em", lineHeight: 1.45, marginBottom: 24 }}>"{r.q}"</blockquote>
            <figcaption style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={`https://flagcdn.com/w40/${r.iso}.png`} alt="" width={28} height={20}
                style={{ borderRadius: 3, objectFit: "cover", flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{r.n}</div>
                <div style={{ fontSize: 12, color: "var(--dp-muted)" }}>{r.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <button onClick={() => scroll(-1)} aria-label="Previous reviews"
        style={{ position: "absolute", left: -22, top: "50%", transform: "translateY(-50%)", width: 42, height: 42, borderRadius: "50%", background: "var(--dp-card)", border: "1px solid var(--dp-line)", cursor: "pointer", display: "grid", placeItems: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.09)", color: "var(--dp-ink)", zIndex: 2 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button onClick={() => scroll(1)} aria-label="Next reviews"
        style={{ position: "absolute", right: -22, top: "50%", transform: "translateY(-50%)", width: 42, height: 42, borderRadius: "50%", background: "var(--dp-card)", border: "1px solid var(--dp-line)", cursor: "pointer", display: "grid", placeItems: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.09)", color: "var(--dp-ink)", zIndex: 2 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  );
}

function HomePage({ tweaks }) {
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="home" />

      {/* ═══ HERO ═══ */}
      <section className="dp-hero-section" style={{ position: "relative", padding: "calc(72px * var(--dp-density)) 40px calc(56px * var(--dp-density))", overflow: "hidden" }}>
        <div className="dp-container dp-hero-grid" style={{ gap: 64 }}>
          <div>
            <div className="dp-eyebrow" style={{ marginBottom: 28 }}>
              <span className="dot"></span>
              <span>International parcel forwarding · 60+ countries</span>
            </div>
            <h1 style={{ fontSize: "clamp(38px, 4.6vw, 72px)", lineHeight: 0.97, letterSpacing: "-0.04em", marginBottom: 28 }}>
              {tweaks.heroHeadline.split("\n").map((line, i, arr) => (
                <span key={i} style={{ display: "block", whiteSpace: "nowrap" }}>
                  {i === arr.length - 1
                    ? <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--dp-accent)" }}>{line}</em>
                    : <strong style={{ fontWeight: 800 }}>{line}</strong>}
                </span>
              ))}
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--dp-muted)", maxWidth: 500, marginBottom: 32 }}>
              International package forwarding company. Get your favorite products delivered from the EU, US, UK or Asia to your doorstep — fast, transparent, no surprise fees.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
              <a href="/signin" className="dp-btn dp-btn-primary" style={{ padding: "14px 22px", fontSize: 15 }}>
                Get started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#calculator" className="dp-btn dp-btn-ghost" style={{ padding: "14px 20px", fontSize: 15 }}>Check shipping rates</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--dp-muted)", whiteSpace: "nowrap" }}>We ship with</span>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <svg width="44" height="26" viewBox="0 0 44 26" aria-label="DHL" role="img" style={{ display:"block" }}>
                  <rect width="44" height="26" rx="5" fill="#D40511"/>
                  <text x="22" y="19" textAnchor="middle" fill="#FECC00" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="2">DHL</text>
                </svg>
                <svg width="54" height="26" viewBox="0 0 54 26" aria-label="FedEx" role="img" style={{ display:"block" }}>
                  <rect width="54" height="26" rx="5" fill="#fff" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
                  <text x="27" y="19" textAnchor="middle" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif">
                    <tspan fill="#4D148C">Fed</tspan><tspan fill="#FF6200">Ex</tspan>
                  </text>
                </svg>
                <svg width="44" height="26" viewBox="0 0 44 26" aria-label="UPS" role="img" style={{ display:"block" }}>
                  <rect width="44" height="26" rx="5" fill="#351C15"/>
                  <text x="22" y="19" textAnchor="middle" fill="#FFB500" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="2">UPS</text>
                </svg>
                <svg width="44" height="26" viewBox="0 0 44 26" aria-label="EMS" role="img" style={{ display:"block" }}>
                  <rect width="44" height="26" rx="5" fill="#005DAA"/>
                  <text x="22" y="19" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="1">EMS</text>
                </svg>
                <svg width="64" height="26" viewBox="0 0 64 26" aria-label="PostNord" role="img" style={{ display:"block" }}>
                  <rect width="64" height="26" rx="5" fill="#E8430A"/>
                  <text x="32" y="19" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.3">PostNord</text>
                </svg>
              </div>
            </div>
            <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--dp-muted)", whiteSpace: "nowrap" }}>Pay with confidence</span>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <svg width="44" height="26" viewBox="0 0 44 26" aria-label="Visa" role="img" style={{ display:"block" }}>
                  <rect width="44" height="26" rx="5" fill="#1a1f71"/>
                  <text x="22" y="19" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="1.5">VISA</text>
                </svg>
                <svg width="44" height="26" viewBox="0 0 44 26" aria-label="Mastercard" role="img" style={{ display:"block" }}>
                  <rect width="44" height="26" rx="5" fill="#1a1a1a"/>
                  <circle cx="17" cy="13" r="7.5" fill="#eb001b"/>
                  <circle cx="27" cy="13" r="7.5" fill="#f79e1b" opacity="0.92"/>
                </svg>
                <svg width="44" height="26" viewBox="0 0 44 26" aria-label="PayPal" role="img" style={{ display:"block" }}>
                  <rect width="44" height="26" rx="5" fill="#003087"/>
                  <text x="22" y="18" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="800" fontSize="10" letterSpacing="0.3">
                    <tspan fill="#fff">Pay</tspan><tspan fill="#009cde">Pal</tspan>
                  </text>
                </svg>
                <svg width="44" height="26" viewBox="0 0 44 26" aria-label="Stripe" role="img" style={{ display:"block" }}>
                  <rect width="44" height="26" rx="5" fill="#635bff"/>
                  <text x="22" y="18" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.5">stripe</text>
                </svg>
                <svg width="26" height="26" viewBox="0 0 26 26" aria-label="Bitcoin" role="img" style={{ display:"block" }}>
                  <circle cx="13" cy="13" r="13" fill="#f7931a"/>
                  <text x="13" y="19" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700" fontFamily="system-ui,sans-serif">₿</text>
                </svg>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--dp-ink-2)" strokeWidth="1.5" strokeLinecap="round" aria-label="Bank transfer" role="img" style={{ display:"block" }}>
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3"/>
                  <path d="M5 10v11M9 10v11M12 10v11M15 10v11M19 10v11"/>
                </svg>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DPShopperHero accent="var(--dp-accent)" />
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
              <span className="dp-break-mobile">Shop the world,</span>
              <em style={{ color: "var(--dp-accent)" }}>ship with ease</em>.
            </h2>
            <p style={{ marginTop: 16, fontSize: 17, color: "var(--dp-muted)", maxWidth: 580, lineHeight: 1.55 }}>
              Discover the freedom to shop from any store worldwide and have your packages delivered to your doorstep.
            </p>
          </div>
          <div className="dp-grid-2" style={{ gap: 24 }}>
            <ServiceCard icon={<ShopIcon />} title="Shop for Me Service" desc="Shop globally, ship effortlessly. Use your virtual address at checkout — Amazon, eBay, Nike, ASOS — anywhere that won't ship to you. We receive, repack and forward to your door." cta="Get an address" />
            <ServiceCard icon={<BuyIcon />} title="Buy for Me Service" badge="NEW" desc="Can't shop internationally? Our 'Buy for Me' service breaks barriers — we purchase on your behalf from stores that don't ship to your country or accept your payment. We handle payment, shipping and delivery." cta="Request a buy" />
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section id="locations" className="dp-section" style={{ background: "var(--dp-paper-2)" }}>
        <div className="dp-container">
          <div className="dp-grid-2" style={{ gap: 64, alignItems: "center", marginBottom: 48 }}>
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
          <div className="dp-grid-flags" style={{ gap: 8 }}>
            {[
              ["us","USA"],["gb","UK"],["de","Germany"],["cn","China"],["jp","Japan"],["tr","Turkey"],
              ["it","Italy"],["fr","France"],["no","Norway"],["dk","Denmark"],["se","Sweden"],["fi","Finland"],
              ["nl","Netherlands"],["be","Belgium"],["bg","Bulgaria"],["rs","Serbia"],["ua","Ukraine"],["ae","UAE"],
              ["tw","Taiwan"],["vn","Vietnam"],["kr","Korea"],["pl","Poland"],["es","Spain"],["ca","Canada"],
            ].map(([code,n]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 10 }}>
                <img src={`https://flagcdn.com/w40/${code}.png`} alt={n} width={24} height={16} style={{ borderRadius: 2, objectFit: "cover", flexShrink: 0 }} loading="lazy" />
                <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{n}</span>
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
          <div className="dp-grid-4" style={{ gap: 16 }}>
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
              <div key={i} className="dp-card-lift" style={{ background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", padding: 18 }}>
                <div style={{ width: "100%", aspectRatio: "1", background: "var(--dp-paper-2)", borderRadius: "var(--dp-radius-sm)", display: "grid", placeItems: "center", marginBottom: 14, fontSize: 56 }}>{p.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.item}</div>
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
      <section id="how" className="dp-section" style={{ background: "#0ea5e9", color: "#fff" }}>
        <div className="dp-container">
          <div style={{ maxWidth: 720, marginBottom: 64 }}>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.9)", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}><span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.5)" }}></span>How it works</div>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "#fff" }}>
              Four steps. <em style={{ color: "var(--dp-accent)" }}>Zero friction.</em>
            </h2>
          </div>
          <div className="dp-grid-4 dp-steps-grid" style={{ gap: 1, background: "rgba(255,255,255,0.25)" }}>
            {[
              { k: "WHAT",  t: "you need to do",     b: "Fill out a simple request form with your item URL, size, color and quantity. Need help buying? Pick 'Buy for Me' and we handle the purchase." },
              { k: "HOW",   t: "pricing works",      b: "Receive a personalized offer that includes shipping and service fees up front. You're in control — accept or decline." },
              { k: "WHEN",  t: "to choose shipping", b: "Ship to our forwarding address or use Buy for Me. Once received, access photos, consolidation and repacking to save on shipping." },
              { k: "WHERE", t: "your parcel goes",   b: "We ship directly to your international address with tracking and notifications. Sit back and enjoy seamless shopping." },
            ].map((s, i) => (
              <div key={s.k} style={{ padding: "32px 28px", background: "#0ea5e9" }}>
                <div style={{ fontFamily: "var(--dp-display)", fontSize: 56, color: "#fff700", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 16 }}>{s.k}</div>
                <h3 style={{ fontSize: 18, color: "#fff", marginBottom: 14, fontFamily: "var(--dp-sans)", letterSpacing: "-0.01em", fontWeight: 500 }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.92)", lineHeight: 1.55 }}>{s.b}</p>
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
          <div className="dp-grid-3" style={{ gap: 1, background: "var(--dp-line)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", overflow: "hidden" }}>
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
              <div key={f.t} className="dp-card-lift" style={{ padding: 28, background: "var(--dp-card)" }}>
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
          <div className="dp-grid-4" style={{ gap: 20 }}>
            {[
              { i:"🛍️", t:"Global Shoppers", b:"Purchase from international websites and get items delivered home." },
              { i:"✈️", t:"Expatriates", b:"Access products from your home country, wherever life takes you." },
              { i:"🌐", t:"International Buyers", b:"Local addresses and tailored services for shopping abroad." },
              { i:"📦", t:"Dropshippers", b:"Source from international suppliers, consolidate to reduce costs." },
            ].map(p => (
              <div key={p.t} className="dp-card-lift" style={{ padding: 24, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)" }}>
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
      <section className="dp-section" style={{ background: "#0ea5e9", color: "#fff" }}>
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "#fff", fontWeight: 600, marginBottom: 16 }}>Shopping center</div>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "#fff", marginBottom: 20 }}>
              Fast, reliable, affordable <em style={{ color: "var(--dp-accent)" }}>parcel forwarding</em>.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.92)", lineHeight: 1.55, maxWidth: 520, marginBottom: 32 }}>
              We bridge the gap between international stores and your doorstep — with parcel consolidation, repackaging and affordable reshipping.
            </p>
            <div className="dp-grid-4" style={{ gap: 8, marginBottom: 28 }}>
              {["Amazon","eBay","Nike","ASOS","SHEIN","Apple","Sephora","Target","Walmart","Macy's","Costco","Best Buy"].map(b => (
                <div key={b} style={{ padding: "10px 8px", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ background: RETAILER_LOGOS[b] ? RETAILER_LOGOS[b].bg : "#333", borderRadius: 6, padding: "5px 12px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 36 }}>
                    <img src={RETAILER_LOGOS[b] && RETAILER_LOGOS[b].src} alt={b} height={22} style={{ objectFit: "contain", maxWidth: 80, display: "block", filter: "brightness(0) invert(1)" }} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" className="dp-btn dp-btn-accent" style={{ padding: "14px 22px" }}>Explore brands →</a>
              <a href="#calculator" className="dp-btn" style={{ padding: "14px 20px", border: "1px solid rgba(255,255,255,0.5)", color: "#fff" }}>Calculate cost</a>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "1", borderRadius: 24, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", padding: 32, display: "grid", placeItems: "center" }}>
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
          <ReviewCarousel />
          {/* Platform rating badges */}
          <div style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            {[
              {
                name: "Trustpilot",
                score: "4.8",
                count: "1,240 reviews",
                href: "https://www.trustpilot.com/review/deliveringparcel.com",
                logo: (
                  <svg width="26" height="26" viewBox="0 0 24 24" aria-label="Trustpilot">
                    <path fill="#00b67a" d="M12 2l2.09 6.41H21l-5.47 3.97 2.09 6.41L12 14.82l-5.62 4.07 2.09-6.41L2.97 8.41H9.91z"/>
                  </svg>
                ),
                accent: "#00b67a",
              },
              {
                name: "Google Reviews",
                score: "4.9",
                count: "382 reviews",
                href: "https://g.page/r/deliveringparcel/review",
                logo: (
                  <svg width="26" height="26" viewBox="0 0 24 24" aria-label="Google">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                ),
                accent: "#4285F4",
              },
              {
                name: "Sitejabber",
                score: "4.7",
                count: "618 reviews",
                href: "https://www.sitejabber.com/reviews/deliveringparcel.com",
                logo: (
                  <svg width="26" height="26" viewBox="0 0 32 32" aria-label="Sitejabber">
                    <rect width="32" height="32" rx="6" fill="#ff6b24"/>
                    <text x="16" y="22" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="system-ui,sans-serif">SJ</text>
                  </svg>
                ),
                accent: "#ff6b24",
              },
            ].map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 22px", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 14, textDecoration: "none", color: "inherit", minWidth: 210, transition: "box-shadow 0.18s, transform 0.18s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.09)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ flexShrink: 0 }}>{p.logo}</div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{p.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "#f5a623", fontSize: 15, letterSpacing: 1 }}>★★★★★</span>
                    <strong style={{ fontSize: 16, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{p.score}</strong>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--dp-muted)", marginTop: 2 }}>{p.count}</div>
                </div>
              </a>
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
          <div className="dp-grid-3" style={{ gap: 20 }}>
            {[
              { tag:"Guide", t:"How to ship from USA to UAE", d:"Routes, duties and the cheapest carriers for the US-AE corridor.", time:"6 min" },
              { tag:"List",  t:"Top stores that don't ship internationally", d:"And exactly how to use Buy for Me to get around it.", time:"4 min" },
              { tag:"Guide", t:"Package consolidation explained", d:"Bundle 30 days of orders into one shipment. Save 30–80%.", time:"5 min" },
            ].map((a, i) => (
              <a key={i} href="#" className="dp-card-lift" style={{ display: "block", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", overflow: "hidden", background: "var(--dp-card)" }}>
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
            <a href="/signin" className="dp-btn dp-btn-primary" style={{ padding: "16px 26px", fontSize: 16 }}>
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

function ShopIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {/* Handle */}
      <path d="M18 23 C18 13 38 13 38 23"
        stroke="var(--dp-ink)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Bag body */}
      <rect className="svc-shop-bag" x="10" y="23" width="36" height="26" rx="7"
        fill="var(--dp-accent-soft)" stroke="var(--dp-ink)" strokeWidth="2" />
      {/* Subtle inner stripe */}
      <line x1="10" y1="30" x2="46" y2="30" stroke="var(--dp-accent)" strokeWidth="1" opacity="0.22" />
      {/* Checkmark */}
      <g className="svc-shop-check">
        <path d="M20 37 L25 42 L36 30"
          stroke="var(--dp-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      {/* Star — hidden, pops in on hover */}
      <path className="svc-shop-star"
        d="M45 12 L46.3 16.2 L50.5 17 L46.3 17.8 L45 22 L43.7 17.8 L39.5 17 L43.7 16.2 Z"
        fill="var(--dp-accent)" />
      {/* Dot sparkle — hidden, pops in on hover */}
      <circle className="svc-shop-dot" cx="12" cy="43" r="2.8" fill="var(--dp-accent)" />
    </svg>
  );
}

function BuyIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {/* Handle pole */}
      <path d="M6 10 L13 10 L22 36 H44"
        stroke="var(--dp-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Cart basket */}
      <path className="svc-cart-body"
        d="M15 18 H46 L41 34 H20 Z"
        fill="var(--dp-accent-soft)" stroke="var(--dp-ink)" strokeWidth="2" strokeLinejoin="round" />
      {/* Items inside basket — appear on hover */}
      <g className="svc-cart-items">
        <rect x="22" y="21" width="5" height="9" rx="1.5" fill="var(--dp-accent)" opacity="0.75" />
        <rect x="29" y="20" width="5" height="10" rx="1.5" fill="var(--dp-accent)" />
        <rect x="36" y="22" width="4" height="8" rx="1.5" fill="var(--dp-accent)" opacity="0.65" />
      </g>
      {/* Left wheel */}
      <g className="svc-cart-wheel-l" style={{ transformOrigin: "23px 43px" }}>
        <circle cx="23" cy="43" r="5" fill="var(--dp-accent-soft)" stroke="var(--dp-ink)" strokeWidth="2" />
        <line x1="23" y1="39" x2="23" y2="47" stroke="var(--dp-ink)" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="19" y1="43" x2="27" y2="43" stroke="var(--dp-ink)" strokeWidth="1.3" strokeLinecap="round" />
      </g>
      {/* Right wheel */}
      <g className="svc-cart-wheel-r" style={{ transformOrigin: "40px 43px" }}>
        <circle cx="40" cy="43" r="5" fill="var(--dp-accent-soft)" stroke="var(--dp-ink)" strokeWidth="2" />
        <line x1="40" y1="39" x2="40" y2="47" stroke="var(--dp-ink)" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="36" y1="43" x2="44" y2="43" stroke="var(--dp-ink)" strokeWidth="1.3" strokeLinecap="round" />
      </g>
      {/* Star — hidden, bursts in on hover */}
      <path className="svc-cart-star"
        d="M50 9 L51.2 13 L55 14 L51.2 15 L50 19 L48.8 15 L45 14 L48.8 13 Z"
        fill="var(--dp-accent)" />
    </svg>
  );
}

function ServiceCard({ icon, title, badge, desc, cta }) {
  return (
    <div className="dp-card-lift" style={{ padding: 32, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ width: 72, height: 72, borderRadius: 18, background: "var(--dp-paper-2)", border: "1px solid var(--dp-line)", display: "grid", placeItems: "center", marginBottom: 18 }}>
          {icon}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <h3 style={{ fontSize: 22, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{title}</h3>
          {badge && <span style={{ padding: "3px 10px", background: "var(--dp-accent)", color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em" }}>{badge}</span>}
        </div>
      </div>
      <p style={{ fontSize: 15, color: "var(--dp-muted)", lineHeight: 1.6, marginBottom: 24 }}>{desc}</p>
      <a href="#" className="dp-btn dp-btn-ghost" style={{ alignSelf: "flex-start" }}>{cta} →</a>
    </div>
  );
}

window.HomePage = HomePage;
