import "./postscard.scss";
import Link from "next/link";
import Image from "next/image";

import time from "../../images/Time.png";
import calendar from "../../images/Calendar.png";
import im from "../../images/photo.jpg";

export default function PostsCard() {
  return (
    <div className="postscard">
      <Link href="#" className="postscard__image-link">
        <Image
          src={im}
          width={200}
          height={180}
          alt="Card photo"
          className="postscard__image"
        />
      </Link>
      <div className="postscard__info">
        <Link href="#" className="postscard__title  link_color">
          Helpful Tips for Working from Home as a Freelancer
        </Link>
        <p className="postscard__description">
          Infuse the timeless elegance of Parisian aesthetics into your living
          space with expert design guidance
        </p>
        <div className="postscard__times">
          <p className="postscard__time postscard__time_type_publick">
            <Image
              src={calendar}
              width={18}
              height={18}
              alt="Time"
              className="postscard__timeread-icon"
            />
            25 April 2023
          </p>
          <p className="postscard__time postscard__time_type_read">
            <Image
              src={time}
              width={18}
              height={18}
              alt="Time"
              className="postscard__timeread-icon"
            />
            5 mins read
          </p>
        </div>
      </div>
    </div>
  );
}
