import "./main.scss";

import HomepageHead from "@/components/HomepageHead/HomepageHead";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";
import PopularTags from "@/components/PopularTags/PopularTags";
import RecentPosts from "@/components/RecentPost/RecentPost";

export default function Main() {
  return (
    <main className="main">
      <HomepageHead />
      <FeaturedArticles />
      <PopularTags />
      <RecentPosts />
    </main>
  );
}
