import "./featuredarticlescard.scss";
import Image from "next/image";
import Link from "next/link";

import time from "../../images/Time.png";
import im from "../../images/photo.jpg";

export default function FeaturedArticlesCard() {
  return (
    <div className="featuredarticlescard">
      <div className="featuredarticlescard__conteiner">
        <Link href="#" className="featuredarticlescard__images-link">
          <Image
            src={im}
            width={360}
            height={260}
            alt="#"
            loading="lazy"
            className="featuredarticlescard__images"
          />
        </Link>
        <div className="featuredarticlescard__informations">
          <Link href="#" className="featuredarticlescard__info link_color">
            #Design
          </Link>
          <p className="featuredarticlescard__info">
            <Image
              src={time}
              width={18}
              height={18}
              alt="Time"
              className="featuredarticlescard__timeread-icon"
            />
            89 mins read
          </p>
        </div>
        <Link href="#" className="featuredarticlescard__title link_color">
          Facts About Business That Will Help You Success
        </Link>
        <div className="featuredarticlescard__nav">
          <div className="featuredarticlescard__author">
            <Image
              src={im}
              width={48}
              height={48}
              loading="lazy"
              alt="Author photo"
              className="featuredarticlescard__author-photo"
            />
            <div className="featuredarticlescard__author-info">
              <p className="featuredarticlescard__author-name">Makcim</p>
              <p className="featuredarticlescard__date-publick">27 june 2023</p>
            </div>
          </div>
          <Link href="#" className="featuredarticlescard__nav-link">
            <div className="featuredarticlescard__round-pic"></div>
            <p className="featuredarticlescard__nav-link_type_text">
              Read more
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
