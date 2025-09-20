export default function FilterControls({ filters, dispatch }) {
  return (
    <div style={{ margin: "15px 0" }}>
      <select
        value={filters.state}
        onChange={(e) =>
          dispatch({ type: "SET_STATE", payload: e.target.value })
        }
        style={{ padding: "5px", marginRight: "10px" }}
      >
        <option value="open">Open</option>
        <option value="closed">Closed</option>
        <option value="all">All</option>
      </select>

      <input
        type="text"
        placeholder="Filter by label"
        value={filters.label}
        onChange={(e) =>
          dispatch({ type: "SET_LABEL", payload: e.target.value })
        }
        style={{ padding: "5px" }}
      />
    </div>
  );
}
