import "./blog.scss";

import BlogHeader from "@/components/BlogHeader/BlogHeader";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

import { getAllPages, getCategories } from "@/utils/mainApi";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const categories = await getCategories();
  const pages = await getAllPages();

  return (
    <>
      <BlogHeader />
      <section className="blog">
        <div className="blog__conteiner">
          <PostsConteiner pages={pages} />
          <Sidebar categories={categories} />
        </div>
      </section>
    </>
  );
}
