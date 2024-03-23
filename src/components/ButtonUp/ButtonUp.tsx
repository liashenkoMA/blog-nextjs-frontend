"use client";

import { useEffect, useState } from "react";
import "./buttonup.scss";

export default function ButtonUp() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 600) {
        setHide(!hide);
      } else {
        setHide(true);
      }
    });
  }, []);

  function handleSkroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`btnup__button ${hide ? "btnup__button_type_hide" : ""}`}
      onClick={handleSkroll}
    ></button>
  );
}
