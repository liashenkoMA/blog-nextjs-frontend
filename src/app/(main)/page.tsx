import style from "./page.module.scss";

import HomepageHead from "@/components/HomepageHeader/HomepageHead";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";
import PopularTags from "@/components/PopularTags/PopularTags";
import RecentPosts from "@/components/RecentPost/RecentPost";
import { getAllPages } from "@/utils/mainApi";

export default async function Page() {
  const recentPosts = await getAllPages();

  return (
    <main className={style.main}>
      <HomepageHead />
      <FeaturedArticles />
      <PopularTags />
      <RecentPosts recentPosts={recentPosts} />
    </main>
  );
}
