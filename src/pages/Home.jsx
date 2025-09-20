import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [repo, setRepo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!repo.includes("/")) return;
    const [owner, repoName] = repo.split("/");
    navigate(`/repo/${owner}/${repoName}`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>GitHub Issue Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          style={{ padding: "6px", width: "250px" }}
        />
        <button
          type="submit"
          style={{ padding: "6px 12px", marginLeft: "5px" }}
        >
          View Issues
        </button>
      </form>
    </div>
  );
}
