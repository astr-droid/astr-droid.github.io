import { useState } from "react";
import { StatusBadge, StatusBar } from "../components/Status.jsx";
import ProjectLink from "../components/ProjectLink.jsx";
import useFadeIn from "/src/hooks/useFadeIn.js";
import DATA from "/src/data.json";

const FILTERS = ["featured", "all", "complete", "in-progress", "archived"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("featured");

  const list =
    filter === "featured"
      ? DATA.projects.filter((p) => p.featured)
      : filter === "all"
      ? DATA.projects
      : DATA.projects.filter((p) => p.status === filter);

  useFadeIn([filter]);

  return (
    <div className="section fade-in">
      <div className="section-header">
        <p className="section-label">// all work</p>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="tab-bar">
        {FILTERS.map((s) => (
          <button
            key={s}
            className={`tab-btn ${filter === s ? "active" : ""}`}
            onClick={() => setFilter(s)}
          >
            {s === "all"
              ? `all (${DATA.projects.length})`
              : s === "featured"
              ? `featured (${DATA.projects.filter((p) => p.featured).length})`
              : s}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p style={{ color: "var(--muted)", fontSize: "0.65rem", letterSpacing: "0.06em", marginTop: "1rem" }}>
          // no projects with this status
        </p>
      ) : (
        <div className="projects-grid">
          {list.map((p, i) => (
            <div
              className="project-card fade-in"
              key={p.name}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="project-card-top">
                <div className="project-name">{p.name}</div>
                <StatusBadge status={p.status} />
              </div>
              <div className="project-desc">{p.description}</div>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-footer">
                <div className="project-links-row">
                  <ProjectLink href={p.demo} label="▶ demo" disabled={!p.demo} />
                  <ProjectLink href={p.code} label="⌥ github" disabled={!p.code} />
                </div>
              </div>
              <StatusBar status={p.status} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}