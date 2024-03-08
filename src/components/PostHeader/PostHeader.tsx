import "./postheader.scss";

import Link from "next/link";
import Image from "next/image";

import tg from "../../images/Telegram.svg";
import vk from "../../images/VK.svg";

export default function PostHeader({ page }) {
  const author = page.author[0];

  return (
    <section className="postheader">
      <div className="postheader__conteiner">
        <div className="postheader__info">
          <h1 className="postheader__title">{page.header}</h1>
          <div className="postheader__author">
            <Image
              src={author.avatarLink}
              width={48}
              height={48}
              alt="Аватарка пользователя"
              className="postheader__avatar"
            />
            <div className="postheader__author-info">
              <p className="postheader__author-name">{author.author}</p>
              <p className="postheader__date-publick">{page.publickDate}</p>
            </div>
          </div>
        </div>
        <div className="postheader__share">
          <p className="postheader__share-text">Share</p>
          <Link href="#" className="postheader__share-link">
            <Image
              src={tg}
              width={20}
              height={20}
              alt="Telegram"
              className="postheader__share-link-image"
            ></Image>
          </Link>
          <Link href="#" className="postheader__share-link">
            <Image
              src={vk}
              width={20}
              height={20}
              alt="VK"
              className="postheader__share-link-image"
            ></Image>
          </Link>
        </div>
      </div>
    </section>
  );
}
