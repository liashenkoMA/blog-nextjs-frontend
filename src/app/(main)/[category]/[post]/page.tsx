import "./post.scss";
import Image from "next/image";

import { CustomMDX } from "@/components/PostContent/PostContent";
import PostHeader from "@/components/PostHeader/PostHeader";
import Sidebar from "@/components/Sidebar/Sidebar";

import { getCategories, getPage } from "@/utils/mainApi";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Comments from "@/components/Comments/Comments";

export async function generateMetadata({
  params,
}: {
  params: { category: string; post: string };
}): Promise<Metadata> {
  const page = await getPage(params.post);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function Page({
  params,
}: {
  params: { category: string; post: string };
}) {
  const categories = await getCategories();
  const page = await getPage(params.post);

  if (page === 404) {
    notFound();
  }

  return (
    <>
      <PostHeader page={page} />
      <section className="post">
        <div className="post__conteiner">
          <div className="post__content">
            <div className="post__text">
              <Image
                src={page.postImage}
                width={900}
                height={500}
                alt={page.postAltImage}
                className="post__image"
              />
              <CustomMDX source={page.text} />
            </div>
            <Comments page={page} />
          </div>
          <Sidebar categories={categories} />
        </div>
      </section>
    </>
  );
}
