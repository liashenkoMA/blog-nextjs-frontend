import "./recentpost.scss";
import Link from "next/link";
import Image from "next/image";

import arrow from "../../images/arrow-right.png";
import PostsCard from "../PostsCard/PostsCard";

export default function RecentPosts() {
  return (
    <section className="recentposts">
      <div className="recentposts__conteiner">
        <h2 className="recentposts__title">Recent posts</h2>
        <p className="recentposts__description">Don't miss the latest trends</p>
        <div className="recentposts__cards">
          <PostsCard />
          <PostsCard />
          <PostsCard />
          <PostsCard />
          <PostsCard />
          <PostsCard />
        </div>
        <Link href="#" className="recentposts__link">
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
