import StarField from "../components/StarField.jsx";
import { StatusBadge, StatusBar } from "../components/Status.jsx";
import useFadeIn from "../hooks/useFadeIn.js";
import DATA from "/src/data.json";

export default function HomePage({ setPage }) {
  const featured = DATA.projects.filter((p) => p.featured);
  useFadeIn([]);

  return (
    <>
      <section className="hero">
        <StarField />
        <div className="hero-grid" />
        <div className="scanlines" />

        <span className="hero-left">
          <div>
            <div className="hero-tag">
              <span className="blink-dot" /> sys:online // uw-ce-2030
            </div>
            <h1 className="hero-name">
              AADHYA<br />
              <span className="accent">ANAND</span>
            </h1>
            <p className="hero-sub">{DATA.personal.bio}</p>
            <div className="hero-links">
              <a href={DATA.personal.linkedin} target="_blank" rel="noreferrer" className="pill">
                linkedin ↗
              </a>
              <a href={DATA.personal.github} target="_blank" rel="noreferrer" className="pill">
                github ↗
              </a>
              <a href={`mailto:${DATA.personal.email}`} className="pill">email</a>
              <button className="pill primary" onClick={() => setPage("resume")}>
                resume →
              </button>
            </div>
          </div>
        </span>

        <div className="hero-right">
          <div className="photo-frame">
            <span className="corner-tag">aadhya.exe</span>
            <img src={DATA.personal.photo} alt={DATA.personal.name} />
            <div className="photo-overlay">
              <div className="photo-name">{DATA.personal.name}</div>
              <div className="photo-title">{DATA.personal.title}</div>
              <div className="photo-facts">
                {DATA.personal.funFacts.map((f, i) => (
                  <div key={i} className="photo-fact">{f}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section fade-in">
        <div
          className="section-header"
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}
        >
          <div>
            <p className="section-label">// selected work</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>
        </div>

        <div className="feat-grid">
          {featured.map((p, i) => (
            <div className="feat-card fade-in" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="feat-num">// {String(i + 1).padStart(2, "0")}</div>
              <div className="feat-name">{p.name}</div>
              <div className="feat-desc">{p.description}</div>
              <div className="feat-tech">
                {p.tech.map((t) => <span key={t} className="feat-tag">{t}</span>)}
              </div>
              <div className="feat-footer">
                <div className="feat-links">
                  <a
                    href={p.demo || "#"}
                    target={p.demo ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`feat-link ${!p.demo ? "feat-link-off" : ""}`}
                    onClick={!p.demo ? (e) => e.preventDefault() : undefined}
                  >
                    ▶ demo
                  </a>
                  <a
                    href={p.code || "#"}
                    target={p.code ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`feat-link ${!p.code ? "feat-link-off" : ""}`}
                    onClick={!p.code ? (e) => e.preventDefault() : undefined}
                  >
                    ⌥ code
                  </a>
                </div>
                <StatusBadge status={p.status} />
              </div>
              <StatusBar status={p.status} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}