"use client";

import Link from "next/link";
import "./navigation.scss";
import Search from "../Search/Search";
import Image from "next/image";
import { usePathname } from "next/navigation";

import telegram from "../../images/Telegram.svg";
import vk from "../../images/VK.svg";
import git from "../../images/GH.svg";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link
        href="/"
        className={`nav__link ${pathname === "/" ? "nav__link_active" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={`nav__link ${
          pathname === "/blog" ? "nav__link_active" : ""
        }`}
      >
        Blogs
      </Link>
      <Search />
      <ul className="nav__social">
        <li className="nav__social-links">
          <Link
            href="https://t.me/Liashenko_Mak"
            className="nav__social-link"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Image
              src={telegram}
              width={20}
              height={20}
              alt="Telegram"
              className="nav__social-image"
            />
            <p className="nav__social-description">Telegram</p>
          </Link>
        </li>
        <li className="nav__social-links">
          <Link
            href="https://vk.com/lyashenko_ma"
            className="nav__social-link"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Image
              src={vk}
              width={20}
              height={20}
              alt="VK"
              className="nav__social-image"
            />
            <p className="nav__social-description">VK</p>
          </Link>
        </li>
        <li className="nav__social-links">
          <Link
            href="https://github.com/liashenkoMA"
            className="nav__social-link"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <Image
              src={git}
              width={20}
              height={20}
              alt="Git Hub"
              className="nav__social-image"
            />
            <p className="nav__social-description">GitHub</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
