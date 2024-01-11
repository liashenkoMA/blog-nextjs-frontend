import "./post.scss";

import PostContent from "@/components/PostContent/PostContent";
import Sidebar from "@/components/Sidebar/Sidebar";

import { getCategories } from "@/utils/mainApi";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {

  const categories = await getCategories(params.category);

  return (
    <section className="post">
      <div className="post__conteiner">
        <PostContent />
        <Sidebar categ={categories} />
      </div>
    </section>
  );
}
