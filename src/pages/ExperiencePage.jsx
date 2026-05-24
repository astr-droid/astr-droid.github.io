import { useState } from "react";
import useFadeIn from "../hooks/useFadeIn.js";
import DATA from "/src/data.json";

export default function ExperiencePage() {
  const [filter, setFilter] = useState("featured");

  const exp =
    filter === "all"
      ? DATA.experience
      : DATA.experience.filter((e) => e.featured);

  // Re-run the observer whenever filter changes so newly rendered items animate in
  useFadeIn([filter]);

  return (
    <div className="section fade-in">
      <div className="section-header">
        <p className="section-label">// work & research</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="tab-bar">
        <button
          className={`tab-btn ${filter === "featured" ? "active" : ""}`}
          onClick={() => setFilter("featured")}
        >
          featured
        </button>
        <button
          className={`tab-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          all ({DATA.experience.length})
        </button>
      </div>

      <div className="exp-list">
        {exp.map((e, i) => (
          <div
            className="exp-item fade-in"
            key={e.company + e.role}
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <div className="exp-track">
              <div className="exp-dot" />
              <div className="exp-line-seg" />
            </div>
            <div>
              <div className="exp-header-row">
                <span className="exp-company">{e.company}</span>
                <span className="exp-period">{e.period}</span>
              </div>
              <div className="exp-role">{e.role}</div>
              <ul className="exp-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}