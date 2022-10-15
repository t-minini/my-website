import style from "./Hello.module.css";

export function Hello() {
  return (
    <>
      <header id="hello" className={style.helloContainer}>
        <section className={style.helloContent}>
          <h2>Hello, I am</h2>
          <h1> TULIO MININI,</h1>
          <h3>Full-stack Developer</h3>
        </section>
      </header>
    </>
  );
}
