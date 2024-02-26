import "./recentpost.scss";
import Link from "next/link";
import Image from "next/image";

import arrow from "../../images/arrow-right.png";
import RecentPostsCard from "../RecentPostsCard/RecentPostsCard";
import { IPage } from "@/interface/interface";

export default function RecentPosts({ recentPosts }: { recentPosts: IPage[] }) {
  return (
    <section className="recentposts">
      <div className="recentposts__conteiner">
        <h2 className="recentposts__title">Recent posts</h2>
        <p className="recentposts__description">Don't miss the latest trends</p>
        <div className="recentposts__cards">
          {recentPosts.map((post) => (
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
