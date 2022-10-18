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
          className={`${style.projectsCards} ${
            projectsIsVisible ? style.projectsFadeInRight : ""
          }`}
        >
          {projects.map((projects) => {
            return (
              <div className={style.projects} key={projects.id}>
                <a href={projects.link} target="_blank" rel="noreferrer">
                  <img src={`${projects.img}`} alt="project" />
                </a>
                <h3>{projects.project}</h3>
                <p>{projects.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
