import "./populartags.scss";
import Tag from "../Tag/Tag";
import { ITags } from "@/interface/interface";

export default function PopularTags({ tags }: { tags: ITags[] }) {
  return (
    <section className="populartags">
      <div className="populartags__conteiner">
        <h2 className="populartags__header">Popular Tags</h2>
        <p className="populartags__description">Most searched keywords</p>
        <div className="populartags__lists">
          {tags.map((tag) => (
            <Tag key={tag.url} tag={tag} />
          ))}
        </div>
      </div>
    </section>
  );
}
