import style from "./Skills.module.css";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

// Icons
import cssIcon from "./../../assets/images/css3-icon.png";
import htmlIcon from "./../../assets/images/html-icon.png";
import nodeIcon from "./../../assets/images/nodejs-icon.png";
import githubIcon from "./../../assets/images/github-icon.png";
import mongoDBIcon from "./../../assets/images/mongodb-icon.png";
import expressIcon from "./../../assets/images/express-js-icon.png";
import reactIcon from "./../../assets/images/react-native-icon.png";
import bootstrapIcon from "./../../assets/images/bootstrap-icon.png";
import javaScriptIcon from "./../../assets/images/javascript-icon.png";
import materialUIIcon from "./../../assets/images/material-ui-icon.png";

export function Skills() {
  return (
    <>
      <section id="skills" className={style.skillsContainer}>
        <h2>Skills</h2>
        <MouseParallaxContainer
          className={style.parallax}
          containerStyles={{
            gridTemplateColumns: "auto auto auto auto auto",
          }}
          resetOnLeave
        >
          <MouseParallaxChild factorX={0.08} factorY={0.06}>
            <img
              src={reactIcon}
              alt="react js icon"
              className={style.reactIcon}
              title="ReactJS"
            />
          </MouseParallaxChild>

          <MouseParallaxChild factorX={0.09} factorY={0.09}>
            <img
              src={bootstrapIcon}
              alt="bootstrap icon"
              className={style.bootstrapIcon}
              title="Bootstrap"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.13} factorY={0.15}>
            <img
              src={cssIcon}
              alt="css icon"
              className={style.cssIcon}
              title="CSS"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.11} factorY={0.06}>
            <img
              src={expressIcon}
              alt="express js icon"
              className={style.expressIcon}
              title="ExpressJS"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.10} factorY={0.1}>
            <img
              src={htmlIcon}
              alt="html icon"
              className={style.htmlIcon}
              title="HTML"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.12} factorY={0.13}>
            <img
              src={javaScriptIcon}
              alt="javascript icon"
              className={style.javascriptIcon}
              title="JavaScript"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.11} factorY={0.09}>
            <img
              src={materialUIIcon}
              alt="material ui icon"
              className={style.materialuiIcon}
              title="MaterialUI"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.10} factorY={0.15}>
            <img
              src={mongoDBIcon}
              alt="mongo db icon"
              className={style.mongodbIcon}
              title="MongoDB"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.13} factorY={0.2}>
            <img
              src={nodeIcon}
              alt="node js icon"
              className={style.nodeIcon}
              title="NodeJS"
            />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.15} factorY={0.18}>
            <img
              src={githubIcon}
              alt="github icon"
              className={style.githubIcon}
              title="GitHub"
            />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </section>
    </>
  );
}
