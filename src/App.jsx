import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IssuesPage from "./pages/IssuesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repo/:owner/:repoName" element={<IssuesPage />} />
    </Routes>
  );
}
