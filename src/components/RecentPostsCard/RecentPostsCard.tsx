import "./recentpostscard.scss";
import Link from "next/link";
import Image from "next/image";

import time from "../../images/Time.png";
import calendar from "../../images/Calendar.png";
import im from "../../images/photo.jpg";
import { IPage } from "@/interface/interface";

export default function RecentPostsCard({ post }: { post: IPage }) {
  return (
    <div className="recentpostscard">
      <Link
        href={`${post.categories}/${post.url}`}
        className="recentpostscard__image-link"
      >
        <Image
          src={im}
          width={200}
          height={180}
          loading="lazy"
          alt="Card photo"
          className="recentpostscard__image"
        />
      </Link>
      <div className="recentpostscard__info">
        <Link
          href={`${post.categories}/${post.url}`}
          className="recentpostscard__title  link_color"
        >
          {post.header}
        </Link>
        <p className="recentpostscard__description">
          {`${post.text.slice(0, 100)}...`}
        </p>
        <div className="recentpostscard__times">
          <p className="recentpostscard__time recentpostscard__time_type_publick">
            <Image
              src={calendar}
              width={18}
              height={18}
              alt="Time"
              className="recentpostscard__timeread-icon"
            />
            25 April 2023
          </p>
          <p className="recentpostscard__time recentpostscard__time_type_read">
            <Image
              src={time}
              width={18}
              height={18}
              alt="Time"
              className="recentpostscard__timeread-icon"
            />
            5 mins read
          </p>
        </div>
      </div>
    </div>
  );
}
