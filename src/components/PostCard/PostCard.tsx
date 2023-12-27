import "./postcard.scss";

import Link from "next/link";
import Image from "next/image";

import time from "../../images/Time.png";
import calendar from "../../images/Calendar.png";
import im from "../../images/photo.jpg";

export default function PostCard() {
  return (
    <div className="postcard">
      <Link href="#" className="postcard__image-link">
        <Image
          src={im}
          width={270}
          height={270}
          alt="Card photo"
          className="postcard__image"
        />
      </Link>
      <div className="postcard__info">
        <Link href="#" className="postcard__categorie">
          Categories
        </Link>
        <Link href="#" className="postcard__title  postcard__link_color">
          Helpful Tips for Working from Home as a Freelancer
        </Link>
        <p className="postcard__description">
          Infuse the timeless elegance of Parisian aesthetics into your living
          space with expert design guidance egance of Parisian aesthetics into
          your living space with expert design guidance
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
            25 April 2023
          </p>
          <p className="postcard__time postcard__time_type_read">
            <Image
              src={time}
              width={18}
              height={18}
              alt="Time"
              className="postcard__timeread-icon"
            />
            5 mins read
          </p>
        </div>
      </div>
    </div>
  );
}
