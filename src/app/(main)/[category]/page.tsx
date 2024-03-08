import "./category.scss";
import type { Metadata } from "next";
import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

import {
  getCategories,
  getCategoryPages,
  getTag,
  getTagPages,
} from "@/utils/mainApi";
import { ICategories } from "@/interface/interface";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = await getCategories();
  let category = categories.find(
    (item: ICategories) => item.url === params.category
  );
  let product;

  if (category === undefined) {
    const tag = await getTag(params.category);
    product = tag[0];
  } else {
    product = category;
  }

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
  let category = categories.find(
    (item: ICategories) => item.url === params.category
  );
  let pages;

  if (category === undefined) {
    const tag = await getTag(params.category);
    category = tag[0];
    pages = await getTagPages(params.category);
  } else {
    pages = await getCategoryPages(params.category);
  }

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
