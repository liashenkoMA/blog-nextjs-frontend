import "./postcard.scss";

import Link from "next/link";
import Image from "next/image";

import time from "../../images/Time.png";
import calendar from "../../images/Calendar.png";
import im from "../../images/photo.jpg";
import { IPage } from "@/interface/interface";

export default function PostCard({ page }: { page: IPage }) {

  return (
    <div className="postcard">
      <Link href={`${page.categories}/${page.url}`} className="postcard__image-link">
        <Image
          src={im}
          width={270}
          height={270}
          loading="lazy"
          alt="Card photo"
          className="postcard__image"
        />
      </Link>
      <div className="postcard__info">
        <Link href={`${page.categories}`} className="postcard__categorie">
        {page.categories}
        </Link>
        <Link href={`${page.categories}/${page.url}`} className="postcard__title  postcard__link_color">
        {page.header}
        </Link>
        <p className="postcard__description">
        {`${page.text.slice(0, 250)}...`}
        </p>
        <div className="postcard__times">
          <p className="postcard__time postcard__time_type_publick">
            <Image
              src={calendar}
              width={18}
              height={18}
              alt="Time"
              className="postcard__timeread-icon"
            />
            {page.publickDate}
          </p>
          <p className="postcard__time postcard__time_type_read">
            <Image
              src={time}
              width={18}
              height={18}
              alt="Time"
              className="postcard__timeread-icon"
            />
            {page.readTime}
          </p>
        </div>
      </div>
    </div>
  );
}
