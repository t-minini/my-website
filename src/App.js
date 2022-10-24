import style from "./App.module.css";

import { Hello } from "./components/Hello/Hello";
import { NavbarTm } from "./components/NavbarTm/NavbarTm";
import { Skills } from "./components/Skills/Skills";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { ContactMe } from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <div className={style.page}>
        <NavbarTm />
        <Hello />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
