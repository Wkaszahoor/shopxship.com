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
  const [vis, setVis] = React.useState([false, false, false, false]);
  const refs = React.useRef([]);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const i = Number(e.target.dataset.hiw);
          setVis(v => { const n = [...v]; n[i] = true; return n; });
        }
      }),
      { threshold: 0.18 }
    );
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Animated visual panels — each returns JSX given animate:bool
  const visuals = [

    // ── Step 1: Virtual address cards fanning out ──
    (on) => (
      <div style={{ position: "relative", height: "100%", display: "grid", placeItems: "center", padding: 24 }}>
        <div style={{ position: "relative", width: 200, height: 180 }}>
          {[
            { iso:"us", label:"Portland, Oregon", sub:"United States",  rot: on ? -14 : 0, tx: on ? -28 : 0, bg:"#eef2ff", delay:"0s"   },
            { iso:"gb", label:"London, EC2",      sub:"United Kingdom", rot: 0,             tx: 0,            bg:"var(--dp-card)", delay:"0.12s" },
            { iso:"de", label:"Berlin, Mitte",    sub:"Germany",        rot: on ? 14 : 0,  tx: on ? 28 : 0,  bg:"#fff7ed", delay:"0.24s" },
          ].map((c, j) => (
            <div key={c.iso} style={{
              position:"absolute", top:"50%", left:"50%",
              width:170, marginLeft:-85, marginTop:-65,
              background: c.bg, border:"1px solid var(--dp-line)", borderRadius:14,
              padding:"14px 16px",
              boxShadow:"0 8px 28px rgba(0,0,0,0.10)",
              transform:`rotate(${c.rot}deg) translateX(${c.tx}px)`,
              transition:`transform 0.75s cubic-bezier(.34,1.56,.64,1) ${c.delay}, box-shadow 0.3s`,
              zIndex: j === 1 ? 3 : j === 0 ? 2 : 1,
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                <img src={`https://flagcdn.com/w40/${c.iso}.png`} width={22} height={15}
                  style={{ borderRadius:2, boxShadow:"0 1px 3px rgba(0,0,0,0.18)" }} alt={c.sub} />
                <span style={{ fontSize:9, color:"var(--dp-muted)", textTransform:"uppercase", letterSpacing:"0.12em" }}>Virtual Address</span>
              </div>
              <div style={{ fontSize:13, fontWeight:600, fontFamily:"var(--dp-mono)", letterSpacing:"-0.01em" }}>{c.label}</div>
              <div style={{ fontSize:11, color:"var(--dp-accent)", marginTop:4, fontWeight:500 }}>{c.sub} · Free</div>
            </div>
          ))}
        </div>
        <div style={{ position:"absolute", bottom:24, left:0, right:0, textAlign:"center", fontSize:11, color:"var(--dp-muted)", opacity: on ? 1 : 0, transition:"opacity 0.5s 0.6s" }}>
          60+ countries available instantly
        </div>
      </div>
    ),

    // ── Step 2: Price comparison bars ──
    (on) => (
      <div style={{ padding:"32px 28px", display:"flex", flexDirection:"column", gap:20, height:"100%", boxSizing:"border-box", justifyContent:"center" }}>
        <div style={{ fontSize:11, color:"var(--dp-muted)", textTransform:"uppercase", letterSpacing:"0.14em" }}>Cost comparison · same route</div>
        {[
          { label:"Public carrier rate", pct:100, val:"$124", dimColor:"rgba(100,100,100,0.12)", fillColor:"rgba(100,100,100,0.35)", accent:false, delay:"0.1s" },
          { label:"Forward Solutions",   pct:22,  val:"$28",  dimColor:"var(--dp-accent-soft)",  fillColor:"var(--dp-accent)",        accent:true,  delay:"0.35s" },
        ].map((row, j) => (
          <div key={j}>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:13, marginBottom:7, alignItems:"center" }}>
              <span style={{ color:"var(--dp-muted)" }}>{row.label}</span>
              <strong style={{ fontFamily:"var(--dp-mono)", color: row.accent ? "var(--dp-accent)" : "inherit", fontSize:15 }}>{row.val}</strong>
            </div>
            <div style={{ height:10, borderRadius:5, background:row.dimColor, overflow:"hidden" }}>
              <div style={{ height:"100%", borderRadius:5, background:row.fillColor,
                width: on ? `${row.pct}%` : "0%",
                transition:`width 1.1s cubic-bezier(0.4,0,0.2,1) ${row.delay}` }} />
            </div>
          </div>
        ))}
        <div style={{
          padding:"12px 16px", background:"var(--dp-accent-soft)", borderRadius:12,
          display:"flex", alignItems:"center", gap:10, marginTop:4,
          opacity: on ? 1 : 0, transform: on ? "none" : "translateY(12px)",
          transition:"opacity 0.5s ease 0.9s, transform 0.5s ease 0.9s",
        }}>
          <div style={{ width:28, height:28, borderRadius:"50%", background:"var(--dp-accent)", display:"grid", placeItems:"center", flexShrink:0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <span style={{ fontSize:13, color:"var(--dp-accent)", fontWeight:600, lineHeight:1.35 }}>Save up to 80% on every shipment — guaranteed upfront</span>
        </div>
      </div>
    ),

    // ── Step 3: Box consolidation ──
    (on) => (
      <div style={{ height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12, padding:28 }}>
        {/* Three incoming boxes */}
        <div style={{ display:"flex", gap:12 }}>
          {[0,1,2].map(j => (
            <div key={j} style={{
              width:56, height:56, borderRadius:12,
              background:"var(--dp-paper-2)", border:"1px solid var(--dp-line)",
              display:"grid", placeItems:"center",
              transform: on ? "none" : `translateY(${-24 + j*8}px) scale(0.8)`,
              opacity: on ? 1 : 0,
              transition:`transform 0.55s cubic-bezier(.34,1.56,.64,1) ${j*0.1}s, opacity 0.4s ${j*0.1}s`,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--dp-accent)" strokeWidth="1.6">
                <path d="M21 8l-3-4H6L3 8m18 0v12a1 1 0 01-1 1H4a1 1 0 01-1-1V8m18 0H3"/>
                <path d="M9 8v4h6V8" opacity="0.5"/>
              </svg>
            </div>
          ))}
        </div>
        {/* Arrow */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, opacity: on ? 1 : 0, transition:"opacity 0.4s 0.45s" }}>
          <div style={{ width:1, height:16, background:"var(--dp-line)" }} />
          <svg width="16" height="10" viewBox="0 0 16 10"><path d="M8 10L0 0h16z" fill="var(--dp-accent)" opacity="0.6"/></svg>
        </div>
        {/* Consolidated box */}
        <div style={{
          padding:"16px 24px", borderRadius:16,
          background:"var(--dp-ink)", color:"var(--dp-paper)",
          display:"flex", alignItems:"center", gap:14,
          transform: on ? "scale(1)" : "scale(0.72)",
          opacity: on ? 1 : 0,
          transition:"transform 0.65s cubic-bezier(.34,1.56,.64,1) 0.55s, opacity 0.4s 0.55s",
          boxShadow:"0 16px 40px rgba(0,0,0,0.2)",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--dp-accent)" strokeWidth="1.8">
            <path d="M21 8l-3-4H6L3 8m18 0v12a1 1 0 01-1 1H4a1 1 0 01-1-1V8m18 0H3"/>
            <path d="M9 8v4h6V8" opacity="0.6"/>
          </svg>
          <div>
            <div style={{ fontSize:11, opacity:0.55, textTransform:"uppercase", letterSpacing:"0.1em" }}>1 consolidated parcel</div>
            <div style={{ fontSize:15, fontWeight:700, marginTop:2, fontFamily:"var(--dp-display)" }}>–42% billable weight</div>
          </div>
        </div>
        <div style={{ fontSize:12, color:"var(--dp-muted)", textAlign:"center", marginTop:4, lineHeight:1.4, opacity: on ? 1 : 0, transition:"opacity 0.4s 0.9s" }}>
          Bundle up to 30 days of orders · Free
        </div>
      </div>
    ),

    // ── Step 4: Delivery route SVG ──
    (on) => (
      <div style={{ height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:24, gap:16 }}>
        <svg viewBox="0 0 260 160" style={{ width:"100%", maxWidth:280, overflow:"visible" }}>
          {/* Route arc */}
          <path d="M 30 120 Q 130 20 230 120" fill="none" stroke="var(--dp-line)" strokeWidth="1.5" strokeDasharray="5 4"/>
          <path d="M 30 120 Q 130 20 230 120" fill="none" stroke="var(--dp-accent)" strokeWidth="2.5"
            strokeDasharray="300" strokeLinecap="round"
            style={{ strokeDashoffset: on ? 0 : 300, transition:"stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s" }} />
          {/* Origin dot */}
          <circle cx="30" cy="120" r="6" fill="var(--dp-muted)" opacity="0.7"/>
          <text x="30" y="140" textAnchor="middle" fontSize="10" fill="var(--dp-muted)" fontFamily="system-ui">Warehouse</text>
          {/* Destination */}
          <circle cx="230" cy="120" r="9" fill="var(--dp-accent)"
            style={{ opacity: on ? 1 : 0, transform: on ? "scale(1)" : "scale(0)", transformOrigin:"230px 120px", transition:"opacity 0.35s 1.4s, transform 0.5s cubic-bezier(.34,1.56,.64,1) 1.4s" }}/>
          <text x="230" y="140" textAnchor="middle" fontSize="10" fill="var(--dp-accent)" fontFamily="system-ui" fontWeight="600">Your door</text>
          {/* Animated package */}
          {on && (
            <g style={{ offsetPath:"path('M 30 120 Q 130 20 230 120')", animation:"hiw-pkg 3s ease-in-out 1.6s infinite alternate" }}>
              <circle r="11" fill="var(--dp-card)" stroke="var(--dp-accent)" strokeWidth="2"/>
              <path d="M-5 0h10M0-5v10" stroke="var(--dp-accent)" strokeWidth="1.5" strokeLinecap="round"/>
            </g>
          )}
        </svg>
        {/* Speed options */}
        <div style={{ display:"flex", gap:8, width:"100%" }}>
          {[["Express","3–6 days","#c8553d"],["Standard","7–12 days","var(--dp-muted)"],["Economy","14–21 days","var(--dp-muted)"]].map(([t, d, c], j) => (
            <div key={t} style={{
              flex:1, textAlign:"center", padding:"10px 6px",
              background: j === 0 ? "var(--dp-accent-soft)" : "var(--dp-paper-2)",
              border:`1px solid ${j === 0 ? "var(--dp-accent)" : "var(--dp-line)"}`,
              borderRadius:10,
              opacity: on ? 1 : 0,
              transform: on ? "none" : "translateY(14px)",
              transition:`opacity 0.45s ease ${0.9+j*0.15}s, transform 0.45s ease ${0.9+j*0.15}s`,
            }}>
              <div style={{ fontSize:12, fontWeight:700, color: j===0 ? "var(--dp-accent)" : "var(--dp-ink)" }}>{t}</div>
              <div style={{ fontSize:11, color:"var(--dp-muted)", fontFamily:"var(--dp-mono)", marginTop:2 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  ];

  const steps = [
    { n:"01", kw:"WHAT",  t:"You need to do",     b:"Sign up free in 60 seconds and instantly receive virtual addresses in every country we serve. Fill out a simple request form with your item URL, size, color and quantity. Need help buying? Pick 'Buy for Me' and we handle the purchase — including payment." },
    { n:"02", kw:"HOW",   t:"Pricing works",      b:"Receive a personalized offer that includes shipping, duties and service fees up front. Our negotiated DHL/FedEx/UPS rates mean up to 80% off public pricing. You're in control — accept or decline, no obligations." },
    { n:"03", kw:"WHEN",  t:"To choose shipping", b:"Ship to our forwarding address (or use Buy for Me). Once your package hits our warehouse, you get free photos, optional consolidation and repacking — bundle 30 days of orders to slash billable weight." },
    { n:"04", kw:"WHERE", t:"Your parcel goes",   b:"We ship directly to your international address with door-to-door tracking and real-time notifications. Express (3–6 days), Standard (7–12), or Economy (14–21). Customs pre-cleared. Sit back, enjoy seamless shopping." },
  ];

  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="how" />
      <PageHero eyebrow="How it works" title="Four steps from checkout to |doorstep." lede="The whole journey, end to end. From getting your first virtual address to unboxing on your sofa — here's exactly how Forward Solutions works." />

      <section className="dp-section" style={{ paddingTop: 0 }}>
        <div className="dp-container">
          {steps.map((s, i) => (
            <div
              key={s.n}
              ref={el => refs.current[i] = el}
              data-hiw={i}
              style={{
                display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center",
                padding:"80px 0", borderTop:"1px solid var(--dp-line)",
                opacity: vis[i] ? 1 : 0,
                transform: vis[i] ? "none" : `translateY(${i % 2 === 0 ? 48 : 32}px)`,
                transition:"opacity 0.75s ease, transform 0.75s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Text side */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
                  <span style={{
                    fontFamily:"var(--dp-mono)", fontSize:11, fontWeight:700,
                    color:"var(--dp-accent)", letterSpacing:"0.14em",
                    padding:"4px 10px", border:"1px solid var(--dp-accent)",
                    borderRadius:999, opacity:0.9,
                  }}>{s.n}</span>
                  <span style={{ fontFamily:"var(--dp-display)", fontSize:72, color:"var(--dp-accent)", letterSpacing:"-0.04em", lineHeight:1, opacity:0.08, userSelect:"none" }}>{s.kw}</span>
                </div>
                <h2 style={{ fontSize:"clamp(28px,3.2vw,40px)", marginBottom:16, fontFamily:"var(--dp-display)", letterSpacing:"-0.025em", lineHeight:1.15 }}>{s.t}</h2>
                <p style={{ fontSize:17, color:"var(--dp-muted)", lineHeight:1.6, maxWidth:500 }}>{s.b}</p>
              </div>
              {/* Visual side */}
              <div style={{
                aspectRatio:"1", background:"var(--dp-paper-2)", border:"1px solid var(--dp-line)",
                borderRadius:24, overflow:"hidden", order: i % 2 === 0 ? 1 : 0,
                transition:"box-shadow 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow="0 20px 60px rgba(0,0,0,0.10)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow="none"}
              >
                {visuals[i](vis[i])}
              </div>
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
    { name:"North America", c:[["us","United States","Oregon · Delaware · Florida","united-states"],["ca","Canada","Toronto · Vancouver","canada"]] },
    { name:"United Kingdom & Ireland", c:[["gb","United Kingdom","London · Manchester","united-kingdom"],["ie","Ireland","Dublin","ireland"]] },
    { name:"Europe", c:[["de","Germany","Berlin · Hamburg","germany"],["fr","France","Paris","france"],["it","Italy","Milan","italy"],["es","Spain","Madrid","spain"],["nl","Netherlands","Amsterdam","netherlands"],["be","Belgium","Brussels","belgium"],["pl","Poland","Warsaw","poland"],["bg","Bulgaria","Sofia","bulgaria"],["rs","Serbia","Belgrade","serbia"],["ua","Ukraine","Kyiv","ukraine"]] },
    { name:"Nordic", c:[["no","Norway","Oslo","norway"],["se","Sweden","Stockholm","sweden"],["dk","Denmark","Copenhagen","denmark"],["fi","Finland","Helsinki","finland"]] },
    { name:"Asia", c:[["cn","China","Shenzhen · Shanghai","china"],["jp","Japan","Tokyo · Osaka","japan"],["kr","South Korea","Seoul","south-korea"],["tw","Taiwan","Taipei","taiwan"],["vn","Vietnam","Ho Chi Minh","vietnam"],["sg","Singapore","Singapore","singapore"]] },
    { name:"Middle East & Africa", c:[["ae","UAE","Dubai","uae"],["tr","Turkey","Istanbul","turkey"],["sa","Saudi Arabia","Riyadh","saudi-arabia"],["za","South Africa","Johannesburg","south-africa"]] },
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
                  {r.c.map(([iso, name, hubs, slug]) => (
                    <a key={name} href={`/locations/${slug}`} style={{ padding: 18, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 12, display: "flex", gap: 14, alignItems: "center", textDecoration: "none", color: "inherit" }}>
                      <img src={`https://flagcdn.com/w40/${iso}.png`} alt={name} width={32} height={22} style={{ borderRadius: 3, objectFit: "cover", flexShrink: 0 }} />
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

// ═══ RESOURCES HUB ═══
function ResourcesPage() {
  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="resources" />
      <PageHero eyebrow="Resources" title="Everything in |one place." lede="About the team behind Forward Solutions, guides for borderless shoppers, and the fastest way to reach a human." />

      <div id="about"><AboutSection /></div>
      <div id="blog" style={{ borderTop: "1px solid var(--dp-line)" }}><BlogSection /></div>
      <div id="contact" style={{ borderTop: "1px solid var(--dp-line)" }}><ContactSection /></div>

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

// ─── Country data for dedicated location pages ────────────────────────────
const LOCATION_DATA = {
  "united-states": {
    name:"United States", flag:"🇺🇸", iso:"us", region:"North America", hubs:"Oregon · Delaware · Florida",
    tagline:"The world's biggest retail market, unlocked.",
    lede:"Get a free US virtual address. Shop Amazon, Nike, Best Buy, Sephora — all the stores that don't ship internationally. Tax-free warehousing in Oregon.",
    stores:["Amazon","Nike","Best Buy","Target","Walmart","Sephora","Apple","Costco","REI","Nordstrom"],
    cats:["Electronics","Sneakers","Fashion","Beauty","Home & Kitchen","Collectibles"],
    why:[
      {t:"Zero sales tax in Oregon",b:"Our primary warehouse sits in Oregon — no state sales tax on most purchases. That's 8–10% saved before you even ship."},
      {t:"US-exclusive drops",b:"Limited sneakers, Black Friday deals, early tech releases — exclusives that never leave the country without us."},
      {t:"Personal shoppers for US stores",b:"Some retailers flag international cards. Our US-based buyers purchase on your behalf, seamlessly."},
    ],
    faq:[
      {q:"Which US hub should I use?",a:"Oregon for tax savings (no sales tax). Delaware also tax-free. Florida is ideal if your destination is South America or the Caribbean."},
      {q:"Can you ship fragile or oversized items?",a:"Yes — we photograph every parcel on arrival, repack securely, and offer insurance up to any declared value."},
      {q:"How long does shipping from the USA take?",a:"Express 3–6 days (DHL/FedEx), Standard 7–12 days (EMS), Economy 14–21 days (PostNord/airmail)."},
    ]
  },
  "canada": {
    name:"Canada", flag:"🇨🇦", iso:"ca", region:"North America", hubs:"Toronto · Vancouver",
    tagline:"Canadian favourites, forwarded worldwide.",
    lede:"Access Canadian-exclusive brands with a free virtual address in Toronto or Vancouver. Lululemon, Hudson's Bay, Sport Chek — shipped anywhere.",
    stores:["Lululemon","Hudson's Bay","Sport Chek","Indigo","Canadian Tire","Simons","MEC","Browns"],
    cats:["Outdoor & Sports","Fashion","Books","Home","Beauty","Tech"],
    why:[
      {t:"Lululemon & Canadian exclusives",b:"Some Lululemon colourways and Canadian-brand items ship Canada-only. We get them out globally."},
      {t:"CAD pricing advantage",b:"For many international shoppers, buying in Canadian dollars offers significant savings vs. local retail."},
      {t:"Consolidate & save",b:"Order from multiple Canadian stores, bundle into one parcel, cut shipping costs by up to 80%."},
    ],
    faq:[
      {q:"Do you ship from both Toronto and Vancouver?",a:"Yes. Toronto is best for Eastern Canada stores; Vancouver for BC-based retailers and faster Asia shipping routes."},
      {q:"Are there import restrictions on Canadian goods?",a:"Most consumer goods ship freely. Some food items and certain cosmetics may face restrictions — ask our team before ordering."},
    ]
  },
  "united-kingdom": {
    name:"United Kingdom", flag:"🇬🇧", iso:"gb", region:"United Kingdom & Ireland", hubs:"London · Manchester",
    tagline:"ASOS, Argos, M&S — shipped from the UK to your door.",
    lede:"Get a free UK virtual address and shop the full British high street. ASOS, John Lewis, Boots, Selfridges — hundreds of UK-only stores, forwarded worldwide.",
    stores:["ASOS","John Lewis","Argos","Boots","Selfridges","Marks & Spencer","Currys","Gymshark"],
    cats:["Fashion","Health & Beauty","Electronics","Home","Sportswear","Luxury"],
    why:[
      {t:"UK-only ASOS styles",b:"ASOS UK carries exclusive colourways and sizing not on international sites. Ship to our London address and we'll forward to you."},
      {t:"Post-Brexit pricing",b:"Many UK retailers have adjusted prices downward. We lock in UK pricing before it reaches your door."},
      {t:"VAT reclaim eligible",b:"Non-UK residents may be eligible for VAT reclaim on qualifying purchases. Ask our team about the process."},
    ],
    faq:[
      {q:"Do you handle UK customs declarations?",a:"Yes — all outbound shipments include proper customs documentation. We pre-clear where possible to prevent delays."},
      {q:"Can I consolidate UK and European orders?",a:"Yes. We hold UK parcels for up to 30 days while you shop EU stores, then ship everything together."},
    ]
  },
  "ireland": {
    name:"Ireland", flag:"🇮🇪", iso:"ie", region:"United Kingdom & Ireland", hubs:"Dublin",
    tagline:"Irish retailers, forwarded globally.",
    lede:"Get a Dublin forwarding address and shop Irish stores that won't ship internationally. Dunnes, Brown Thomas, Penneys — all within reach.",
    stores:["Brown Thomas","Dunnes Stores","Penneys","Arnotts","Lifestyle Sports","Chadwicks"],
    cats:["Fashion","Home","Sports","Beauty","Electronics","Food & Drink"],
    why:[
      {t:"EU hub advantage",b:"Ireland's EU membership means frictionless access to EU retailers with Dublin as your base — plus Irish exclusives."},
      {t:"Irish artisan goods",b:"We help you access Irish craft brands, whiskey accessories and artisan goods not sold internationally."},
      {t:"No minimum order",b:"Ship even a single small item — no minimum spend required to use your Dublin address."},
    ],
    faq:[
      {q:"Is Ireland an EU forwarding address?",a:"Yes. A Dublin address gives you full access to Irish stores and many EU-wide retailers that ship to Ireland."},
      {q:"Can I use my Irish address for EU shopping?",a:"Many EU stores ship to Ireland. Combined with our consolidation service, Dublin is a smart European hub."},
    ]
  },
  "germany": {
    name:"Germany", flag:"🇩🇪", iso:"de", region:"Europe", hubs:"Berlin · Hamburg",
    tagline:"German engineering, delivered to the world.",
    lede:"Shop cutting-edge electronics, Bosch appliances and fashion from Amazon.de, MediaMarkt and eBay.de. Get your free German forwarding address today.",
    stores:["Amazon.de","MediaMarkt","eBay.de","Zalando","Otto","Douglas","Saturn","Thomann","About You"],
    cats:["Electronics","Appliances","Fashion","Music Gear","Beauty","Automotive"],
    why:[
      {t:"Electronics at German prices",b:"Germany's competitive electronics market means Bosch, Braun and Miele at prices 20–40% below other markets."},
      {t:"Zalando & EU fashion hub",b:"Zalando Germany carries the widest selection and most exclusive styles of any European fashion platform."},
      {t:"Music & studio gear via Thomann",b:"Thomann — the world's largest music store — ships within Germany. We forward to your international address."},
    ],
    faq:[
      {q:"Can I ship electronics from Germany internationally?",a:"Yes — we handle all export documentation. Electronics ship without issues to most destinations."},
      {q:"What about large appliances from Germany?",a:"Large items like Miele washing machines or Bosch dishwashers can be shipped with our LCL freight option. Get a quote first."},
    ]
  },
  "france": {
    name:"France", flag:"🇫🇷", iso:"fr", region:"Europe", hubs:"Paris",
    tagline:"French luxury and fashion, forwarded worldwide.",
    lede:"Dreaming of Vinted.fr finds, Fnac electronics or boutique cosmetics? Get a Paris forwarding address and shop France's finest — shipped to your door anywhere.",
    stores:["Vinted.fr","LeBonCoin","Fnac","Galeries Lafayette","L'Occitane","Sephora FR","La Redoute","Cdiscount"],
    cats:["Luxury Fashion","Vintage Finds","Electronics","Cosmetics","Home Décor","Food & Wine"],
    why:[
      {t:"Authentic French luxury",b:"Shop directly from Galeries Lafayette, Sephora Paris and French boutiques — guaranteed authentic, not grey-market."},
      {t:"Vinted & LeBonCoin deals",b:"France's second-hand market is massive. We help you access rare vintage finds and deals on Vinted.fr and LeBonCoin."},
      {t:"French pharmacy cosmetics",b:"La Roche-Posay, Avène, NUXE — dramatically cheaper in France than abroad. We ship them worldwide."},
    ],
    faq:[
      {q:"Can you forward wine or spirits from France?",a:"We can ship sealed bottles with proper customs labelling. Contact us for specific quantities and your destination country's import rules."},
      {q:"How do I buy from LeBonCoin outside France?",a:"Our Buy for Me service handles local payments on LeBonCoin and other platforms requiring French bank accounts."},
    ]
  },
  "italy": {
    name:"Italy", flag:"🇮🇹", iso:"it", region:"Europe", hubs:"Milan",
    tagline:"Gucci, Prada, Ferragamo — shop Italy, ship the world.",
    lede:"Italian online stores often restrict deliveries to domestic addresses. With a Milan forwarding address, you can access high-end fashion and luxury goods from Italy's finest stores.",
    stores:["Gucci","Prada","Ferragamo","Yoox","Zalando Italy","eBay.it","ePrice","Farfetch IT"],
    cats:["Luxury Fashion","Leather Goods","Shoes","Wine & Food","Artisan Crafts","Jewellery"],
    why:[
      {t:"Authentic Italian luxury",b:"Shop directly from Gucci, Prada and other Italian luxury houses at Italian retail prices — no grey-market markups."},
      {t:"Made in Italy goods",b:"Hand-stitched leather bags, artisan ceramics and regional wines available only within Italy. We ship them worldwide."},
      {t:"Proxy buying for restricted stores",b:"Some Italian luxury boutiques won't accept international cards. Our local shoppers purchase on your behalf."},
    ],
    faq:[
      {q:"Are Italian luxury goods genuine if bought via you?",a:"100%. We ship exactly what you purchase from verified Italian retailers — no substitutions, ever."},
      {q:"Can I ship Italian wine or food internationally?",a:"Yes — with proper customs labelling and quantities within your destination country's import limits."},
    ]
  },
  "spain": {
    name:"Spain", flag:"🇪🇸", iso:"es", region:"Europe", hubs:"Madrid",
    tagline:"Zara, Mango, El Corte Inglés — forwarded from Madrid.",
    lede:"Spanish websites offer fashion, gourmet food and artisan goods that don't ship internationally. Get a free Madrid forwarding address and start shopping.",
    stores:["Zara","Mango","El Corte Inglés","Wallapop","Vinted Spain","Fnac Spain","PC Componentes","El Ganso"],
    cats:["Fashion","Electronics","Gourmet Food","Artisan Crafts","Beauty","Sports"],
    why:[
      {t:"Zara & Mango at source",b:"Shop the latest Zara collections directly from Spain — newest styles, widest sizing, before they reach other markets."},
      {t:"Spanish gourmet & ibérico",b:"Jamón ibérico, artisan olive oils and regional wines from El Corte Inglés — we ship them worldwide with proper packaging."},
      {t:"Wallapop second-hand gems",b:"Spain's Wallapop marketplace has incredible second-hand deals. Our Buy for Me team handles the pickup and forwarding."},
    ],
    faq:[
      {q:"Can I ship food from Spain?",a:"Yes — non-perishable gourmet food (cured meats, oils, wines) can be shipped internationally with proper customs documentation."},
      {q:"Does Zara Spain ship internationally?",a:"Zara ships to many countries but not all, and some items are Spain-only. Our forwarding address solves this entirely."},
    ]
  },
  "netherlands": {
    name:"Netherlands", flag:"🇳🇱", iso:"nl", region:"Europe", hubs:"Amsterdam",
    tagline:"Bol.com, Dutch design and cycling gear — shipped worldwide.",
    lede:"The Netherlands is a design and cycling paradise. Many Dutch stores — including bol.com — don't ship internationally. Get a free Amsterdam address and access them all.",
    stores:["bol.com","Coolblue","Zalando NL","Wehkamp","Hema","De Bijenkorf","Marktplaats"],
    cats:["Electronics","Cycling Gear","Design & Home","Fashion","Books","Dutch Ceramics"],
    why:[
      {t:"Bol.com — the Dutch Amazon",b:"Bol.com is the Netherlands' biggest retailer with thousands of Dutch-only products. We forward worldwide."},
      {t:"Cycling gear at Dutch prices",b:"The Netherlands is the world's cycling capital. Gazelle bikes and Dutch cycling accessories are cheapest here."},
      {t:"Dutch design & Delftware",b:"Authentic Delft pottery, Dutch design brands and HEMA exclusives — we ship these cultural icons globally."},
    ],
    faq:[
      {q:"Does bol.com ship internationally?",a:"Bol.com ships to Belgium and some EU countries but not worldwide. Our Amsterdam address unlocks the full catalogue."},
      {q:"How do I buy from Marktplaats?",a:"Our Buy for Me service handles Marktplaats (Netherlands' Craigslist) and other local platforms requiring Dutch payment methods."},
    ]
  },
  "belgium": {
    name:"Belgium", flag:"🇧🇪", iso:"be", region:"Europe", hubs:"Brussels",
    tagline:"Belgian chocolates, diamonds and fashion — forwarded globally.",
    lede:"Belgium offers quality chocolates, diamond jewellery and handcrafted décor that overseas shoppers can't easily access. A Brussels forwarding address fixes that.",
    stores:["Bol.com Belgium","Zalando Belgium","Fnac Belgium","Colruyt","ICI Paris XL","Neuhaus","Standaard"],
    cats:["Chocolates & Food","Diamonds & Jewellery","Fashion","Books","Beauty","Home Décor"],
    why:[
      {t:"Authentic Belgian chocolate",b:"Neuhaus, Leonidas, Guylian — buy direct from Belgian chocolatiers at local prices and ship worldwide with our cold-chain packaging."},
      {t:"Antwerp diamond district",b:"Antwerp is the world's diamond capital. Our agents can liaise with verified dealers for investment or jewellery purchases."},
      {t:"EU hub for duty savings",b:"Belgium's central EU location makes it an efficient hub with lower duty thresholds and efficient customs processing."},
    ],
    faq:[
      {q:"Can you ship perishable Belgian chocolate?",a:"Yes — we use insulated cold-chain packaging. Recommend shipping during cooler months for best results."},
      {q:"Is proxy buying available for Belgian stores?",a:"Yes — if a Belgian store doesn't accept your card, our Buy for Me service handles the purchase locally."},
    ]
  },
  "poland": {
    name:"Poland", flag:"🇵🇱", iso:"pl", region:"Europe", hubs:"Warsaw",
    tagline:"Allegro, Polish fashion and artisan crafts — forwarded to the world.",
    lede:"Polish e-commerce is booming with Allegro.pl, affordable fashion and traditional crafts. Delivery is often Europe-only — we forward to UAE, Singapore, and beyond.",
    stores:["Allegro.pl","Zalando Poland","Media Expert","RTV Euro AGD","Reserved","Answear","Medicine"],
    cats:["Fashion","Electronics","Home Décor","Natural Cosmetics","Traditional Crafts","Sportswear"],
    why:[
      {t:"Allegro.pl — Poland's eBay",b:"Allegro is Poland's biggest marketplace with 120M+ listings. Hard-to-find goods at EU prices, forwarded worldwide."},
      {t:"Polish natural cosmetics",b:"Brands like Bielenda, Eveline and Dermika — high-quality Polish cosmetics at a fraction of Western European prices."},
      {t:"Traditional Polish crafts",b:"Hand-carved amber jewellery, linen goods and folk art — unique Polish goods not available internationally."},
    ],
    faq:[
      {q:"Does Allegro.pl ship to the UAE or Asia?",a:"Allegro.pl is primarily domestic and EU. Our Warsaw address receives your purchases and ships them to any global destination."},
      {q:"Are Polish cosmetics cruelty-free?",a:"Many Polish natural cosmetic brands are certified cruelty-free. We can flag this requirement in our Buy for Me service."},
    ]
  },
  "bulgaria": {
    name:"Bulgaria", flag:"🇧🇬", iso:"bg", region:"Europe", hubs:"Sofia",
    tagline:"Bulgarian rose products and EU access — forwarded globally.",
    lede:"Bulgaria offers affordable electronics, traditional rose products and unique crafts. With a Sofia forwarding address, shop Bulgarian and EU stores shipping locally.",
    stores:["eMAG.bg","Technopolis","Pazar.bg","OLX Bulgaria","Emag","Plovdiv Market"],
    cats:["Electronics","Rose Products","Traditional Crafts","Fashion","Home","Sports"],
    why:[
      {t:"Bulgarian rose products",b:"Bulgaria produces 70% of the world's rose oil. Authentic rose water, perfumes and cosmetics at source prices."},
      {t:"Affordable EU electronics",b:"Bulgarian electronics prices are among the lowest in the EU. eMAG carries thousands of products at bargain rates."},
      {t:"Access to EU single market",b:"Bulgaria's EU membership means access to EU-wide shipping services at domestic rates through our Sofia hub."},
    ],
    faq:[
      {q:"Can I buy Bulgarian rose oil products?",a:"Yes — our team can source and forward authentic Bulgarian rose products from certified producers in the Rose Valley region."},
      {q:"Do EU rules apply in Bulgaria?",a:"Yes. Bulgaria is an EU member, so standard EU consumer protection and customs rules apply."},
    ]
  },
  "serbia": {
    name:"Serbia", flag:"🇷🇸", iso:"rs", region:"Europe", hubs:"Belgrade",
    tagline:"Serbian goods and Balkan specialties, shipped worldwide.",
    lede:"Serbia is a growing e-commerce market with great prices on electronics, fashion and artisan goods. Our Belgrade address unlocks local deals for international shoppers.",
    stores:["Gigatron","ShoppyShop","Limundo.com","eModa","Tehnomanija","Cenoteka"],
    cats:["Electronics","Fashion","Traditional Crafts","Food & Drink","Books","Sports"],
    why:[
      {t:"Low prices in the Balkans",b:"Serbia's lower cost of living means competitive pricing on electronics and fashion — significant savings for international buyers."},
      {t:"Serbian crafts & rakija",b:"Hand-crafted pottery, traditional textiles and Serbian plum brandy (šljivovica) — unique items unavailable internationally."},
      {t:"Balkan market access",b:"A Belgrade address gives you access to Balkan e-commerce platforms that don't ship outside the region."},
    ],
    faq:[
      {q:"Can you ship alcohol from Serbia?",a:"Spirits like šljivovica can be shipped internationally with proper customs labelling and within import limits of the destination country."},
      {q:"Is Serbian online shopping reliable?",a:"Major platforms like Gigatron and Tehnomanija are well-established. Our team verifies purchases before forwarding."},
    ]
  },
  "ukraine": {
    name:"Ukraine", flag:"🇺🇦", iso:"ua", region:"Europe", hubs:"Kyiv",
    tagline:"Ukrainian artisan crafts and goods, forwarded with care.",
    lede:"Ukraine has a rich tradition of artisan embroidery, ceramics and handmade goods. Our Kyiv address helps you access Ukrainian stores and support local artisans.",
    stores:["Rozetka.ua","Prom.ua","OLX Ukraine","Kasta","Lamoda UA","Ukrainian Etsy sellers"],
    cats:["Embroidery & Textiles","Ceramics","Fashion","Electronics","Books","Folk Art"],
    why:[
      {t:"Ukrainian embroidery (Vyshyvanka)",b:"Authentic hand-embroidered Ukrainian shirts and textiles — cultural heritage pieces supporting local craftspeople."},
      {t:"Handmade ceramics & pottery",b:"Ukrainian Opishnya and Hutsul ceramics are world-class. We forward directly from artisans to your door."},
      {t:"Support Ukrainian businesses",b:"Every purchase through our Ukrainian address directly supports local artisans and businesses."},
    ],
    faq:[
      {q:"Is it safe to ship from Ukraine currently?",a:"Our team continuously monitors shipping routes and uses secure, insured carriers. We'll advise on current transit times when you enquire."},
      {q:"Can I buy embroidery directly from artisans?",a:"Yes — our Buy for Me service connects with verified Kyiv artisans and Prom.ua sellers on your behalf."},
    ]
  },
  "norway": {
    name:"Norway", flag:"🇳🇴", iso:"no", region:"Nordic", hubs:"Oslo",
    tagline:"Nordic quality and outdoor gear, forwarded from Oslo.",
    lede:"Norway is known for world-class outdoor gear, fish products and Scandinavian design. Get a free Oslo forwarding address and access retailers that won't ship globally.",
    stores:["XXL Sports","Outnorth","Finn.no","Komplett.no","Elkjøp","Bergans","Helly Hansen"],
    cats:["Outdoor & Hiking","Winter Sports","Electronics","Seafood","Design","Fashion"],
    why:[
      {t:"World-class outdoor gear",b:"Helly Hansen, Bergans and Norwegian outdoor brands at Oslo prices — before the international mark-up hits."},
      {t:"Scandinavian design",b:"Norwegian design studios and boutiques create unique home goods and fashion. Many ship Norway-only."},
      {t:"Komplett electronics",b:"One of Scandinavia's largest electronics retailers with excellent stock and pricing. We forward worldwide."},
    ],
    faq:[
      {q:"Can I ship Norwegian smoked salmon internationally?",a:"Cured and smoked fish can ship to most countries with proper packaging and customs documentation. Contact us for your destination."},
      {q:"Does Norway use EU customs rules?",a:"Norway is not in the EU but is in the EEA. Some EU VAT rules don't apply — our team will advise on duty treatment."},
    ]
  },
  "sweden": {
    name:"Sweden", flag:"🇸🇪", iso:"se", region:"Nordic", hubs:"Stockholm",
    tagline:"H&M, Fjällräven, Acne Studios — forwarded from Stockholm.",
    lede:"Sweden is home to global brands at their origin prices. Shop H&M, Fjällräven, Acne Studios and Scandinavian design brands from a free Stockholm forwarding address.",
    stores:["H&M","Fjällräven","Acne Studios","Björn Borg","Åhléns","Gymgrossisten","CDON","Dustin"],
    cats:["Fashion","Outdoor & Adventure","Design","Sportswear","Electronics","Baby & Family"],
    why:[
      {t:"Swedish brands at origin prices",b:"Fjällräven, Acne Studios, Our Legacy — buy direct from Swedish brands before international distributor markups."},
      {t:"IKEA-exclusive items",b:"IKEA Sweden carries exclusive items not in international stores. We can buy and forward to you."},
      {t:"CDON & Dustin tech deals",b:"Sweden's largest tech e-tailers offer excellent pricing on electronics across Nordic brands and global products."},
    ],
    faq:[
      {q:"Does Sweden charge VAT on exports?",a:"VAT (25% in Sweden) may be refundable on qualifying exports for non-EU residents. Ask our team about the process."},
      {q:"Can I get Systembolaget spirits?",a:"Sweden's state liquor stores carry unique Scandinavian aquavit and spirits. Our Buy for Me team can assist with qualifying purchases."},
    ]
  },
  "denmark": {
    name:"Denmark", flag:"🇩🇰", iso:"dk", region:"Nordic", hubs:"Copenhagen",
    tagline:"LEGO, Bang & Olufsen, Danish design — forwarded worldwide.",
    lede:"Denmark is a design powerhouse. Shop Bang & Olufsen, LEGO, Hay and Danish fashion brands from a free Copenhagen forwarding address.",
    stores:["LEGO","Bang & Olufsen","Hay","Salling Group","Elgiganten","Matas","Magasin"],
    cats:["Design & Home","Electronics","Toys","Fashion","Beauty","Gourmet Food"],
    why:[
      {t:"LEGO at Danish prices",b:"Buy LEGO sets directly from Denmark (home of LEGO) — often cheaper than international markets, with exclusive sets."},
      {t:"Bang & Olufsen originals",b:"B&O's legendary audio equipment. Shop directly from Denmark where the full range is available."},
      {t:"Danish design brands",b:"Hay, Ferm Living, Muuto — Danish interior design brands at Copenhagen prices, shipped to your home."},
    ],
    faq:[
      {q:"Are LEGO sets cheaper in Denmark?",a:"Often yes — Denmark frequently has lower LEGO pricing than the UK, US or Australia. We compare and advise."},
      {q:"Can I ship Bang & Olufsen internationally?",a:"Yes — B&O products ship internationally from Denmark. We ensure proper packaging and insurance for high-value electronics."},
    ]
  },
  "finland": {
    name:"Finland", flag:"🇫🇮", iso:"fi", region:"Nordic", hubs:"Helsinki",
    tagline:"Marimekko, Iittala and Finnish design — forwarded from Helsinki.",
    lede:"Finland is famous for Marimekko, Iittala and world-class design. Get a free Helsinki forwarding address and access Finnish retailers that ship locally only.",
    stores:["Marimekko","Iittala","HMD Global","Verkkokauppa.com","Stockmann","Fazer"],
    cats:["Design & Home","Electronics","Fashion","Sauna Products","Chocolates","Outdoor"],
    why:[
      {t:"Marimekko at origin",b:"Marimekko's iconic Finnish designs at Helsinki prices — exclusive prints and home goods not available in international stores."},
      {t:"Iittala glassware",b:"Finland's world-renowned glass design brand. Shop the full collection at Finnish retail prices."},
      {t:"Finnish sauna products",b:"Authentic Finnish sauna accessories, ladles and birch whisks — the genuine article from the source."},
    ],
    faq:[
      {q:"Does Marimekko ship internationally?",a:"Marimekko ships to many countries but not all, and some Finnish-only prints stay domestic. Our Helsinki address solves this."},
      {q:"Can I buy Fazer chocolate from Finland?",a:"Yes — Fazer produces world-class Finnish chocolate. We ship with proper cool-chain packaging."},
    ]
  },
  "china": {
    name:"China", flag:"🇨🇳", iso:"cn", region:"Asia", hubs:"Shenzhen · Shanghai",
    tagline:"Taobao, JD.com and factory-direct goods — shipped worldwide.",
    lede:"Access Taobao, JD.com and Shenzhen's electronics markets with a free Chinese forwarding address. Unbeatable prices on tech, fashion and factory-direct goods.",
    stores:["Taobao","JD.com","Pinduoduo","Xiaomi Store","1688.com","NetEase Yanxuan","Dangdang"],
    cats:["Consumer Electronics","Fashion","Smartphones","Factory Direct","Beauty","Books"],
    why:[
      {t:"Taobao & 1688 factory prices",b:"Access China's wholesale and retail markets. Factory-direct pricing on electronics, fashion and home goods."},
      {t:"Xiaomi & DJI at source",b:"Shop Xiaomi phones, DJI drones and Chinese tech brands before international distribution adds 30–50% markup."},
      {t:"Chinese language support",b:"Our bilingual team navigates Taobao and JD listings, quality-checks items and forwards with full documentation."},
    ],
    faq:[
      {q:"Can you buy from Taobao on my behalf?",a:"Yes — our Mandarin-speaking Buy for Me team purchases from Taobao, 1688 and any Chinese platform, inspects items and ships internationally."},
      {q:"Are electronics from China safe to use abroad?",a:"We check voltage requirements and plugs before shipping. Some electronics need local certification checks — our team flags these."},
    ]
  },
  "japan": {
    name:"Japan", flag:"🇯🇵", iso:"jp", region:"Asia", hubs:"Tokyo · Osaka",
    tagline:"Rakuten, Nintendo drops and Japanese cosmetics — forwarded from Japan.",
    lede:"Japan-exclusive goods are notoriously hard to access. Get a Tokyo forwarding address and shop Rakuten, Uniqlo Japan, Sony direct and Japanese artisan brands.",
    stores:["Rakuten","Amazon.co.jp","Uniqlo Japan","Mercari Japan","Yahoo! Japan Auctions","Muji","Yodobashi"],
    cats:["Electronics","Fashion","Anime Merch","Stationery","Cosmetics","Gaming","Food"],
    why:[
      {t:"Japan-exclusive anime & gaming",b:"Limited Nintendo drops, Pokemon Center exclusives, anime merchandise — Japan-only, impossible to find abroad without us."},
      {t:"Japanese cosmetics at source",b:"Shiseido, SK-II, Hada Labo and Japanese pharmacy skincare at Tokyo prices — 30–50% cheaper than international retail."},
      {t:"Vintage fashion via Mercari",b:"Japan's Mercari and Yahoo Auctions are goldmines for vintage fashion, electronics and rare collectibles."},
    ],
    faq:[
      {q:"Can I bid on Yahoo Japan Auctions?",a:"Yes — our Buy for Me team bids on Yahoo! Japan Auctions, Mercari and any Japanese platform on your behalf."},
      {q:"How do you handle Japanese packaging?",a:"Japanese goods are famously over-packaged. We strip excess packaging (with your permission) to reduce billable weight by 30–60%."},
    ]
  },
  "south-korea": {
    name:"South Korea", flag:"🇰🇷", iso:"kr", region:"Asia", hubs:"Seoul",
    tagline:"K-Beauty, Samsung at source and Coupang deals — forwarded from Seoul.",
    lede:"South Korea is the epicentre of K-Beauty, K-Pop merch and cutting-edge electronics. Get a Seoul forwarding address and shop Coupang, Oliveyoung and Samsung direct.",
    stores:["Coupang","Oliveyoung","Samsung Store","LG Store","Gmarket","11st","Kakao Style","Musinsa"],
    cats:["K-Beauty","Electronics","K-Pop Merch","Fashion","Gaming","Skincare"],
    why:[
      {t:"K-Beauty at Korean prices",b:"Innisfree, COSRX, Some By Mi, Laneige — authentic K-Beauty brands at Seoul prices, up to 70% cheaper than international retail."},
      {t:"Samsung & LG direct",b:"Buy Samsung and LG products from their Korean home market — models not released internationally, at lower domestic prices."},
      {t:"Coupang — Korea's Amazon",b:"Coupang is Korea's dominant e-commerce platform. Huge selection, great pricing, but Korea-only delivery — until us."},
    ],
    faq:[
      {q:"How do I know Korean cosmetics are authentic?",a:"We source from verified Korean retailers (Oliveyoung, Coupang) — never grey-market sellers. Authenticity guaranteed."},
      {q:"Can I get K-Pop merchandise from Seoul?",a:"Yes — Weverse, SM Store and K-Pop brand stores ship to our Seoul address. We forward your haul globally."},
    ]
  },
  "taiwan": {
    name:"Taiwan", flag:"🇹🇼", iso:"tw", region:"Asia", hubs:"Taipei",
    tagline:"Asus, PChome and Taiwanese tech — forwarded from Taipei.",
    lede:"Taiwan is a tech and culinary powerhouse. Get a Taipei address and access PChome, momo and local brands not shipped globally.",
    stores:["PChome","momo","Shopee Taiwan","Yahoo Taiwan","Asus Store","Eastern Online"],
    cats:["Electronics","Computers","Food Products","Fashion","Design","Tech Accessories"],
    why:[
      {t:"Asus & Acer at source",b:"Taipei is home to Asus and Acer. Motherboards, laptops and accessories at Taiwanese distributor prices."},
      {t:"Taiwanese food products",b:"Sun Cakes, pineapple cake, bubble tea ingredients and Taiwanese snacks — authentic regional goods shipped worldwide."},
      {t:"PChome electronics deals",b:"PChome Taiwan has an enormous electronics catalogue at prices often lower than international Amazon listings."},
    ],
    faq:[
      {q:"Can I ship Taiwanese electronics that use 110V?",a:"Yes — we advise on voltage compatibility and can include step-down converters where needed."},
      {q:"Are there export restrictions on Taiwanese tech?",a:"Consumer electronics ship freely. Some sensitive tech components have export controls — our team will flag anything affected."},
    ]
  },
  "vietnam": {
    name:"Vietnam", flag:"🇻🇳", iso:"vn", region:"Asia", hubs:"Ho Chi Minh",
    tagline:"Vietnamese fashion, handicrafts and coffee — forwarded globally.",
    lede:"Vietnam offers affordable fashion, unique handicrafts and fast-growing e-commerce. Get a Ho Chi Minh forwarding address and access Tiki, Shopee Vietnam and local artisans.",
    stores:["Tiki.vn","Shopee Vietnam","Lazada Vietnam","Sendo","local artisan markets"],
    cats:["Fashion","Handicrafts","Coffee","Lacquerware","Silk","Electronics"],
    why:[
      {t:"Vietnamese coffee at source",b:"Vietnam is the world's second-largest coffee producer. Ship Vietnamese robusta and specialty beans directly from roasters."},
      {t:"Artisan handicrafts",b:"Silk products, lacquerware, rattan furniture and hand-embroidered goods — authentic Vietnamese craftsmanship at local prices."},
      {t:"Fast fashion & manufacturing",b:"Vietnam is a global fashion manufacturing hub. Access factory-direct pricing through our Buy for Me service."},
    ],
    faq:[
      {q:"Can I order coffee from Vietnamese roasters?",a:"Yes — we work with Ho Chi Minh roasters to ship whole beans and ground coffee internationally with proper food export documentation."},
      {q:"Are Vietnamese goods subject to import duties?",a:"Duties depend on your destination country and goods category. Our team provides landed cost estimates before you order."},
    ]
  },
  "singapore": {
    name:"Singapore", flag:"🇸🇬", iso:"sg", region:"Asia", hubs:"Singapore",
    tagline:"Asia-Pacific hub: Lazada, Shopee and duty-free access.",
    lede:"Singapore is Asia's premium shopping hub with duty-free access to luxury brands. Use our Singapore address as your Asia-Pacific forwarding base.",
    stores:["Lazada Singapore","Shopee Singapore","Qoo10","NTUC FairPrice","Harvey Norman","Courts"],
    cats:["Electronics","Luxury Goods","Fashion","Health Products","Food","Duty-Free"],
    why:[
      {t:"Asia-Pacific logistics hub",b:"Singapore has the region's best shipping infrastructure. Parcels from Singapore reach Southeast Asia, Australia and beyond fastest."},
      {t:"Duty-free luxury access",b:"Singapore is a major duty-free luxury destination. Shop luxury brands through our agents for legitimate duty savings."},
      {t:"SEA market access",b:"Many Southeast Asian brand exclusives are released in Singapore first. Get them before wider distribution."},
    ],
    faq:[
      {q:"Why use Singapore as an Asia hub?",a:"Singapore has the most reliable shipping infrastructure in Asia-Pacific. It's ideal for forwarding to Australia, NZ and the Middle East."},
      {q:"Can I consolidate orders from multiple Asian countries?",a:"Yes — our multi-hub service combines orders from Japan, Korea, China and Singapore into one outbound shipment."},
    ]
  },
  "uae": {
    name:"United Arab Emirates", flag:"🇦🇪", iso:"ae", region:"Middle East & Africa", hubs:"Dubai",
    tagline:"Dubai luxury, Noon.com and regional exclusives — forwarded globally.",
    lede:"The UAE is a global luxury and e-commerce hub. Get a Dubai forwarding address to access Noon, Namshi, regional luxury boutiques and items that don't ship outside the Gulf.",
    stores:["Noon.com","Namshi","Ounass","Virgin Megastore UAE","Carrefour UAE","Mumzworld"],
    cats:["Luxury Fashion","Electronics","Gold & Jewellery","Arabic Perfumes","Fashion","Baby & Kids"],
    why:[
      {t:"Tax-free luxury shopping",b:"Dubai's 0% VAT makes luxury goods significantly cheaper than in Europe or the UK. We verify authenticity and forward globally."},
      {t:"Arabic perfumes & oud",b:"Authentic oud, bakhoor and Arabic perfume blends from Dubai boutiques — unavailable anywhere else at these prices."},
      {t:"Noon.com & Gulf exclusives",b:"Noon carries Gulf-exclusive product lines and regional deals. With a Dubai address, you access them from anywhere."},
    ],
    faq:[
      {q:"Are goods really cheaper in Dubai?",a:"For luxury brands and electronics, yes — 0% VAT in UAE vs 20% VAT in Europe makes a significant difference."},
      {q:"Can I ship gold jewellery from Dubai?",a:"Yes — with proper insurance, customs valuation documentation and within your destination country's import limits."},
    ]
  },
  "turkey": {
    name:"Turkey", flag:"🇹🇷", iso:"tr", region:"Middle East & Africa", hubs:"Istanbul",
    tagline:"Turkish leather, Trendyol fashion and ceramics — forwarded worldwide.",
    lede:"Turkey offers stunning leather goods, fashion and unique crafts at very competitive prices. Get a free Istanbul forwarding address and access Trendyol, Hepsiburada and local bazaars.",
    stores:["Trendyol","Hepsiburada","N11.com","Amazon Turkey","Zara Turkey","LC Waikiki","Mavi Jeans"],
    cats:["Leather Goods","Fashion","Ceramics & Tiles","Tea & Spices","Jewellery","Electronics"],
    why:[
      {t:"Turkish leather at source",b:"Istanbul's Grand Bazaar and leather workshops produce world-class jackets, bags and shoes at a fraction of European prices."},
      {t:"Trendyol — fast fashion",b:"Trendyol is one of Europe's fastest-growing fashion platforms with Turkish-exclusive styles and rock-bottom prices."},
      {t:"Turkish ceramics & tiles",b:"Authentic Iznik tiles, hand-painted ceramics and traditional crafts — shipped from Istanbul artisans directly to your home."},
    ],
    faq:[
      {q:"Is Trendyol accessible from outside Turkey?",a:"Trendyol ships to limited countries. Our Istanbul address gives you full access to the complete Trendyol catalogue."},
      {q:"Can I buy Turkish spices and teas?",a:"Yes — Turkish spices, teas and dry food products ship internationally with proper customs documentation."},
    ]
  },
  "saudi-arabia": {
    name:"Saudi Arabia", flag:"🇸🇦", iso:"sa", region:"Middle East & Africa", hubs:"Riyadh",
    tagline:"Saudi exclusives and Gulf deals — forwarded from Riyadh.",
    lede:"Saudi Arabia's booming e-commerce market offers regional deals and exclusives. Get a Riyadh forwarding address to access Jarir, Noon Saudi and Gulf-only brands.",
    stores:["Noon Saudi","Jarir Bookstore","Extra Stores","Al Shaya","Landmark Group","Carrefour KSA"],
    cats:["Electronics","Books & Stationery","Fashion","Home","Arabic Perfumes","Sports"],
    why:[
      {t:"Gulf-exclusive tech deals",b:"Saudi retailers frequently offer promotions and pricing not available in other markets. We monitor and forward on request."},
      {t:"Jarir — the region's best bookstore",b:"Jarir Bookstore carries Arabic books, stationery and electronics at the best prices in the Gulf region."},
      {t:"Tax-free Gulf pricing",b:"0% VAT on many categories in Saudi Arabia makes electronics and luxury goods significantly cheaper than in taxed markets."},
    ],
    faq:[
      {q:"Can you ship from Saudi Arabia to Europe or Asia?",a:"Yes — we forward from Riyadh to all major destinations. Shipping times are typically 5–12 days depending on carrier."},
      {q:"Are there restrictions on what can be shipped from Saudi Arabia?",a:"Alcohol and certain religious items are restricted. Most consumer goods — electronics, fashion, books — ship freely."},
    ]
  },
  "south-africa": {
    name:"South Africa", flag:"🇿🇦", iso:"za", region:"Middle East & Africa", hubs:"Johannesburg",
    tagline:"Takealot, African crafts and Cape wines — forwarded from Johannesburg.",
    lede:"South Africa's e-commerce market offers unique African goods, excellent sports gear and brands not available elsewhere. Get a Johannesburg forwarding address and access Takealot and more.",
    stores:["Takealot","Superbalist","Bash","Zando","Woolworths SA","Sportsmans Warehouse","Cape Union Mart"],
    cats:["African Crafts","Fashion","Outdoor & Safari","Sports","Wine","Biltong & Food"],
    why:[
      {t:"African artisan crafts",b:"Beadwork, Zulu crafts, Ndebele art and hand-woven textiles — authentic African goods shipped worldwide from Johannesburg."},
      {t:"South African wine at source",b:"Stellenbosch and Franschhoek wines at Cape Winelands prices — the world's best value fine wines."},
      {t:"Safari & outdoor gear",b:"Cape Union Mart and Sportsmans Warehouse carry excellent outdoor and safari gear at South African prices."},
    ],
    faq:[
      {q:"Can I ship biltong or South African food internationally?",a:"Biltong and dried meats can be tricky — many countries restrict dried meat imports. Contact us for your specific destination's rules."},
      {q:"Are South African wines available internationally?",a:"Wine ships internationally from SA with proper customs documentation. We advise on your destination country's import allowances."},
    ]
  },
};

// ═══ COUNTRY DETAIL PAGE ═══
function CountryPage() {
  const slug = window.location.pathname.replace(/\/$/, '').split('/').pop();
  const data = LOCATION_DATA[slug];

  if (!data) {
    return (
      <div className="dp-root" style={{ width: "100%" }}>
        <DPHeader active="locations" />
        <section style={{ padding: "120px 40px", textAlign: "center" }}>
          <div className="dp-container" style={{ maxWidth: 480 }}>
            <div style={{ fontSize: 64, marginBottom: 24 }}>🌍</div>
            <h1 style={{ fontSize: 36, marginBottom: 16 }}>Location not found</h1>
            <p style={{ color: "var(--dp-muted)", marginBottom: 24 }}>We couldn't find a page for that country.</p>
            <a href="/locations" className="dp-btn dp-btn-primary">← All locations</a>
          </div>
        </section>
        <DPSiteFooter />
      </div>
    );
  }

  return (
    <div className="dp-root" style={{ width: "100%" }}>
      <DPHeader active="locations" />

      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid var(--dp-line)", padding: "14px 40px" }}>
        <div className="dp-container">
          <nav style={{ fontSize: 13, color: "var(--dp-muted)", display: "flex", gap: 8, alignItems: "center" }}>
            <a href="/locations" style={{ color: "var(--dp-muted)", textDecoration: "none" }}>All locations</a>
            <span>›</span>
            <span style={{ color: "var(--dp-ink)" }}>{data.region}</span>
            <span>›</span>
            <span style={{ color: "var(--dp-accent)", fontWeight: 500 }}>{data.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: "calc(72px * var(--dp-density)) 40px calc(56px * var(--dp-density))" }}>
        <div className="dp-container" style={{ maxWidth: 900 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <img src={`https://flagcdn.com/w80/${data.iso}.png`} alt={data.name} width={56} height={38} style={{ borderRadius: 4, objectFit: "cover", border: "1px solid var(--dp-line)", flexShrink: 0 }} loading="eager" />
            <div className="dp-eyebrow-h">{data.region} · {data.hubs}</div>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 5.6vw, 80px)", lineHeight: 0.97, letterSpacing: "-0.035em", marginBottom: 24 }}>
            <span style={{ fontWeight: 800 }}>Forward from </span>
            <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--dp-accent)" }}>{data.name}</em>.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--dp-muted)", maxWidth: 640, marginBottom: 32 }}>{data.lede}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={`/signin?country=${data.iso}`} className="dp-btn dp-btn-primary" style={{ padding: "14px 22px", fontSize: 15 }}>
              Get my {data.name} address →
            </a>
            <a href="#calculator" className="dp-btn dp-btn-ghost" style={{ padding: "14px 20px", fontSize: 15 }}>Calculate shipping</a>
          </div>
        </div>
      </section>

      {/* Popular stores strip */}
      <section style={{ padding: "28px 40px 36px", borderTop: "1px solid var(--dp-line)", borderBottom: "1px solid var(--dp-line)", background: "var(--dp-paper-2)" }}>
        <div className="dp-container">
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--dp-muted)", marginBottom: 14 }}>Popular stores in {data.name}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {data.stores.map(s => (
              <span key={s} style={{ padding: "7px 14px", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 999, fontSize: 13, fontWeight: 500 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why shop here */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-eyebrow-h">Why forward from {data.name}</div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", marginBottom: 48, maxWidth: 700 }}>
            What makes <em style={{ color: "var(--dp-accent)" }}>{data.name}</em> worth shopping.
          </h2>
          <div className="dp-grid-3" style={{ gap: 20 }}>
            {data.why.map((w, i) => (
              <div key={i} className="dp-card-lift" style={{ padding: 28, background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: "var(--dp-radius)" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--dp-accent)", color: "#fff", display: "grid", placeItems: "center", marginBottom: 16, fontSize: 16, fontWeight: 700, fontFamily: "var(--dp-mono)" }}>{i + 1}</div>
                <h3 style={{ fontSize: 19, marginBottom: 10, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em" }}>{w.t}</h3>
                <p style={{ fontSize: 14, color: "var(--dp-muted)", lineHeight: 1.6 }}>{w.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular categories */}
      <section style={{ padding: "40px 40px 48px", background: "var(--dp-paper-2)" }}>
        <div className="dp-container">
          <div className="dp-eyebrow-h">Popular categories</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
            {data.cats.map(c => (
              <div key={c} style={{ padding: "10px 18px", background: "var(--dp-card)", border: "1px solid var(--dp-line)", borderRadius: 999, fontSize: 14, fontWeight: 500 }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="dp-section" style={{ background: "var(--dp-ink)", color: "var(--dp-paper)" }}>
        <div className="dp-container">
          <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>How it works</div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--dp-paper)", marginBottom: 48 }}>
            Get your <em style={{ color: "var(--dp-accent)" }}>{data.name} address</em> in 60 seconds.
          </h2>
          <div className="dp-grid-4 dp-steps-grid" style={{ gap: 1, background: "rgba(255,255,255,0.08)" }}>
            {[
              { n:"01", t:"Sign up free",        b:`Create your account in 60 seconds and instantly receive your virtual forwarding address in ${data.name}.` },
              { n:"02", t:"Shop online",          b:`Use your ${data.name} address at checkout. Shop from ${data.stores.slice(0,3).join(', ')} and hundreds more.` },
              { n:"03", t:"We receive & check",   b:`Your parcel arrives at our ${data.hubs} warehouse. We photograph it and notify you within hours.` },
              { n:"04", t:"We forward to you",    b:"Choose your carrier, confirm your destination, and we ship door-to-door with full tracking." },
            ].map(s => (
              <div key={s.n} style={{ padding: "28px 24px", background: "var(--dp-ink)" }}>
                <div style={{ fontFamily: "var(--dp-mono)", fontSize: 13, color: "var(--dp-accent)", letterSpacing: "0.1em", marginBottom: 12 }}>{s.n}</div>
                <h3 style={{ fontSize: 18, color: "var(--dp-paper)", marginBottom: 12, fontFamily: "var(--dp-display)", letterSpacing: "-0.02em", fontWeight: 500 }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="dp-section">
        <div className="dp-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="dp-eyebrow-h">Quick estimate</div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", marginBottom: 20 }}>
              Ship from <em style={{ color: "var(--dp-accent)" }}>{data.name}</em>. How much?
            </h2>
            <p style={{ fontSize: 16, color: "var(--dp-muted)", lineHeight: 1.55, maxWidth: 440, marginBottom: 24 }}>
              Pick your destination and weight — get an instant price including our negotiated DHL, FedEx and EMS rates.
            </p>
          </div>
          <DPCountryPicker />
        </div>
      </section>

      {/* FAQ */}
      <section className="dp-section" style={{ background: "var(--dp-paper-2)" }}>
        <div className="dp-container" style={{ maxWidth: 800 }}>
          <div className="dp-eyebrow-h">Frequently asked</div>
          <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", marginBottom: 40 }}>
            {data.name} forwarding <em style={{ color: "var(--dp-accent)" }}>FAQ</em>.
          </h2>
          <DPFaq items={data.faq} />
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "calc(100px * var(--dp-density)) 40px", textAlign: "center" }}>
        <div className="dp-container">
          <img src={`https://flagcdn.com/w80/${data.iso}.png`} alt={data.name} width={56} height={38} style={{ borderRadius: 4, objectFit: "cover", marginBottom: 24, border: "1px solid var(--dp-line)" }} loading="lazy" />
          <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.04em", lineHeight: 0.96, marginBottom: 20 }}>
            Your {data.name} address<br/><em style={{ color: "var(--dp-accent)" }}>is waiting for you.</em>
          </h2>
          <p style={{ fontSize: 18, color: "var(--dp-muted)", maxWidth: 500, margin: "0 auto 28px" }}>Free forever. No subscription. Get set up in under 60 seconds.</p>
          <a href={`/signin?country=${data.iso}`} className="dp-btn dp-btn-primary" style={{ padding: "16px 26px", fontSize: 16 }}>
            Get my {data.name} address →
          </a>
        </div>
      </section>

      <DPSiteFooter />
      <DPChatBubble />
    </div>
  );
}

Object.assign(window, { HowItWorksPage, ServicesPage, LocationsPage, ResourcesPage, CountryPage });
