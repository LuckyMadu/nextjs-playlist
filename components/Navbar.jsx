import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/">
              <a>SIGN IN</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/">
              <a>SIGN OUT</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
