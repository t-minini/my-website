import style from "./Navbar.module.css";

export function Navbar() {
  return (
    <>
      <nav className={style.navbarContainer}>
        <div className={style.tm}>
          <p>
            <span className={style.spanT}>  t</span><span className={style.spanM}>m</span> 
          </p>
        </div>
        <div>
          <ul className={style.navbarList}>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
