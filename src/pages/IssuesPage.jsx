import { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IssueCard from "../components/IssueCard";
import FilterControls from "../components/FilterControls";

const initialFilter = { state: "open", label: "" };

function filterReducer(state, action) {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, state: action.payload };
    case "SET_LABEL":
      return { ...state, label: action.payload };
    default:
      return state;
  }
}

export default function IssuesPage() {
  const { owner, repoName } = useParams();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, dispatch] = useReducer(filterReducer, initialFilter);

  useEffect(() => {
    async function fetchIssues() {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://api.github.com/repos/${owner}/${repoName}/issues?state=${filters.state}`
        );
        setIssues(res.data);
      } catch (err) {
        setError("Failed to fetch issues.");
      } finally {
        setLoading(false);
      }
    }
    fetchIssues();
  }, [owner, repoName, filters.state]);

  const filteredIssues = issues.filter((issue) =>
    filters.label
      ? issue.labels.some((lbl) =>
          lbl.name.toLowerCase().includes(filters.label.toLowerCase())
        )
      : true
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Issues for {owner}/{repoName}
      </h2>

      <FilterControls filters={filters} dispatch={dispatch} />

      {loading && <p>Loading issues...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && filteredIssues.length === 0 && (
        <p>No issues found.</p>
      )}

      {filteredIssues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}
