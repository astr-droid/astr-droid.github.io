import DATA from "/src/data.json";

export default function ResumePage() {
  const featuredExp = DATA.experience.filter((e) => e.featured);

  return (
    <div style={{ padding: "2rem 1rem" }}>
      <p className="print-note">// print or ctrl+p to save as PDF</p>
      <button className="print-btn" onClick={() => window.print()}>
        [ print / save as PDF ]
      </button>

      <div className="resume-page">
        <div className="r-name">{DATA.personal.name}</div>

        <div className="r-contact">
          <a href={`tel:${DATA.personal.phone}`}>{DATA.personal.phone}</a>
          <span>·</span>
          <a href={`mailto:${DATA.personal.email}`}>{DATA.personal.email}</a>
          <span>·</span>
          <a href={DATA.personal.linkedin} target="_blank" rel="noreferrer">linkedin</a>
          <span>·</span>
          <a href={DATA.personal.github} target="_blank" rel="noreferrer">github</a>
          <span>·</span>
          <a href={DATA.personal.portfolio} target="_blank" rel="noreferrer">
            {DATA.personal.portfolio.replace("https://", "")}
          </a>
        </div>

        <div className="r-section-title">Education</div>
        {DATA.education.map((e, i) => (
          <div className="r-edu-item" key={i}>
            <div className="r-edu-header">
              <span className="r-inst">{e.institution}</span>
              <span className="r-period">{e.period}</span>
            </div>
            <div className="r-degree">{e.degree}</div>
            {e.details.length > 0 && (
              <div className="r-edu-details">{e.details.join(" · ")}</div>
            )}
          </div>
        ))}

        <div className="r-section-title">Experience</div>
        {featuredExp.map((e, i) => (
          <div className="r-exp-item" key={i}>
            <div className="r-exp-header">
              <span className="r-company">{e.company}</span>
              <span className="r-period">{e.period}</span>
            </div>
            <div className="r-role">{e.role}</div>
            <ul className="r-bullets">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}

        <div className="r-section-title">Projects</div>
        {DATA.projects.slice(0, 4).map((p, i) => (
          <div className="r-exp-item" key={i}>
            <div className="r-exp-header">
              <span className="r-company">
                {p.name}
                {(p.demo || p.code) && (
                  <span style={{ fontWeight: 400, fontStyle: "italic" }}>
                    {" "}|{" "}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" style={{ color: "#1c1917", textDecoration: "underline" }}>
                        Demo
                      </a>
                    )}
                    {p.demo && p.code && " · "}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" style={{ color: "#1c1917", textDecoration: "underline" }}>
                        GitHub
                      </a>
                    )}
                  </span>
                )}
              </span>
              <span className="r-period">{p.tech.join(", ")}</span>
            </div>
            <ul className="r-bullets">
              <li>{p.description}</li>
            </ul>
          </div>
        ))}

        <div className="r-section-title">Technical Skills</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          {Object.entries(DATA.skills).map(([cat, tags]) => (
            <div className="r-skills-row" key={cat}>
              <span className="r-skills-cat">{cat}:</span>
              <span className="r-skills-val">{tags.join(", ")}</span>
            </div>
          ))}
        </div>

        <div className="r-section-title">Certifications</div>
        <ul className="r-award-list">
          {DATA.certifications.map((c, i) => (
            <li key={i}>
              <strong>{c.name}</strong>
              <span className="r-award-year"> — {c.issuer}, {c.year}</span>
            </li>
          ))}
        </ul>

        <div className="r-section-title">Languages</div>
        <div style={{ fontSize: "0.72rem", color: "#1c1917" }}>
          {DATA.languages.map((l, i) => (
            <span key={i}>
              <strong>{l.name}</strong> ({l.level})
              {i < DATA.languages.length - 1 ? " · " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}