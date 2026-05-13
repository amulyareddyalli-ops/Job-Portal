import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">JobHook</h2>

      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
}