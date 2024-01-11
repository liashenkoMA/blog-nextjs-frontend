import "./category.scss";

import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import PopularTags from "@/components/PopularTags/PopularTags";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

import { getCategories } from "@/utils/mainApi";

type Item = {
  name: string;
  description: string;
  imageurl: string;
  id: string;
};

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const categories = await getCategories(params.category);
  const categorie = categories.find((item: Item) => item.id === params.category);

  return (
    <>
      <CategoryHeader categorie={categorie} />
      <section className="category">
        <div className="category__conteiner">
          <PostsConteiner />
          <Sidebar categ={categories} />
        </div>
      </section>
      <PopularTags />
    </>
  );
}
