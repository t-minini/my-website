import style from "./ContactMe.module.css";

import gmail from "./../../assets/images/gmail.svg";
import github from "./../../assets/images/github.svg";
import linkedin from "./../../assets/images/linkedin.svg";
import downloadCv from "./../../assets/images/download-cv.png";
import cvPdf from "./../../assets/resume/tulio-minini-cv-en-gb-br.pdf";

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
              title="Send an e-mail"
            >
              <img src={gmail} alt="gmail logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/tulio-minini/"
              target={"_blank"}
              rel="noreferrer"
              title="LinkedIn Profile"
            >
              <img src={linkedin} alt="linkedin logo" />
            </a>
            <a
              href="https://github.com/t-minini"
              target={"_blank"}
              rel="noreferrer"
              title="GitHub Profile"
            >
              <img src={github} alt="github logo" />
            </a>
            <a href={cvPdf} download target={"_blank"} rel="noreferrer" title="Download CV">
              <img src={downloadCv} alt="cv download icon" />
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
