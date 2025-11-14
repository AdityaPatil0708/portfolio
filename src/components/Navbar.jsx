import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to = "/">home</Link></li>
        <li><a href="#">about</a></li>
        <li><Link to = "/projects">projects</Link></li>
        <li><a href="https://drive.google.com/file/d/1V1UdJF6jzxoka0zY-rQbQXaepCblkUxD/view?usp=sharing">resume</a></li>
      </ul>
    </nav>
  );
}
