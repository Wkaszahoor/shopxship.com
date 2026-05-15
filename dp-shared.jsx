// Shared building blocks for both DeliveringParcel landing variations.
// Exported to window so each variation file can pick what it needs.

const { useState, useEffect, useRef, useMemo } = React;

// ─── Country data ──────────────────────────────────────────────────────
const FROM_COUNTRIES = [
  { code: "US", iso: "us", name: "United States",  x: 24, y: 38 },
  { code: "UK", iso: "gb", name: "United Kingdom", x: 47, y: 30 },
  { code: "DE", iso: "de", name: "Germany",        x: 50, y: 32 },
  { code: "CN", iso: "cn", name: "China",          x: 76, y: 42 },
  { code: "TR", iso: "tr", name: "Turkey",         x: 56, y: 40 },
  { code: "IT", iso: "it", name: "Italy",          x: 51, y: 37 },
  { code: "FR", iso: "fr", name: "France",         x: 48, y: 34 },
  { code: "JP", iso: "jp", name: "Japan",          x: 84, y: 42 },
];

const TO_COUNTRIES = [
  { code: "NG", iso: "ng", name: "Nigeria",      x: 50, y: 56 },
  { code: "KE", iso: "ke", name: "Kenya",        x: 57, y: 60 },
  { code: "ZA", iso: "za", name: "South Africa", x: 54, y: 72 },
  { code: "EG", iso: "eg", name: "Egypt",        x: 55, y: 44 },
  { code: "AE", iso: "ae", name: "UAE",          x: 62, y: 47 },
  { code: "SA", iso: "sa", name: "Saudi Arabia", x: 60, y: 48 },
  { code: "GH", iso: "gh", name: "Ghana",        x: 48, y: 56 },
  { code: "MA", iso: "ma", name: "Morocco",      x: 47, y: 42 },
];

const RETAILERS = [
  "Amazon", "eBay", "ASOS", "Nike", "SHEIN", "Target", "Walmart", "Best Buy",
  "Apple", "Sephora", "Macy's", "Costco",
];

const RETAILER_LOGOS = {
  "Amazon":   { src: "/images/retailers/amazon.svg",  bg: "#FF9900" },
  "eBay":     { src: "/images/retailers/ebay.svg",    bg: "#E53238" },
  "ASOS":     { src: "/images/retailers/asos.ico",    bg: "#2B3C4E" },
  "Nike":     { src: "/images/retailers/nike.svg",    bg: "#111111" },
  "SHEIN":    { src: "/images/retailers/shein.ico",   bg: "#FF3F6C" },
  "Target":   { src: "/images/retailers/target.svg",  bg: "#CC0000" },
  "Walmart":  { src: "/images/retailers/walmart.svg", bg: "#0071CE" },
  "Best Buy": { src: "/images/retailers/bestbuy.ico", bg: "#003F8F" },
  "Apple":    { src: "/images/retailers/apple.svg",   bg: "#555555" },
  "Sephora":  { src: "/images/retailers/sephora.ico", bg: "#000000" },
  "Macy's":   { src: "/images/retailers/macys.svg",   bg: "#E21A2C" },
  "Costco":   { src: "/images/retailers/costco.ico",  bg: "#005DAA" },
};

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
  const svgRef = useRef(null);

  const FLAGS = [
    { iso:"us", lng:-95.71, lat:37.09  },
    { iso:"gb", lng:-3.44,  lat:55.38  },
    { iso:"de", lng:10.45,  lat:51.17  },
    { iso:"fr", lng:2.21,   lat:46.23  },
    { iso:"cn", lng:104.20, lat:35.86  },
    { iso:"jp", lng:138.25, lat:36.20  },
    { iso:"tr", lng:35.24,  lat:38.96  },
    { iso:"ae", lng:53.85,  lat:23.42  },
    { iso:"it", lng:12.57,  lat:41.87  },
    { iso:"no", lng:8.47,   lat:60.47  },
    { iso:"ng", lng:8.68,   lat:9.08   },
    { iso:"ke", lng:37.91,  lat:-0.02  },
    { iso:"za", lng:22.94,  lat:-30.56 },
    { iso:"eg", lng:30.80,  lat:26.82  },
    { iso:"sa", lng:45.08,  lat:23.89  },
    { iso:"ca", lng:-106.35,lat:56.13  },
    { iso:"pk", lng:69.35,  lat:30.37  },
    { iso:"au", lng:133.78, lat:-25.27 },
    { iso:"br", lng:-51.93, lat:-14.24 },
    { iso:"mx", lng:-102.55,lat:23.63  },
  ];

  useEffect(() => {
    const d3 = window.d3;
    const topojson = window.topojson;
    if (!d3 || !topojson || !svgRef.current) return;

    const W = 400, H = 400, R = 175;
    let spinning = true;
    let animId;

    const proj = d3.geoOrthographic()
      .scale(R).rotate([0, -25]).translate([W / 2, H / 2])
      .clipAngle(90);

    const pathGen = d3.geoPath().projection(proj);
    const graticule = d3.geoGraticule().step([20, 20]);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const defs = svg.append("defs");

    const og = defs.append("radialGradient").attr("id","gb-ocean").attr("cx","38%").attr("cy","32%").attr("r","65%");
    og.append("stop").attr("offset","0%").attr("stop-color","#4fc3f7");
    og.append("stop").attr("offset","55%").attr("stop-color","#0277bd");
    og.append("stop").attr("offset","100%").attr("stop-color","#01579b");

    const sh = defs.append("radialGradient").attr("id","gb-sheen").attr("cx","30%").attr("cy","28%").attr("r","40%");
    sh.append("stop").attr("offset","0%").attr("stop-color","#fff").attr("stop-opacity","0.22");
    sh.append("stop").attr("offset","100%").attr("stop-color","#fff").attr("stop-opacity","0");

    // Ocean base
    svg.append("circle").attr("cx",W/2).attr("cy",H/2).attr("r",R).attr("fill","url(#gb-ocean)");

    // Graticule grid
    const gridEl = svg.append("path")
      .datum(graticule())
      .attr("fill","none").attr("stroke","#81d4fa")
      .attr("stroke-width","0.5").attr("opacity","0.4");

    // Countries
    const countryG = svg.append("g");

    // Flags layer
    const flagG = svg.append("g");

    // Sheen + border (on top)
    svg.append("circle").attr("cx",W/2).attr("cy",H/2).attr("r",R).attr("fill","url(#gb-sheen)");
    svg.append("circle").attr("cx",W/2).attr("cy",H/2).attr("r",R).attr("fill","none").attr("stroke","#4fc3f7").attr("stroke-width","1.5").attr("opacity","0.6");

    function isVisible(lng, lat) {
      const r = proj.rotate();
      const dist = d3.geoDistance([lng, lat], [-r[0], -r[1]]);
      return dist < Math.PI / 2;
    }

    function redraw(countries) {
      countryG.selectAll("path").attr("d", pathGen);
      gridEl.attr("d", pathGen);

      flagG.selectAll(".fp").each(function(d) {
        const p = proj([d.lng, d.lat]);
        const vis = isVisible(d.lng, d.lat);
        d3.select(this)
          .attr("cx", p ? p[0] : -999)
          .attr("cy", p ? p[1] : -999)
          .attr("opacity", vis ? 0.9 : 0);
      });
      flagG.selectAll(".fi").each(function(d) {
        const p = proj([d.lng, d.lat]);
        const vis = isVisible(d.lng, d.lat);
        d3.select(this)
          .attr("x", p ? p[0] - 10 : -999)
          .attr("y", p ? p[1] - 7 : -999)
          .attr("opacity", vis ? 1 : 0);
      });
    }

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then(r => r.json())
      .then(world => {
        const countries = topojson.feature(world, world.objects.countries);

        countryG.selectAll("path")
          .data(countries.features).enter().append("path")
          .attr("fill","#2e7d32").attr("stroke","#1b5e20")
          .attr("stroke-width","0.4").attr("opacity","0.9");

        flagG.selectAll(".fp").data(FLAGS).enter().append("circle")
          .attr("class","fp").attr("r",10)
          .attr("fill","rgba(0,8,30,0.78)")
          .attr("stroke","rgba(255,255,255,0.35)").attr("stroke-width","1");

        flagG.selectAll(".fi").data(FLAGS).enter().append("image")
          .attr("class","fi")
          .attr("href", d => `https://flagcdn.com/w20/${d.iso}.png`)
          .attr("width",20).attr("height",14);

        redraw(countries);

        // Drag to rotate
        svg.call(
          d3.drag()
            .on("start", () => { spinning = false; svg.attr("cursor","grabbing"); })
            .on("drag", (ev) => {
              const r = proj.rotate();
              const k = 90 / R;
              proj.rotate([r[0] + ev.dx * k, r[1] - ev.dy * k]);
              redraw(countries);
            })
            .on("end", () => { svg.attr("cursor","grab"); setTimeout(() => spinning = true, 1200); })
        ).attr("cursor","grab");

        // Auto-spin
        function tick() {
          if (spinning) {
            const r = proj.rotate();
            proj.rotate([r[0] + 0.25, r[1]]);
            redraw(countries);
          }
          animId = requestAnimationFrame(tick);
        }
        tick();
      });

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1", maxWidth: 560, overflow: "visible" }}>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", inset: "-8%", borderRadius: "50%", pointerEvents: "none",
        background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`,
        animation: "dp-glow-pulse 4s ease-in-out infinite",
      }}/>

      {/* Mini dashboard */}
      <div style={{
        position: "absolute", bottom: "3%", left: "1%", zIndex: 10,
        background: "rgba(5,10,30,0.85)", backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.13)",
        borderRadius: 12, padding: "10px 14px", color: "#fff", fontSize: 11,
        minWidth: 148, boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}>
        <div style={{ fontWeight: 700, fontSize: 11.5, marginBottom: 8, color: accent, letterSpacing: "0.04em", textTransform: "uppercase" }}>Live Activity</div>
        {[["Active","247 shipments"],["Countries","60+"],["Express","3–6 days"]].map(([k,v]) => (
          <div key={k} style={{ display:"flex", justifyContent:"space-between", gap:18, marginBottom:4 }}>
            <span style={{ opacity:0.55 }}>{k}</span>
            <span style={{ fontWeight:600 }}>{v}</span>
          </div>
        ))}
        <div style={{ marginTop:8, height:3, borderRadius:99, background:"rgba(255,255,255,0.08)", overflow:"hidden" }}>
          <div style={{ width:"72%", height:"100%", background:accent, borderRadius:99, animation:"dp-glow-pulse 2s ease-in-out infinite" }} />
        </div>
      </div>

      <svg ref={svgRef} viewBox="0 0 400 400" style={{ width:"100%", height:"100%", overflow:"visible" }} />
    </div>
  );
}

// ─── Shopper hero visual (globe + girl + floating product cards + flags) ─
function DPShopperHero({ accent = "var(--dp-accent)" }) {
  const CARDS = [
    { iso:"ca", store:"Gucci",       item:"Sunglasses",   price:"$340",    style:{ top:"2%",  left:"1%"  } },
    { iso:"gb", store:"ASOS",        item:"Style Picks",  price:"£45",     style:{ top:"2%",  right:"0%" } },
    { iso:"de", store:"Zalando",     item:"Sneakers",     price:"€89",     style:{ top:"34%", left:"0%"  } },
    { iso:"kr", store:"Olive Young", item:"K-Beauty Kit", price:"₩28,000", style:{ top:"32%", right:"0%" } },
    { iso:"in", store:"Myntra",      item:"Kurta Set",    price:"₹1,299",  style:{ top:"62%", left:"1%"  } },
    { iso:"jp", store:"Rakuten",     item:"Electronics",  price:"¥3,500",  style:{ top:"62%", right:"0%" } },
  ];

  const EDGE_FLAGS = [
    { iso:"fr", style:{ top:"18%", left:"9%"  } },
    { iso:"au", style:{ top:"15%", right:"8%" } },
    { iso:"br", style:{ top:"48%", left:"4%"  } },
    { iso:"sa", style:{ top:"48%", right:"3%" } },
    { iso:"cn", style:{ top:"78%", left:"12%" } },
    { iso:"ae", style:{ top:"78%", right:"10%"} },
    { iso:"it", style:{ top:"28%", left:"7%"  } },
    { iso:"mx", style:{ top:"28%", right:"6%" } },
  ];

  return (
    <div style={{ position:"relative", width:"100%", height:520, maxWidth:520, margin:"0 auto" }}>

      {/* Colourful gradient glow — matches the pink/purple/blue bg in the reference */}
      <div style={{
        position:"absolute", inset:"-6%", pointerEvents:"none",
        background:[
          "radial-gradient(ellipse at 18% 18%, rgba(255,120,170,0.30) 0%, transparent 46%)",
          "radial-gradient(ellipse at 82% 80%, rgba(79,195,247,0.26) 0%, transparent 46%)",
          "radial-gradient(ellipse at 50% 52%, rgba(138,100,255,0.12) 0%, transparent 56%)",
        ].join(","),
        borderRadius:"50%",
      }}/>

      {/* Globe — upper portion, inset from edges so cards have room */}
      <div style={{ position:"absolute", top:"1%", left:"12%", right:"12%", height:"68%", zIndex:2 }}>
        <DPGlobeBall accent={accent} />
      </div>

      {/* Girl illustration — foreground, bottom-center, overlaps globe base */}
      <img
        src="/images/girl-shopper.png"
        alt="International online shopper"
        style={{
          position:"absolute", bottom:0, left:"50%",
          transform:"translateX(-50%)",
          height:"52%", width:"auto",
          objectFit:"contain",
          zIndex:9, pointerEvents:"none",
          filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.18))",
        }}
      />

      {/* Floating product cards */}
      {CARDS.map((c, i) => (
        <div key={i} style={{
          position:"absolute", ...c.style,
          background:"rgba(255,255,255,0.97)",
          backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)",
          border:"1px solid rgba(0,0,0,0.06)",
          borderRadius:12, padding:"8px 11px",
          boxShadow:"0 6px 28px rgba(0,0,0,0.10)",
          display:"flex", alignItems:"center", gap:8,
          minWidth:128, zIndex:7,
          animation:`dp-float-up 0.5s ${0.3 + i * 0.12}s both`,
        }}>
          <img src={`https://flagcdn.com/w20/${c.iso}.png`} width={18} height={12}
            style={{ borderRadius:2, flexShrink:0, objectFit:"cover" }} />
          <div style={{ minWidth:0 }}>
            <div style={{ fontSize:9.5, color:"#aaa", fontWeight:500, letterSpacing:"0.05em", textTransform:"uppercase" }}>{c.store}</div>
            <div style={{ fontSize:12, fontWeight:600, color:"#111", lineHeight:1.3, whiteSpace:"nowrap" }}>{c.item}</div>
            <div style={{ fontSize:11, color:accent, fontWeight:600, marginTop:1 }}>{c.price}</div>
          </div>
        </div>
      ))}

      {/* Circular flag bubbles */}
      {EDGE_FLAGS.map((f, i) => (
        <div key={i} style={{
          position:"absolute", ...f.style,
          width:30, height:30, borderRadius:"50%",
          background:"#fff",
          boxShadow:"0 3px 12px rgba(0,0,0,0.13)",
          display:"grid", placeItems:"center",
          zIndex:7,
          animation:`dp-float-up 0.4s ${0.15 + i * 0.07}s both`,
        }}>
          <img src={`https://flagcdn.com/w20/${f.iso}.png`} width={18} height={12}
            style={{ borderRadius:2, objectFit:"cover" }} />
        </div>
      ))}

      {/* Bottom shopping pills */}
      <div style={{
        position:"absolute", bottom:"-2%", left:"50%",
        transform:"translateX(-50%)",
        display:"flex", gap:8, zIndex:10,
        animation:"dp-float-up 0.5s 1s both",
        whiteSpace:"nowrap",
      }}>
        {[
          { dot:"#ff6b9d", text:"Shop Click Basic" },
          { dot:"#6e5cff", text:"Good Finds Only"  },
        ].map((p, i) => (
          <div key={i} style={{
            background:"rgba(255,255,255,0.95)",
            border:"1px solid rgba(0,0,0,0.07)",
            borderRadius:999, padding:"6px 13px",
            boxShadow:"0 4px 16px rgba(0,0,0,0.09)",
            fontSize:11, fontWeight:600, color:"#333",
            display:"flex", alignItems:"center", gap:6,
          }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:p.dot, display:"inline-block", flexShrink:0 }}/>
            {p.text}
          </div>
        ))}
      </div>
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
          { r: 60,  dur: 8,  iso: "us" },
          { r: 110, dur: 14, iso: "gb" },
          { r: 160, dur: 22, iso: "cn" },
          { r: 200, dur: 30, iso: "tr" },
        ].map((o, i) => (
          <g key={i} style={{ transformOrigin: "200px 200px", animation: `dp-spin ${o.dur}s linear infinite ${i * 0.5}s` }}>
            <g transform={`translate(${200 + o.r} 200)`}>
              <circle r="16" fill="var(--dp-card)" stroke={accent} strokeWidth="1.5" />
              <foreignObject x="-12" y="-8" width="24" height="16">
                <img xmlns="http://www.w3.org/1999/xhtml"
                  src={`https://flagcdn.com/w40/${o.iso}.png`}
                  style={{ width: "100%", height: "100%", borderRadius: "3px", objectFit: "cover", display: "block" }}
                />
              </foreignObject>
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
          <span key={i} style={{ display: "inline-flex", alignItems: "center", padding: "0 32px" }}>
            <img
              src={RETAILER_LOGOS[r] && RETAILER_LOGOS[r].src}
              alt={r}
              height={32}
              style={{ objectFit: "contain", maxWidth: 110, opacity: 0.75 }}
              loading="lazy"
            />
          </span>
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

      <a href={`/signin?country=${to.iso}`} className="dp-btn dp-btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 16, padding: "13px 18px" }}>
        Get my address in {to.name}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
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
        <img src={`https://flagcdn.com/w20/${value.iso}.png`} alt={value.name} width={20} height={14} style={{ borderRadius: 2, objectFit: "cover", flexShrink: 0 }} />
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
              <img src={`https://flagcdn.com/w20/${c.iso}.png`} alt={c.name} width={20} height={14} style={{ borderRadius: 2, objectFit: "cover", flexShrink: 0 }} />
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
  DPLogo, DPNav, DPGlobe, DPGlobeBall, DPWorldMap, DPOrbits, DPShopperHero,
  DPRetailerStrip, DPCountryPicker, DPFaq, DPFooter,
  FROM_COUNTRIES, TO_COUNTRIES, RETAILERS, RETAILER_LOGOS,
});
