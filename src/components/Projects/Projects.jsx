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
              <div>
                <Card
                  style={{ width: "21rem", height: "30rem" }}
                  key={projects.id}
                  className={style.projectCard}
                >
                  <Card.Img variant="top" src={`${projects.img}`} />
                  <Card.Body>
                    <Card.Title>{projects.project}</Card.Title>
                    <Card.Text style={{ height: "7.5em" }}>
                      {projects.description}
                    </Card.Text>
                    <div className={style.cardBtn}>
                      <a
                        href={projects.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className={style.btn} variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                      <a
                        href={projects.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className={style.btn} variant="outline-primary">
                          Website
                        </Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
