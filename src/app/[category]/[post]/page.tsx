import PostHeader from "@/components/PostHeader/PostHeader";
import "./post.scss";
import PostContent from "@/components/PostContent/PostContent";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Page() {
  return (
    <section className="post">
      <div className="post__conteiner">
        <PostContent />
        <Sidebar />
      </div>
    </section>
  );
}
