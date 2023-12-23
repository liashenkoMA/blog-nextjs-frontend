import Categories from "../Categories/Categories";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="blog__sidebar">
      <Categories />
    </aside>
  )
}