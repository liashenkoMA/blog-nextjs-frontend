import "./blog.scss";

import BlogHeader from "@/components/BlogHeader/BlogHeader";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

import {
  getAllPages,
  getCategories,
  getCountPages,
  getLimitPages,
} from "@/utils/mainApi";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const categories = await getCategories();
  let pages;
  const count = await getCountPages();
  if (searchParams.page !== undefined) {
    pages = await getLimitPages(searchParams.page);
  } else {
    pages = await getAllPages();
  }

  return (
    <>
      <BlogHeader />
      <section className="blog">
        <div className="blog__conteiner">
          <PostsConteiner pages={pages} count={count} />
          <Sidebar categories={categories} />
        </div>
      </section>
    </>
  );
}
