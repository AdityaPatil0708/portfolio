import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to = "/">home</Link></li>
        <li><a href="/about">about</a></li>
        <li><Link to = "/projects">projects</Link></li>
        <li><a href="https://drive.google.com/file/d/1OzS5iCJWlJKqsmrREoIbMyrxCWRNTS0B/view?usp=drive_link">resume</a></li>
      </ul>
    </nav>
  );
}
