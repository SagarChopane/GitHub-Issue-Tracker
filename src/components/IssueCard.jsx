export default function IssueCard({ issue }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "4px",
      }}
    >
      <h4>
        #{issue.number} - {issue.title}
      </h4>
      <p>Author: {issue.user.login}</p>
      <div>
        {issue.labels.map((lbl) => (
          <span
            key={lbl.id}
            style={{
              display: "inline-block",
              background: "#eee",
              padding: "2px 6px",
              marginRight: "5px",
              borderRadius: "3px",
              fontSize: "12px",
            }}
          >
            {lbl.name}
          </span>
        ))}
      </div>
    </div>
  );
}
