import "./postheader.scss";

import Link from "next/link";
import Image from "next/image";

import tg from "../../images/Telegram.svg";
import vk from "../../images/VK.svg";
import userphoto from "../../images/photo.jpg";

export default function PostHeader() {
  return (
    <section className="postheader">
      <div className="postheader__conteiner">
        <div className="postheader__info">
          <h1 className="postheader__title">
            Digital Design That Will Help You Start Your Business
          </h1>
          <div className="postheader__author">
            <Image
              src={userphoto}
              width={48}
              height={48}
              alt="Аватарка пользователя"
              className="postheader__avatar"
            />
            <div className="postheader__author-info">
              <p className="postheader__author-name">Максим</p>
              <p className="postheader__date-publick">27 june 2023</p>
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
