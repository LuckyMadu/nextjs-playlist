import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, loading } = useSession();

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
          {!session && (
            <li className="nav-item active">
              <Link href="/api/auth/signin">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  SIGN IN
                </a>
              </Link>
            </li>
          )}
          {session && (
            <li className="nav-item active">
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  SIGN OUT
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
