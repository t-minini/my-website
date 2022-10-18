import style from "./AboutMe.module.css";
import { useInView } from "react-intersection-observer";
import tulioAvatar from "./../../assets/images/tulio.png";

export function AboutMe() {
  const { ref: aboutMeRef, inView: aboutMeIsVisible } = useInView();
  const { ref: aboutMeImgRef, inView: aboutMeImgIsVisible } = useInView();

  return (
    <>
      <section id="aboutMe" className={style.aboutContainer}>
        <h2
          ref={aboutMeRef}
          className={`${aboutMeIsVisible ? style.helloFadeInLeft : ""}`}
        >
          About Me
        </h2>
        <article className={style.textAndImgContainer}>
          <p className={`${aboutMeImgIsVisible ? style.helloFadeInLeft : ""}`}>
            "Hello, my name is Tulio Minini, a former interior designer who
            discovered his passion for web development. <br />
            <br />
            In August 2022, I graduated from a full-time intensive Full-stack
            Web Development Bootcamp of nine weeks (360 hours) at Ironhack São
            Paulo. <br />
            <br />I feel excited about building functional AND beautiful things,
            love working in teams, sharing knowledge, and delivering projects
            that require thoroughness and patience. I firmly believe that, in
            the work environment, we need to feel safe and encouraged to learn,
            explore and share experiences to help the company's growth and our
            own. <br />
            <br />I have a small vinyl collection, which keeps growing. I love
            cats, travelling, and attending concerts, and I am a big fan of Star
            Wars AND Star Trek (both are amazing). I feel comfortable, happy and
            safe when surrounded by kind and good-hearted people who want to
            make the world a better place."
          </p>
          <img
            ref={aboutMeImgRef}
            className={`${style.tulioAvatar} ${
              aboutMeImgIsVisible ? style.helloFadeInRight : ""
            }`}
            src={tulioAvatar}
            alt="my Memoji"
          />
        </article>
      </section>
    </>
  );
}
