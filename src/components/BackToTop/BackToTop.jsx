import React from "react";
import style from "./BackToTop.module.css";
import { useEffect, useState } from "react";
import arrowUp from "./../../assets/images/arrow-up-circle-fill.svg"

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
          <img src={arrowUp} alt="Bootstrap" width="50" height="50" title="Back to Top"/>
        </button>
      )}
    </div>
  );
}
