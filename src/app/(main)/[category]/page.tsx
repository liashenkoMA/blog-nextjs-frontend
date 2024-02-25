import "./category.scss";
import type { Metadata } from "next";
import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

import { getCategories, getCategory } from "@/utils/mainApi";
import { ICategories } from "@/interface/interface";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = await getCategories();
  const product = categories.find(
    (item: ICategories) => item.url === params.category
  );

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
  const category = categories.find(
    (item: ICategories) => item.url === params.category
  );
  const pages = await getCategory(params.category);

  return (
    <>
      <CategoryHeader category={category} />
      <section className="category">
        <div className="category__conteiner">
          <PostsConteiner pages={pages} />
          <Sidebar categories={categories} />
        </div>
      </section>
    </>
  );
}
