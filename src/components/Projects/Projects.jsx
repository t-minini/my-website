import style from "./Projects.module.css";
import projects from "./../../projects.json";
import { useInView } from "react-intersection-observer";

export function Projects() {
  const { ref: projectsRef, inView: projectsIsVisible } = useInView();

  return (
    <>
      <section id="projects" className={style.projectsContainer}>
        <h2 className={`${projectsIsVisible ? style.projectsFadeInLeft : ""}`}>
          Projects
        </h2>
        <div
          ref={projectsRef}
          className={`${style.cardsContainer} ${
            projectsIsVisible ? style.projectsFadeInRight : ""
          }`}
        >
          {projects.map((projects) => {
            return (
              <div key={projects.id} className={style.card}>
                  <img src={`${projects.img}`} className={style.cardImg} alt=""/>
                  <div className={style.cardBody}>
                    <h5>{projects.project}</h5>
                    <div className={style.cardBtns}>
                      <a
                        href={projects.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className={style.btn}>
                          GitHub
                        </button>
                      </a>
                      <a
                        href={projects.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className={style.btn}>
                          Website
                        </button>
                      </a>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
