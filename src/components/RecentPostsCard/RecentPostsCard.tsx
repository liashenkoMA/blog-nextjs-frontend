import "./recentpostscard.scss";
import Link from "next/link";
import Image from "next/image";

import time from "../../images/Time.png";
import calendar from "../../images/Calendar.png";
import im from "../../images/photo.jpg";

export default function RecentPostsCard() {
  return (
    <div className="recentpostscard">
      <Link href="#" className="recentpostscard__image-link">
        <Image
          src={im}
          width={300}
          height={260}
          alt="Card photo"
          className="recentpostscard__image"
        />
      </Link>
      <div className="recentpostscard__info">
        <Link href="#" className="recentpostscard__title  link_color">
          Helpful Tips for Working from Home as a Freelancer
        </Link>
        <p className="recentpostscard__description">
          Infuse the timeless elegance of Parisian aesthetics into your living
          space with expert design guidance, creating an inviting atmosphere
          that exudes sophistication
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
