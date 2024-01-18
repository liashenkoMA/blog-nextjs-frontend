import { ICategories } from "@/interface/interface";
import Categories from "../Categories/Categories";
import "./sidebar.scss";


export default function Sidebar({ categories }: { categories: ICategories[] }) {
  return (
    <aside className="blog__sidebar">
      <Categories categories={categories} />
    </aside>
  );
}
