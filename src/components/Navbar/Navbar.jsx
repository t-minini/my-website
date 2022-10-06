import style from "./Navbar.module.css";

export function Navbar() {
  return (
    <>
      <div className={style.navbarContainer}>
        <div className={style.tm}>
          <p><span>t</span>m</p>
        </div>
        <div>
          <ul className={style.navbarList}>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
    </>
  );
}
