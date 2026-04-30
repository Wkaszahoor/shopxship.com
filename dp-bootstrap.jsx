// dp-bootstrap.jsx — shared boot for every page.
// Defines TWEAK_DEFAULTS, applies tweak tokens to <html>, mounts the page
// (provided by each page's own script as window.__DPPage) plus the tweaks panel.

const DP_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c8553d",
  "density": 1.0,
  "theme": "light",
  "fontPair": "editorial",
  "heroVisual": "globe",
  "heroHeadline": "Shop Anywhere.\nShip Everywhere."
}/*EDITMODE-END*/;

function DPApp() {
  const [tweaks, setTweak] = useTweaks(DP_TWEAK_DEFAULTS);
  const Page = window.__DPPage || (() => <div style={{padding:60}}>No page mounted.</div>);

  React.useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-dp-theme", tweaks.theme);
    r.setAttribute("data-dp-fontpair", tweaks.fontPair);
    r.style.setProperty("--dp-accent", tweaks.accent);
    r.style.setProperty("--dp-accent-soft", tweaks.accent + "22");
    r.style.setProperty("--dp-density", tweaks.density);
  }, [tweaks]);

  return (
    <>
      <div className="dp-root" style={{ minHeight: "100vh" }}>
        <Page tweaks={tweaks} />
      </div>
      <DPChatBubble />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand" />
        <TweakColor label="Primary accent" value={tweaks.accent} onChange={v => setTweak("accent", v)} />
        <TweakRadio label="Theme" value={tweaks.theme} onChange={v => setTweak("theme", v)} options={["light","dark"]} />
        <TweakSelect label="Font pairing" value={tweaks.fontPair} onChange={v => setTweak("fontPair", v)} options={["editorial","modern","classic"]} />
        <TweakSection label="Layout" />
        <TweakSlider label="Density" value={tweaks.density} min={0.85} max={1.15} step={0.01} onChange={v => setTweak("density", v)} />
        <TweakRadio label="Hero visual" value={tweaks.heroVisual} onChange={v => setTweak("heroVisual", v)} options={["globe","map","orbits"]} />
        <TweakSection label="Copy" />
        <TweakText label="Hero headline" value={tweaks.heroHeadline} onChange={v => setTweak("heroHeadline", v)} />
      </TweaksPanel>
    </>
  );
}

window.DPMount = function() {
  ReactDOM.createRoot(document.getElementById("root")).render(<DPApp />);
};
