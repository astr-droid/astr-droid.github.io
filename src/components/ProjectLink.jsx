export default function ProjectLink({ href, label, disabled }) {
  if (disabled) {
    return <span className="proj-link proj-link-disabled">{label}</span>;
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className="proj-link">
      {label}
    </a>
  );
}