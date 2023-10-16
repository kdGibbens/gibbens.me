import Link from "next/link";

const NavBar = () => {
  return (
    <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
            </ul>
          </nav>
        </header>
  );
};

export default NavBar;
