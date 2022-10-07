import style from "./AboutMe.module.css";

import tulioAvatar from "./../../assets/images/tulio.png";

export function AboutMe() {
  return (
    <>
      <div className={style.aboutContainer}>
        <h2>About Me</h2>
        <div className={style.textAndImgContainer}>
          <p>
            <span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
            <span>"</span>
          </p>
          <img
            className={style.tulioAvatar}
            src={tulioAvatar}
            alt="my Memoji"
          />
        </div>
      </div>
    </>
  );
}
