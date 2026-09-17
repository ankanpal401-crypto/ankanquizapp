import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>QuizMaster</h2>

      <Link to="/dashboard">
        🏠 Dashboard
      </Link>

      <Link to="/categories">
        📚 Categories
      </Link>

      <Link to="/profile">
        👤 Profile
      </Link>

      <Link to="/">
        🚪 Logout
      </Link>
    </aside>
  );
}

export default Sidebar;