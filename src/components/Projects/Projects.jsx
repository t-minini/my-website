import style from "./Projects.module.css";
import projects from "./../../projects.json";
import { useInView } from "react-intersection-observer";

// Bootstrap Components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
              <div key={projects.id} className={style.card}>
                {/* <Card
                  style={{ width: "21rem", height: "30rem" }}
                  className={style.projectCard}
                > */}
                  {/* <Card.Img
                    variant="top"
                    src={`${projects.img}`}
                    className={style.cardImg}
                  /> */}

                  <img src={`${projects.img}`} className={style.cardImg} alt=""/>
                  <div className={style.card_body}>
                    {/* <Card.Title>{projects.project}</Card.Title> */}
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
                {/* </Card> */}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
