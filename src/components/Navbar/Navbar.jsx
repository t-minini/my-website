import { Link } from "react-scroll";
import style from "./Navbar.module.css";

// Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export function NavbarTm() {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "rgb(128, 128, 128, 0.1)",
          position: "fixed",
          width: "100%",
        }}
        expand="lg"
        sticky="top"
      >
        <Container
          fluid
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link
            className="me-auto my-2 my-lg-0"
            to="hello"
            
            style={{ textDecoration: "none" }}
          >
            <Navbar.Brand className={style.tm}>
              <span className={style.spanT}>t</span>
              <span className={style.spanM}>m</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ fontSize: "1.2rem", marginRight: "20px" }}
              navbarScroll
            >
              <Link
                to="aboutMe"
                offset={-60}
                style={{ marginRight: "20px" }}
              >
                About
              </Link>
              <Link
                to="skills"
                
                offset={-60}
                style={{ marginRight: "20px" }}
              >
                Skills
              </Link>
              <Link
                to="projects"
                
                offset={-60}
                style={{ marginRight: "20px" }}
              >
                Projects
              </Link>
              <Link to="contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
