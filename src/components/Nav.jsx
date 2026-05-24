import ColorWheel from "./ColorWheel.jsx";

const NAV_ITEMS = [
  { id: "home", label: "home" },
  { id: "experience", label: "exp" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "resume", label: "resume" },
];

export default function Nav({
  page,
  theme,
  hue,
  menuOpen,
  wheelOpen,
  onNavigate,
  onToggleTheme,
  onHueChange,
  onToggleWheel,
  onToggleMenu,
}) {
  return (
    <>
      <nav className="nav">
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
        >
          <span className="logo-bracket">[</span>aa
          <span className="logo-bracket">]</span>
        </a>

        <div className="nav-links">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.id}
              href="#"
              className={page === n.id ? "active" : ""}
              onClick={(e) => { e.preventDefault(); onNavigate(n.id); }}
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="nav-controls">
          <button className="icon-btn" onClick={onToggleTheme}>
            {theme === "dark" ? "☀" : "☽"}
          </button>

          <div className="wheel-wrap">
            <button className="icon-btn" onClick={onToggleWheel} title="accent colour">
              ◉
            </button>
            {wheelOpen && (
              <div className="wheel-popover" onClick={(e) => e.stopPropagation()}>
                <div className="wheel-label">accent colour</div>
                <ColorWheel hue={hue} onChange={onHueChange} />
                <div className="wheel-hue-val">hsl({hue}, 72%, 65%)</div>
              </div>
            )}
          </div>

          <button className="icon-btn hamburger" onClick={onToggleMenu}>
            {menuOpen ? "✕" : "≡"}
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((n) => (
          <a
            key={n.id}
            href="#"
            style={page === n.id ? { color: "var(--accent)" } : {}}
            onClick={(e) => { e.preventDefault(); onNavigate(n.id); }}
          >
            {n.label}
          </a>
        ))}
      </div>
    </>
  );
}