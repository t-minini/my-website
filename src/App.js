import style from "./App.module.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Hello } from "./components/Hello/Hello";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { ContactMe } from "./components/ContactMe/ContactMe";
import { Footer } from "./components/Footer/Footer";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
