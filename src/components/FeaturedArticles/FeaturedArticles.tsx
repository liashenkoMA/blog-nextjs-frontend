"use client";

import "./featuredarticles.scss";
import Image from "next/image";
import Link from "next/link";

import arrow from "../../images/arrow-right.png";
import FeaturedArticlesCard from "../FeaturedArticlesCard/FeaturedArticlesCard";
import { IPage } from "@/interface/interface";
import useDeviseSize from "@/hooks/UseDeviceSiza";
import { useEffect, useState } from "react";

export default function FeaturedArticles({
  featuredPosts,
}: {
  featuredPosts: IPage[];
}) {
  const [totalCount, setTotalCount] = useState(0);
  const width = useDeviseSize();

  useEffect(() => {
    if (width >= 1280) {
      setTotalCount(9);
    } else if (width >= 1024 && width < 1280) {
      setTotalCount(6);
    } else if (width >= 768 && width < 1024) {
      setTotalCount(4);
    } else if (width >= 320 && width < 768) {
      setTotalCount(4);
    }
  }, [width, setTotalCount]);

  return (
    <section className="featuredarticles">
      <div className="featuredarticles__conteiner">
        <h2 className="featuredarticles__title">Featured Articles</h2>
        <p className="featuredarticles__description">
          Discover the most outstanding articles in all topics
        </p>
        <div className="featuredarticles__cards">
          {featuredPosts
            .filter((post, id) => id < totalCount)
            .map((post) => (
              <FeaturedArticlesCard key={post.url} post={post} />
            ))}
        </div>
        <Link href="/featuredarticles" className="featuredarticles__link">
          Show More Posts
          <Image
            src={arrow}
            width={14}
            height={14}
            alt="Arrow"
            className="featuredarticles__icon"
          />
        </Link>
      </div>
    </section>
  );
}
