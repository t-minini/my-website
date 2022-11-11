import { Link } from "react-scroll";
import style from "./NavbarTm.module.css";

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
          padding: "0",
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
              style={{ fontSize: "1.5rem", paddingTop: "5px", paddingBottom: "5px" }}
              navbarScroll
            >
              <Link
                to="aboutMe"
                offset={-60}
                style={{ textAlign: "right", textDecoration: "none", marginRight: "10px"}}
                className={style.navLink}
              >
                About
              </Link>
              <Link
                to="skills"
                offset={-60}
                style={{
                  marginLeft: "30px",
                  marginRight: "10px",
                  textAlign: "right",
                  textDecoration: "none",
                }}
                className={style.navLink}
              >
                Skills
              </Link>
              <Link
                to="projects"
                offset={-60}
                style={{
                  marginLeft: "30px",
                  marginRight: "10px",
                  textAlign: "right",
                  textDecoration: "none",
                }}
                className={style.navLink}
              >
                Projects
              </Link>
              <Link
                to="contact"
                style={{
                  marginLeft: "30px",
                  marginRight: "10px",
                  textAlign: "right",
                  textDecoration: "none",
                }}
                className={style.navLink}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
