import "./featuredarticles.scss";
import FeaturedArticlesPageHeader from "@/components/FeaturedArticlesPageHeader/FeaturedArticlesPageHeader";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  getCategories,
  getCountFeaturedPages,
  getFeaturedPages,
  getLimitFeaturedPages,
} from "@/utils/mainApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Популярные статьи на блоге",
  description: "Самые популярные статьи на моём блоге!",
};

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const categories = await getCategories();
  let count = await getCountFeaturedPages();
  let pages;

  if (searchParams.page !== undefined) {
    pages = await getLimitFeaturedPages(searchParams.page);
  } else {
    pages = await getFeaturedPages();
  }

  return (
    <>
      <FeaturedArticlesPageHeader />
      <section className="featuredarticles">
        <div className="featuredarticles__conteiner">
          <PostsConteiner pages={pages} count={count} />
          <Sidebar categories={categories} />
        </div>
      </section>
    </>
  );
}
