import "./social.scss";
import Link from "next/link";
import Image from "next/image";

import telegram from "../../images/Telegram.svg";
import vk from "../../images/VK.svg";
import git from "../../images/GH.png";

export default function Social() {
  return (
    <ul className="social">
      <li className="social__links">
        <Link
          href="https://t.me/Liashenko_Mak"
          className="social__link"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Image
            src={telegram}
            width={20}
            height={20}
            alt="Telegram"
            className="social__image"
          />
          <p className="social__description">Telegram</p>
        </Link>
      </li>
      <li className="social__links">
        <Link
          href="https://vk.com/lyashenko_ma"
          className="social__link"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Image
            src={vk}
            width={20}
            height={20}
            alt="VK"
            className="social__image"
          />
          <p className="social__description">VK</p>
        </Link>
      </li>
      <li className="social__links">
        <Link
          href="https://github.com/liashenkoMA"
          className="social__link"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <Image
            src={git}
            width={20}
            height={20}
            alt="Git Hub"
            className="social__image"
          />
          <p className="social__description">GitHub</p>
        </Link>
      </li>
    </ul>
  );
}
