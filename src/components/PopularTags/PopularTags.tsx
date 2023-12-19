import "./populartags.scss";
import Tag from "../Tag/Tag";

export default function PopularTags() {
  return (
    <section className="populartags">
      <div className="populartags__conteiner">
        <h2 className="populartags__header">Popular Tags</h2>
        <p className="populartags__description">Most searched keywords</p>
        <div className="populartags__lists">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </section>
  );
}
