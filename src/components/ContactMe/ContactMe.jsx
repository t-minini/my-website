import style from "./ContactMe.module.css";

import gmail from "./../../assets/images/gmail.svg";
import github from "./../../assets/images/github.svg";
import linkedin from "./../../assets/images/linkedin.svg";

export function ContactMe() {
  return (
    <>
      <footer id="contact" className={style.contactContainer}>
        <article className={style.contactContent}>
          <p>
            "If you would like to get in touch to discuss a job opportunity, or
            which saga is better - Star Wars or Star Trek, or even exchange cats
            memes, feel free to contact me through my email or profiles on
            LinkedIn and GitHub.""
          </p>

          <figure className={style.contactIcons}>
            <a
              href="mailto:tulio.mminini@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/tulio-minini/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin logo" />
            </a>
            <a
              href="https://github.com/t-minini"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={github} alt="github logo" />
            </a>
          </figure>
        </article>
        <div className={style.copyright}>
          <p>© 2022 Tulio Minini</p>
        </div>
      </footer>
    </>
  );
}
