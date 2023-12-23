import PostsCard from "../PostsCard/PostsCard";
import "./postsconteiner.scss";

export default function PostsConteiner() {
  return (
    <div className="blog__postsconteiner">
      <PostsCard />
      <PostsCard />
      <PostsCard />
      <PostsCard />
      <PostsCard />
    </div>
  )
}