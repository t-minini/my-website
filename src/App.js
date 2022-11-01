import style from "./App.module.css";

import { BackToTop } from "./components/BakToTop/BackToTop";
import { Hello } from "./components/Hello/Hello";
import { Skills } from "./components/Skills/Skills";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { NavbarTm } from "./components/NavbarTm/NavbarTm";
import { ContactMe } from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <div className={style.page}>
        <NavbarTm />
        <Hello />
        <BackToTop />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
