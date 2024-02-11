import "./post.scss";

import { CustomMDX } from "@/components/PostContent/PostContent";
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
    <section className="post">
      <div className="post__conteiner">
        <div className="post__content">
          <CustomMDX source={page.text} />
        </div>
        <Sidebar categories={categories} />
      </div>
    </section>
  );
}
