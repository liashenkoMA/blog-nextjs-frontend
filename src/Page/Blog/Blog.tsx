import "./blog.scss";

import PostsConteiner from "@/components/PostsConteiner/PostsConteiner";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Blog() {
  return (
    <section className="blog">
      <div className="blog__conteiner">
        <PostsConteiner />
        <Sidebar />
      </div>
    </section>
  );
}
