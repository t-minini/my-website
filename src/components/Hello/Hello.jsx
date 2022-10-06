import style from "./Hello.module.css";

export function Hello() {
  return (
    <>
      <div className={style.helloContainer}>
        <div className={style.helloContent}>
          <h2>Hello, I am</h2>
          <h1> TULIO MININI,</h1>
          <h3>Full-stack Developer</h3>
        </div>
      </div>
    </>
  );
}
