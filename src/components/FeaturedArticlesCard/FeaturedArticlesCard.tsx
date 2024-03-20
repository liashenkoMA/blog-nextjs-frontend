import "./featuredarticlescard.scss";
import Image from "next/image";
import Link from "next/link";

import time from "../../images/Time.png";
import { IPage } from "@/interface/interface";

export default function FeaturedArticlesCard({ post }: { post: IPage }) {
  const tags = post.tags[0];

  return (
    <div className="featuredarticlescard">
      <div className="featuredarticlescard__conteiner">
        <Link
          href={`${post.categories}/${post.url}`}
          className="featuredarticlescard__images-link"
        >
          <Image
            src={post.postImage}
            width={360}
            height={260}
            alt={post.postAltImage}
            loading="lazy"
            className="featuredarticlescard__images"
          />
        </Link>
        <div className="featuredarticlescard__informations">
          {tags ? (
            <Link
              href={`${tags.url}`}
              className="featuredarticlescard__info link_color"
            >
              #{tags.name}
            </Link>
          ) : (
            <div></div>
          )}
          <p className="featuredarticlescard__info">
            <Image
              src={time}
              width={18}
              height={18}
              alt="Time"
              className="featuredarticlescard__timeread-icon"
            />
            {post.readTime} mins read
          </p>
        </div>
        <Link
          href={`${post.categories}/${post.url}`}
          className="featuredarticlescard__title link_color"
        >
          {post.header}
        </Link>
        <div className="featuredarticlescard__nav">
          <div className="featuredarticlescard__author">
            <Image
              src={post.author[0].avatarLink}
              width={48}
              height={48}
              loading="lazy"
              alt="Author photo"
              className="featuredarticlescard__author-photo"
            />
            <div className="featuredarticlescard__author-info">
              <p className="featuredarticlescard__author-name">
                {post.author[0].author}
              </p>
              <p className="featuredarticlescard__date-publick">
                {post.publickDate}
              </p>
            </div>
          </div>
          <Link
            href={`${post.categories}/${post.url}`}
            className="featuredarticlescard__nav-link"
          >
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
