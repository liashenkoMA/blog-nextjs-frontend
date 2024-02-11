import style from "./page.module.scss";

import HomepageHead from "@/components/HomepageHeader/HomepageHead";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";
import PopularTags from "@/components/PopularTags/PopularTags";
import RecentPosts from "@/components/RecentPost/RecentPost";

export default function Page() {
  return (
    <main className={style.main}>
      <HomepageHead />
      <FeaturedArticles />
      <PopularTags />
      <RecentPosts />
    </main>
  );
}
