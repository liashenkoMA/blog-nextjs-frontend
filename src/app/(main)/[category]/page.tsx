import "./category.scss";
import type { Metadata } from "next";
import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

import {
  getCategories,
  getCategoryCountPages,
  getCategoryPages,
  getCountCategories,
  getCountTag,
  getTag,
  getTagCountPages,
  getTagPages,
} from "@/utils/mainApi";
import { ICategories } from "@/interface/interface";
import { notFound } from "next/navigation";

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

  if (product === undefined) {
    notFound();
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { page: string };
}) {
  const categories = await getCategories();
  let category = categories.find(
    (item: ICategories) => item.url === params.category
  );
  let pages;
  let count;

  if (category === undefined && searchParams.page === undefined) {
    const tag = await getTag(params.category);
    category = tag[0];
    pages = await getTagPages(params.category);
    count = await getCountTag(params.category);
  } else if (category !== undefined && searchParams.page === undefined) {
    pages = await getCategoryPages(params.category);
    count = await getCountCategories(params.category);
  } else if (category === undefined && searchParams.page !== undefined) {
    const tag = await getTag(params.category);
    category = tag[0];
    pages = await getTagCountPages(params.category, searchParams.page);
    count = await getCountTag(params.category);
  } else if (category !== undefined && searchParams.page !== undefined) {
    pages = await getCategoryCountPages(params.category, searchParams.page);
    count = await getCountCategories(params.category);
  }

  return (
    <>
      <CategoryHeader category={category} />
      <section className="category">
        <div className="category__conteiner">
          <PostsConteiner pages={pages} count={count} />
          <Sidebar categories={categories} />
        </div>
      </section>
    </>
  );
}
