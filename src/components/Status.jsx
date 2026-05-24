const STATUS_MAP = {
  complete: { label: "complete", cls: "status-complete" },
  "in-progress": { label: "in progress", cls: "status-in-progress" },
  archived: { label: "archived", cls: "status-archived" },
};

const BAR_CLS = {
  complete: "fill-complete",
  "in-progress": "fill-in-progress",
  archived: "fill-archived",
};

export function StatusBadge({ status }) {
  const s = STATUS_MAP[status] || STATUS_MAP.archived;
  return (
    <span className={`status-badge ${s.cls}`}>
      <span className="s-dot" />
      {s.label}
    </span>
  );
}

export function StatusBar({ status }) {
  return (
    <div className="status-bar">
      <div className={`status-bar-fill ${BAR_CLS[status] || "fill-archived"}`} />
    </div>
  );
}