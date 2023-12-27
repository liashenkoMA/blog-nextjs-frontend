import "./blog.scss";

import BlogHeader from "@/components/BlogHeader/BlogHeader";
import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Page() {
  return (
    <>
      <BlogHeader />
      <section className="blog">
        <div className="blog__conteiner">
          <PostsConteiner />
          <Sidebar />
        </div>
      </section>
    </>
  );
}
