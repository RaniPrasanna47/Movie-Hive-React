import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Movie Hive</Link>
    </nav>
  );
}

export default Navbar;
