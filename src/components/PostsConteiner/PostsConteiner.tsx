"use client";
import "./postsconteiner.scss";

import Image from "next/image";
import Link from "next/link";

import time from "../../images/Time.png";
import im from "../../images/photo.jpg";
import PostCard from "../PostCard/PostCard";
import { IPage } from "@/interface/interface";
import { useEffect, useState } from "react";

export default function PostsConteiner({ pages }: { pages: IPage[] }) {
  const [pagesNotFound, setPagesNotFound] = useState(true);

  const lastPage = pages[pages.length - 1];
  const otherPage = pages.slice(0, -1);

  useEffect(() => {
    if (pages.length > 0) {
      setPagesNotFound(false);
    }
  }, [setPagesNotFound, pages]);

  return (
    <div className="blog__postsconteiner">
      {pagesNotFound === false ? (
        <>
          <div className="blog__newpost">
            <div className="blog__newpost_conteiner">
              <Link
                href={`${lastPage.categories}/${lastPage.url}`}
                className="blog__newpost_images-link"
              >
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
                  href={`${lastPage.categories}`}
                  className="blog__newpost_info blog__newpost_link-color"
                >
                  {`#${lastPage.categories}`}
                </Link>
                <p className="blog__newpost_info">
                  <Image
                    src={time}
                    width={18}
                    height={18}
                    alt="Time"
                    className="blog__newpost_timeread-icon"
                  />
                  {lastPage.readTime} mins read
                </p>
              </div>
              <Link
                href={`${lastPage.categories}/${lastPage.url}`}
                className="blog__newpost_title blog__newpost_link-color"
              >
                {lastPage.header}
              </Link>
              <p className="blog__newpost_descriptions">
                {`${lastPage.text.slice(0, 250)}...`}
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
                    <p className="blog__newpost_author-name">
                      {lastPage.author[0].author}
                    </p>
                    <p className="blog__newpost_date-publick">
                      {lastPage.publickDate}
                    </p>
                  </div>
                </div>
                <Link
                  href={`${lastPage.categories}/${lastPage.url}`}
                  className="blog__newpost_nav-link"
                >
                  <div className="blog__newpost_round-pic"></div>
                  <p className="blog__newpost_nav-link_type_text">Read more</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog__oldposts">
            {otherPage.map((page: IPage) => (
              <PostCard key={page.url} page={page} />
            ))}
          </div>
        </>
      ) : (
        <p className="blog__newpost_descriptions">
          Статей пока нет, но раз категория появилась, то скоро появятся!
        </p>
      )}
    </div>
  );
}
