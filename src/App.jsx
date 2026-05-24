import { useState, useEffect } from "react";
import "./style.css";
import Nav from "./components/Nav.jsx";
import HomePage from "./pages/HomePage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";

export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || "dark"; } catch { return "dark"; }
  });
  const [hue, setHue] = useState(() => {
    try { return parseInt(localStorage.getItem("hue") || "270"); } catch { return 270; }
  });
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [wheelOpen, setWheelOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", hue);
    try { localStorage.setItem("hue", hue); } catch {}
  }, [hue]);

  const navigate = (id) => {
    setPage(id);
    setMenuOpen(false);
  };

  return (
    <>
      <Nav
        page={page}
        theme={theme}
        hue={hue}
        menuOpen={menuOpen}
        wheelOpen={wheelOpen}
        onNavigate={navigate}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        onHueChange={setHue}
        onToggleWheel={() => setWheelOpen((o) => !o)}
        onToggleMenu={() => setMenuOpen((o) => !o)}
      />

      <main onClick={() => { if (wheelOpen) setWheelOpen(false); }}>
        {page === "home"       && <HomePage setPage={setPage} />}
        {page === "experience" && <ExperiencePage />}
        {page === "projects"   && <ProjectsPage />}
        {page === "skills"     && <SkillsPage />}
        {page === "resume"     && <ResumePage />}
      </main>

      <footer className="footer">
        designed & built by aadhya anand ( ´･･)ﾉ(._.`) | built using react and deployed on github pages
      </footer>
    </>
  );
}