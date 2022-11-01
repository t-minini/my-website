import React from "react";
import style from "./BackToTop.module.css";
import { useEffect, useState } from "react";
import arrow from "./../../assets/images/arrow-up.svg"

export function BackToTop() {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTopBtn(true);
      } else setBackToTopBtn(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopBtn && (
        <button className={style.backToTop} onClick={scrollUp}>
          <img src={arrow} alt="Bootstrap" width="30" height="30" title="Back to Top"/>
        </button>
      )}
    </div>
  );
}
