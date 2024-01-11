import "./blog.scss";

import BlogHeader from "@/components/BlogHeader/BlogHeader";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

import { getCategories } from "@/utils/mainApi";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {

  const categories = await getCategories(params.category);

  return (
    <>
      <BlogHeader />
      <section className="blog">
        <div className="blog__conteiner">
          <PostsConteiner />
          <Sidebar categ={categories} />
        </div>
      </section>
    </>
  );
}
