import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Quiz<span>Master</span>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/categories">
          Categories
        </Link>

        <Link to="/profile">
          Profile
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;