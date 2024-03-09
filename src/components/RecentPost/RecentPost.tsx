"use client";

import "./recentpost.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import arrow from "../../images/arrow-right.png";
import RecentPostsCard from "../RecentPostsCard/RecentPostsCard";
import { IPage } from "@/interface/interface";
import useDeviseSize from "@/hooks/UseDeviceSiza";

export default function RecentPosts({ recentPosts }: { recentPosts: IPage[] }) {
  const [totalCount, setTotalCount] = useState(0);
  const width = useDeviseSize();

  useEffect(() => {
    if (width >= 1280) {
      setTotalCount(10);
    } else if (width >= 1024 && width < 1280) {
      setTotalCount(8);
    } else if (width >= 768 && width < 1024) {
      setTotalCount(6);
    } else if (width >= 320 && width < 768) {
      setTotalCount(6);
    }
  }, [width, setTotalCount]);

  return (
    <section className="recentposts">
      <div className="recentposts__conteiner">
        <h2 className="recentposts__title">Recent posts</h2>
        <p className="recentposts__description">Don't miss the latest trends</p>
        <div className="recentposts__cards">
          {recentPosts
            .filter((post, id) => id < totalCount)
            .map((post) => (
              <RecentPostsCard key={post.url} post={post} />
            ))}
        </div>
        <Link href="/blog" className="recentposts__link">
          Show More Posts
          <Image
            src={arrow}
            width={14}
            height={14}
            alt="Arrow"
            className="recentposts__icon"
          />
        </Link>
      </div>
    </section>
  );
}
