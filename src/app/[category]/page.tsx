import "./category.scss";

import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import PopularTags from "@/components/PopularTags/PopularTags";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

import { getCategories, getCategory } from "@/utils/mainApi";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const id = params.category;
  const product = await getCategory(id);

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const categories = await getCategories();
  const category = await getCategory(params.category);

  return (
    <>
      <CategoryHeader categorie={category} />
      <section className="category">
        <div className="category__conteiner">
          <PostsConteiner />
          <Sidebar categories={categories} />
        </div>
      </section>
      <PopularTags />
    </>
  );
}
