import "./category.scss";

import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import PopularTags from "@/components/PopularTags/PopularTags";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Page({ params }: { params: { category: string } }) {
  /* params.category - отлавливаю урл и могу по нему искать нужную карточку к примеру. Ну или еще зачем нибудь, пока хз */

  return (
    <>
      <CategoryHeader />
      <section className="category">
        <div className="category__conteiner">
          <PostsConteiner />
          <Sidebar />
        </div>
      </section>
      <PopularTags />
    </>
  );
}
