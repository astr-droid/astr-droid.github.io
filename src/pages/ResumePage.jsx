import DATA from "/src/data.json";

export default function ResumePage() {
  const featuredExp = DATA.experience.filter((e) => e.featured);

  return (
    <div className="section">
      <div className="section-header">
        <p className="section-label">// everything consolidated</p>
        <h2 className="section-title">Resume</h2>
      </div>

      <span>
        <embed src="src\Aadhya_Anand_Resume_V2.pdf" width="100%" height="600px" type="application/pdf" />
      </span>
    </div>
  );
}