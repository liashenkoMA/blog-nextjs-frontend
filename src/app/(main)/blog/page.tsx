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
  let count;
  if (searchParams.page !== undefined) {
    pages = await getLimitPages(searchParams.page);
    count = await getCountPages();
  } else {
    pages = await getAllPages();
    count = await getCountPages();
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
