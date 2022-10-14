import style from "./Projects.module.css";
import projects from "./../../projects.json";

// console.log(projects);

export function Projects() {
  // console.log(projects);
  return (
    <>
      <section className={style.projectsContainer}>
        <h2>Projects</h2>
        <div className={style.projectsCards}>
          {projects.map((projects) => {
            return (
              <div className={style.projects} key={projects.id}>
                <a
                  href={projects.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`${projects.img}`}
                    alt="project"
                  />
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
