"use client";

import "./navigation.scss";
import Search from "../Search/Search";
import MainNavigate from "../MainNavigate/MainNavigate";
import Social from "@/components/Social/Social";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(true);

  function isOpenMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`nav ${!isOpen ? "nav_type_open" : ""}`}>
      <button
        type="button"
        className={`nav__button ${
          isOpen ? "nav__button_type_open" : "nav__button_type_close"
        }`}
        onClick={isOpenMenu}
      ></button>
      <div className={`nav__links ${!isOpen ? "nav__links_type_open" : ""}`}>
        <MainNavigate />
        <Search />
        <Social position={"social_position_header"} />
      </div>
    </nav>
  );
}
