import useFadeIn from "/src/hooks/useFadeIn.js";
import DATA from "/src/data.json";

export default function SkillsPage() {
  useFadeIn([]);

  const credItems = [
    ...DATA.certifications.map((c) => ({
      title: c.name,
      sub: `${c.issuer} · ${c.year}`,
    })),
  ];

  return (
    <div className="section fade-in">
      <div className="section-header">
        <p className="section-label">// tools of the trade</p>
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="skills-grid">
        {Object.entries(DATA.skills).map(([cat, tags], i) => (
          <div
            className="skill-row fade-in"
            key={cat}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="skill-cat">{cat}</div>
            <div className="skill-tags">
              {tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "4rem" }}>
        <div className="section-header">
          <p className="section-label">// credentials</p>
          <h3
            style={{
              fontFamily: "var(--mono)",
              fontWeight: 700,
              fontSize: "1.3rem",
              color: "var(--text)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Certs & Awards
          </h3>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {credItems.map((item, i) => (
            <div
              key={i}
              className="fade-in"
              style={{ background: "var(--bg2)", padding: "1.1rem", transitionDelay: `${i * 0.04}s` }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.25rem",
                  letterSpacing: "0.02em",
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: "0.58rem", color: "var(--muted)", letterSpacing: "0.04em" }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}