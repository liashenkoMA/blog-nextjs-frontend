import "./postsconteiner.scss";

import Image from "next/image";
import Link from "next/link";

import time from "../../images/Time.png";
import im from "../../images/photo.jpg";
import PostCard from "../PostCard/PostCard";

export default function PostsConteiner() {

  return (
    <div className="blog__postsconteiner">
      <div className="blog__newpost">
        <div className="blog__newpost_conteiner">
          <Link href="#" className="blog__newpost_images-link">
            <Image
              src={im}
              width={860}
              height={500}
              alt="#"
              loading="lazy"
              className="blog__newpost_images"
            />
          </Link>
          <div className="blog__newpost_informations">
            <Link
              href="#"
              className="blog__newpost_info blog__newpost_link-color"
            >
              #Design
            </Link>
            <p className="blog__newpost_info">
              <Image
                src={time}
                width={18}
                height={18}
                alt="Time"
                className="blog__newpost_timeread-icon"
              />
              89 mins read
            </p>
          </div>
          <Link
            href="#"
            className="blog__newpost_title blog__newpost_link-color"
          >
            Facts About Business That Will Help You Success
          </Link>
          <p className="blog__newpost_descriptions">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae
            itaque quam molestias, autem deleniti qui expedita facilis deserunt.
            Animi recusandae unde, praesentium corrupti totam provident itaque!
            Numquam, deserunt reprehenderit!
          </p>
          <div className="blog__newpost_nav">
            <div className="blog__newpost_author">
              <Image
                src={im}
                width={48}
                height={48}
                loading="lazy"
                alt="Author photo"
                className="blog__newpost_author-photo"
              />
              <div className="blog__newpost_author-info">
                <p className="blog__newpost_author-name">Makcim</p>
                <p className="blog__newpost_date-publick">27 june 2023</p>
              </div>
            </div>
            <Link href="#" className="blog__newpost_nav-link">
              <div className="blog__newpost_round-pic"></div>
              <p className="blog__newpost_nav-link_type_text">Read more</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="blog__oldposts">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
