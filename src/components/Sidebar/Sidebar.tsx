import Categories from "../Categories/Categories";
import "./sidebar.scss";

type Categ = {
  id: string,
  name: string,
  description: string,
  imageurl: string,
}

export default function Sidebar({ categ }: { categ: Categ[] }) {
  return (
    <aside className="blog__sidebar">
      <Categories categ={categ} />
    </aside>
  );
}
