import style from "./page.module.scss";

import HomepageHead from "@/components/HomepageHeader/HomepageHead";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";
import PopularTags from "@/components/PopularTags/PopularTags";
import RecentPosts from "@/components/RecentPost/RecentPost";
import { getAllPages, getFeaturedPages, getTags } from "@/utils/mainApi";

export default async function Page() {
  const recentPosts = await getAllPages();
  const featuredPosts = await getFeaturedPages();
  const tags = await getTags();

  return (
    <main className={style.main}>
      <HomepageHead />
      <FeaturedArticles featuredPosts={featuredPosts} />
      <PopularTags tags={tags} />
      <RecentPosts recentPosts={recentPosts} />
    </main>
  );
}
