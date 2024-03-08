import "./post.scss";
import Image from "next/image";

import { CustomMDX } from "@/components/PostContent/PostContent";
import PostHeader from "@/components/PostHeader/PostHeader";
import Sidebar from "@/components/Sidebar/Sidebar";

import { getCategories, getPage } from "@/utils/mainApi";

export default async function Page({
  params,
}: {
  params: { category: string; post: string };
}) {
  const categories = await getCategories();
  const page = await getPage(params.post);

  return (
    <>
      <PostHeader page={page} />
      <section className="post">
        <div className="post__conteiner">
          <div className="post__content">
            <Image
              src={page.postImage}
              width={900}
              height={500}
              alt="fsdfsdf"
              className=""
            />
            <CustomMDX source={page.text} />
          </div>
          <Sidebar categories={categories} />
        </div>
      </section>
    </>
  );
}
