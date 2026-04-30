// pages.jsx — How It Works, Services, Locations, Resources hub.

// ── Reusable hero ──
function PageHero({ eyebrow, title, lede }) {
  return (
    <section style={{ padding: "calc(72px * var(--dp-density)) 40px calc(48px * var(--dp-density))" }}>
      <div className="dp-container" style={{ maxWidth: 880 }}>
        <div className="dp-eyebrow" style={{ marginBottom: 24 }}><span className="dot"></span><span>{eyebrow}</span></div>
        <h1 style={{ fontSize: "clamp(44px, 5.6vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.035em", marginBottom: 20 }}>
          {title.split("|").map((p, i, a) => i === a.length - 1
            ? <em key={i} style={{ fontStyle: "italic", color: "var(--dp-accent)", fontWeight: 300 }}>{p}</em>
            : <span key={i}>{p}</span>)}
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--dp-muted)", maxWidth: 640 }}>{lede}</p>
      </div>
    </section>
  );
}

// ═══ HOW IT WORKS PAGE ═══
function HowItWorksPage() {
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="how" />
      <PageHero eyebrow="How it works" title="Four steps from checkout to |doorstep." lede="The whole journey, end to end. From getting your first virtual address to unboxing on your sofa — here's exactly how Forward Solutions works." />

      <section className="dp-section" style={{ paddingTop: 0 }}>
        <div className="dp-container">
          {[
            { k:"WHAT",  t:"You need to do",     b:"Sign up free in 60 seconds and instantly receive virtual addresses in every country we serve. Fill out a simple request form with your item URL, size, color and quantity. Need help buying? Pick 'Buy for Me' and we handle the purchase — including payment.", img:"📝" },
            { k:"HOW",   t:"Pricing works",      b:"Receive a personalized offer that includes shipping, duties and service fees up front. Our negotiated DHL/FedEx/UPS rates mean up to 80% off public pricing. You're in control — accept or decline, no obligations.", img:"💸" },
            { k:"WHEN",  t:"To choose shipping", b:"Ship to our forwarding address (or use Buy for Me). Once your package hits our warehouse, you get free photos, optional consolidation and repacking — bundle 30 days of orders to slash billable weight.", img:"📦" },
            { k:"WHERE", t:"Your parcel goes",   b:"We ship directly to your international address with door-to-door tracking and real-time notifications. Express (3–6 days), Standard (7–12), or Economy (14–21). Customs pre-cleared. Sit back, enjoy seamless shopping.", img:"🌍" },
          ].map((s, i) => (
            <div key={s.k} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: 64, alignItems: "center", padding: "72px 0", borderTop: "1px solid var(--dp-line)" }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ fontFamily: "var(--dp-display)", fontSize: 84, color: "var(--dp-accent)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 16 }}>{s.k}</div>
                <h2 style={{ fontSize: 40, marginBottom: 16, fontFamily: "var(--dp-display)", letterSpacing: "-0.025em" }}>{s.t}</h2>
                <p style={{ fontSize: 17, color: "var(--dp-muted)", lineHeight: 1.55, maxWidth: 520 }}>{s.b}</p>
              </div>
              <div style={{ aspectRatio: "1", background: "var(--dp-paper-2)", border: "1px solid var(--dp-line)", borderRadius: 24, display: "grid", placeItems: "center", fontSize: 140, order: i % 2 === 0 ? 1 : 0 }}>{s.img}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="dp-section" style={{ background: "var(--dp-paper-2)" }}>
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="dp-eyebrow-h">Try it now</div>
            <h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>Get an instant <em style={{ color: "var(--dp-accent)" }}>quote</em>.</h2>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--dp-muted)", maxWidth: 460, lineHeight: 1.55 }}>No sign-up. Pick origin, destination and weight — we'll show you what shipping actually costs.</p>
          </div>
          <DPCountryPicker />
        </div>
      </section>

      <DPSiteFooter /><DPChatBubble />
    </div>
  );
}

// ═══ SERVICES PAGE ═══
function ServicesPage() {
  const services = [
    { i:"🛍️", t:"Shop for Me", d:"Use your virtual address at checkout — Amazon, eBay, Nike, anywhere. We receive, repack, forward to your door.", price:"Free address · pay only shipping" },
    { i:"🤖", t:"Buy for Me", badge:"NEW", d:"We purchase on your behalf from stores that won't take your card or ship to your country. Send a link, we handle it.", price:"4% service fee + shipping" },
    { i:"📦", t:"Consolidation", d:"Bundle 30 days of orders into one outbound shipment. Save 30–80% on shipping costs.", price:"Free with every account" },
    { i:"✂️", t:"Repacking", d:"We strip excess packaging and repack to cut billable weight in half.", price:"Free · default on every parcel" },
    { i:"📷", t:"Package photos", d:"Photos before, during and after repacking — uploaded the moment your parcel arrives.", price:"Free · unlimited" },
    { i:"⚠️", t:"Hazardous goods", d:"Safe shipment of electronics, batteries, liquids — with expert customs declarations.", price:"Quoted per item" },
    { i:"🛡️", t:"Insurance", d:"$100 coverage included. Top up to any value. Door-to-door claims handled.", price:"From $0 · upgrade as needed" },
    { i:"🚚", t:"Personal shopper", d:"Local in-country shoppers buy on your behalf — perfect for stores blocking foreign cards.", price:"From 4% on item value" },
  ];
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="services" />
      <PageHero eyebrow="What we do" title="Every service you need — |included." lede="Built to make borderless shopping effortless. Most of what competitors charge extra for is standard with us." />

      <section className="dp-section" style={{ paddingTop: 0 }}>
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--dp-line)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", overflow: "hidden" }}>
            {services.map(s => (
              <div key={s.t} style={{ background: "var(--dp-card)", padding: 32, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <span style={{ fontSize: 32 }}>{s.i}</span>
                  <h3 style={{ fontSize: 26, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{s.t}</h3>
                  {s.badge && <span style={{ padding: "3px 10px", background: "var(--dp-accent)", color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em" }}>{s.badge}</span>}
                </div>
                <p style={{ fontSize: 15, color: "var(--dp-muted)", lineHeight: 1.6, marginBottom: 20 }}>{s.d}</p>
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
                  <span style={{ color: "var(--dp-accent)", fontWeight: 500 }}>{s.price}</span>
                  <a href="#" className="dp-tlink">Learn more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-section" style={{ background: "var(--dp-ink)", color: "var(--dp-paper)" }}>
        <div className="dp-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "var(--dp-paper)", marginBottom: 20 }}>Pay only for what <em style={{ color: "var(--dp-accent)" }}>moves</em>.</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 580, margin: "0 auto 32px" }}>No subscription. No setup. 30 days free storage on every parcel.</p>
          <a href="index.html#calculator" className="dp-btn dp-btn-accent" style={{ padding: "16px 26px", fontSize: 16 }}>Calculate shipping →</a>
        </div>
      </section>

      <DPSiteFooter /><DPChatBubble />
    </div>
  );
}

// ═══ LOCATIONS PAGE ═══
function LocationsPage() {
  const regions = [
    { name:"North America", c:[["🇺🇸","United States","Oregon · Delaware · Florida"],["🇨🇦","Canada","Toronto · Vancouver"]] },
    { name:"United Kingdom & Ireland", c:[["🇬🇧","United Kingdom","London · Manchester"],["🇮🇪","Ireland","Dublin"]] },
    { name:"Europe", c:[["🇩🇪","Germany","Berlin · Hamburg"],["🇫🇷","France","Paris"],["🇮🇹","Italy","Milan"],["🇪🇸","Spain","Madrid"],["🇳🇱","Netherlands","Amsterdam"],["🇧🇪","Belgium","Brussels"],["🇵🇱","Poland","Warsaw"],["🇧🇬","Bulgaria","Sofia"],["🇷🇸","Serbia","Belgrade"],["🇺🇦","Ukraine","Kyiv"]] },
    { name:"Nordic", c:[["🇳🇴","Norway","Oslo"],["🇸🇪","Sweden","Stockholm"],["🇩🇰","Denmark","Copenhagen"],["🇫🇮","Finland","Helsinki"]] },
    { name:"Asia", c:[["🇨🇳","China","Shenzhen · Shanghai"],["🇯🇵","Japan","Tokyo · Osaka"],["🇰🇷","South Korea","Seoul"],["🇹🇼","Taiwan","Taipei"],["🇻🇳","Vietnam","Ho Chi Minh"],["🇸🇬","Singapore","Singapore"]] },
    { name:"Middle East & Africa", c:[["🇦🇪","UAE","Dubai"],["🇹🇷","Turkey","Istanbul"],["🇸🇦","Saudi Arabia","Riyadh"],["🇿🇦","South Africa","Johannesburg"]] },
  ];
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="locations" />
      <PageHero eyebrow="Where we are" title="Virtual addresses in |60+ countries." lede="From Norway to Vietnam, we've built reach in places no other forwarder operates. Pick your hub — start shopping locally, ship globally." />

      <section style={{ padding: "0 40px calc(64px * var(--dp-density))" }}>
        <div className="dp-container">
          <div style={{ aspectRatio: "2/1", background: "var(--dp-paper-2)", borderRadius: 24, padding: 24, position: "relative", overflow: "hidden", border: "1px solid var(--dp-line)" }}>
            <DPWorldMap accent="var(--dp-accent)" />
          </div>
        </div>
      </section>

      <section className="dp-section" style={{ paddingTop: 0 }}>
        <div className="dp-container">
          {regions.map(r => (
            <div key={r.name} style={{ paddingTop: 48, paddingBottom: 32, borderTop: "1px solid var(--dp-line)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 48 }}>
                <h2 style={{ fontSize: 32, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em", position: "sticky", top: 120, alignSelf: "start" }}>{r.name}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  {r.c.map(([flag, name, hubs]) => (
                    <a key={name} href="#" style={{ padding: 18, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 12, display: "flex", gap: 14, alignItems: "center" }}>
                      <span style={{ fontSize: 28 }}>{flag}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 500 }}>{name}</div>
                        <div style={{ fontSize: 12, color: "var(--dp-muted)" }}>{hubs}</div>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--dp-muted)" }}><path d="M9 18l6-6-6-6"/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DPSiteFooter /><DPChatBubble />
    </div>
  );
}

// ═══ RESOURCES HUB (about + blog + contact, tabbed) ═══
function ResourcesPage() {
  const [tab, setTab] = React.useState("about");
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="resources" />
      <PageHero eyebrow="Resources" title="Everything in |one place." lede="About the team behind Forward Solutions, guides for borderless shoppers, and the fastest way to reach a human." />

      <div style={{ borderTop: "1px solid var(--dp-line)", borderBottom: "1px solid var(--dp-line)", background: "var(--dp-paper-2)", position: "sticky", top: 88, zIndex: 10 }}>
        <div className="dp-container" style={{ display: "flex", gap: 32, padding: "0 40px" }}>
          {[["about","About us"],["blog","Blog"],["contact","Contact"]].map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              padding: "18px 0", border: "none", background: "transparent", cursor: "pointer",
              fontSize: 15, color: tab === k ? "var(--dp-ink)" : "var(--dp-muted)",
              borderBottom: `2px solid ${tab === k ? "var(--dp-accent)" : "transparent"}`,
              fontWeight: tab === k ? 500 : 400, fontFamily: "inherit",
            }}>{l}</button>
          ))}
        </div>
      </div>

      {tab === "about" && <AboutSection />}
      {tab === "blog" && <BlogSection />}
      {tab === "contact" && <ContactSection />}

      <DPSiteFooter /><DPChatBubble />
    </div>
  );
}

function AboutSection() {
  return (
    <>
      <section className="dp-section">
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="dp-eyebrow-h">Our story</div>
            <h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)", marginBottom: 20 }}>Built for shoppers who got <em style={{ color: "var(--dp-accent)" }}>locked out</em>.</h2>
            <p style={{ fontSize: 17, color: "var(--dp-muted)", lineHeight: 1.6, marginBottom: 16 }}>
              Forward Solutions started because shopping borderless shouldn't require a US passport. Our founders — frequent flyers between Lagos, Dubai and London — were tired of "we don't ship to your country" pop-ups and Western Union surcharges.
            </p>
            <p style={{ fontSize: 17, color: "var(--dp-muted)", lineHeight: 1.6 }}>
              We built the forwarder we wished existed: free virtual addresses in every major shopping hub, transparent pricing baked in, and a team that picks up the phone when something goes wrong.
            </p>
          </div>
          <div style={{ aspectRatio: "1", background: "var(--dp-paper-2)", borderRadius: 24, position: "relative", overflow: "hidden", border: "1px solid var(--dp-line)", display: "grid", placeItems: "center" }}>
            <DPGlobe variant="globe" accent="var(--dp-accent)" />
          </div>
        </div>
      </section>

      <section style={{ padding: "calc(64px * var(--dp-density)) 40px", background: "var(--dp-paper-2)" }}>
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[["10K+","Active shoppers"],["60+","Countries served"],["1.2M","Parcels delivered"],["$8.4M","Saved on shipping"]].map(([n, l]) => (
              <div key={l}>
                <div className="dp-stat-num">{n}</div>
                <div style={{ marginTop: 10, fontSize: 12, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.14em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-eyebrow-h">Our values</div>
          <h2 style={{ fontSize: "clamp(32px, 3.6vw, 48px)", maxWidth: 720, marginBottom: 48 }}>What we won't <em style={{ color: "var(--dp-accent)" }}>compromise</em> on.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { t:"Transparent pricing", b:"What you see is what you pay. No hidden duties at the door, no exchange-rate magic, no asterisks." },
              { t:"Real human support", b:"Email, WhatsApp, phone — and a real person under an hour. Always." },
              { t:"Treat parcels like ours", b:"Photos before & after. Repacked carefully. Insured. Tracked door-to-door." },
            ].map(v => (
              <div key={v.t} style={{ padding: 28, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)" }}>
                <h3 style={{ fontSize: 22, marginBottom: 12, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{v.t}</h3>
                <p style={{ fontSize: 14, color: "var(--dp-muted)", lineHeight: 1.6 }}>{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BlogSection() {
  const posts = [
    { tag:"Guide", t:"How to ship from USA to UAE", d:"Routes, duties and the cheapest carriers for the US-AE corridor.", time:"6 min", icon:"🚢" },
    { tag:"List",  t:"Top stores that don't ship internationally", d:"And exactly how to use Buy for Me to get around it.", time:"4 min", icon:"🛒" },
    { tag:"Guide", t:"Package consolidation explained", d:"Bundle 30 days of orders into one shipment. Save 30–80%.", time:"5 min", icon:"📦" },
    { tag:"Region",t:"Nordic parcel forwarding deep-dive", d:"Why Nordic addresses are gold for tax-savvy shoppers.", time:"7 min", icon:"🇳🇴" },
    { tag:"Region",t:"Europe forwarding addresses, ranked", d:"DE vs NL vs IT — which hub for which retailer.", time:"8 min", icon:"🇪🇺" },
    { tag:"How-to",t:"The ultimate guide to proxy shopping", d:"What proxy buying is, when to use it, what to avoid.", time:"9 min", icon:"🤖" },
  ];
  return (
    <>
      <section className="dp-section">
        <div className="dp-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
            {posts.slice(0, 2).map((a, i) => (
              <a key={i} href="#" style={{ display: "block", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", overflow: "hidden", background: "var(--dp-card)" }}>
                <div style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, var(--dp-paper-2), var(--dp-accent-soft))", display: "grid", placeItems: "center", fontSize: 80 }}>{a.icon}</div>
                <div style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 14 }}><span>{a.tag}</span><span>{a.time}</span></div>
                  <h3 style={{ fontSize: 28, marginBottom: 12, fontFamily: "var(--dp-display)", letterSpacing: "-0.025em" }}>{a.t}</h3>
                  <p style={{ fontSize: 15, color: "var(--dp-muted)", lineHeight: 1.55 }}>{a.d}</p>
                </div>
              </a>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {posts.slice(2).map((a, i) => (
              <a key={i} href="#" style={{ display: "block", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)", overflow: "hidden", background: "var(--dp-card)" }}>
                <div style={{ aspectRatio: "4/3", background: "var(--dp-paper-2)", display: "grid", placeItems: "center", fontSize: 48 }}>{a.icon}</div>
                <div style={{ padding: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}><span>{a.tag}</span><span>{a.time}</span></div>
                  <h3 style={{ fontSize: 17, marginBottom: 8, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{a.t}</h3>
                  <p style={{ fontSize: 13, color: "var(--dp-muted)", lineHeight: 1.5 }}>{a.d}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactSection() {
  return (
    <section className="dp-section">
      <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80 }}>
        <div>
          <div className="dp-eyebrow-h">Get in touch</div>
          <h2 style={{ fontSize: "clamp(36px, 4.4vw, 56px)", marginBottom: 24 }}>Talk to a <em style={{ color: "var(--dp-accent)" }}>human</em>.</h2>
          <p style={{ fontSize: 16, color: "var(--dp-muted)", lineHeight: 1.6, marginBottom: 32 }}>We answer every email under an hour during business hours. WhatsApp and phone available 24/7 for active shipments.</p>
          <div style={{ display: "grid", gap: 16 }}>
            {[
              { i:"✉️", l:"Email",     v:"hello@deliveringparcel.com" },
              { i:"💬", l:"WhatsApp",  v:"+44 20 1234 5678" },
              { i:"📞", l:"Phone",     v:"+1 (302) 555-0142" },
              { i:"🏢", l:"HQ",        v:"London · Wilmington · Lagos" },
            ].map(c => (
              <div key={c.l} style={{ display: "flex", gap: 14, padding: 16, border: "1px solid var(--dp-line)", borderRadius: 12, background: "var(--dp-card)", alignItems: "center" }}>
                <span style={{ fontSize: 22 }}>{c.i}</span>
                <div><div style={{ fontSize: 11, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{c.l}</div><div style={{ fontSize: 15, fontWeight: 500 }}>{c.v}</div></div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={e => e.preventDefault()} style={{ padding: 32, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)" }}>
          <div style={{ display: "grid", gap: 18 }}>
            <Field label="Your name"><input className="dp-input" placeholder="Layla M." /></Field>
            <Field label="Email"><input className="dp-input" type="email" placeholder="you@email.com" /></Field>
            <Field label="What's it about?">
              <select className="dp-input">
                <option>General question</option><option>Active shipment</option><option>Buy for Me request</option><option>Partnerships</option>
              </select>
            </Field>
            <Field label="Message"><textarea className="dp-input" rows="5" style={{ resize: "vertical", fontFamily: "inherit" }} placeholder="Tell us a bit about what you need…"></textarea></Field>
            <button className="dp-btn dp-btn-primary" style={{ justifyContent: "center", padding: "14px 22px" }}>Send message →</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 12, color: "var(--dp-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
      {children}
    </label>
  );
}

Object.assign(window, { HowItWorksPage, ServicesPage, LocationsPage, ResourcesPage });
