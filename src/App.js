import style from "./App.module.css";

import { Hello } from "./components/Hello/Hello";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { ContactMe } from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <div className={style.page}>
        <Navbar />
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
