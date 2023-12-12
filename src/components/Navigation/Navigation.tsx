import Link from "next/link";
import "./navigation.scss";
import Search from "../Search/Search";
import Image from "next/image";

import telegram from "../../images/Telegram.svg";
import vk from "../../images/VK.svg";
import git from "../../images/GH.svg";
import MainNavigate from "../MainNavigate/MainNavigate";

export default function Navigation() {

  return (
    <nav className="nav">
      <MainNavigate />
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
