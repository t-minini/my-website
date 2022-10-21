import { Link } from "react-scroll";
import style from "./Navbar.module.css";

export function Navbar() {
  return (
    <>
      <nav className={style.navbarContainer}>
        <div className={style.tm}>
          <Link to="hello" smooth={true}>
            <p>
              <span className={style.spanT}> t</span>
              <span className={style.spanM}>m</span>
            </p>
          </Link>
        </div>
        <div>
          <ul className={style.navbarList}>
            <Link to="aboutMe" smooth={true} offset={-50}>
              <li>About Me</li>
            </Link>
            <Link to="skills" smooth={true} offset={-50}>
              <li>Skills</li>
            </Link>
            <Link to="projects" smooth={true} offset={-50}>
              <li>Projects</li>
            </Link>
            <Link to="contact" smooth={true} offset={-100}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
