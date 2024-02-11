import "./categoryheader.scss";
import Image from "next/image";

import avatar from "../../images/photo.jpg";
import { ICategories } from "@/interface/interface";

export default function CategoryHeader({
  category,
}: {
  category: ICategories;
}) {

  const x = category;

  return (
    <section className="categoryheader">
      <div className="categoryheader__conteiner">
        <Image
          src={avatar}
          width={211}
          height={211}
          alt="Фото категории"
          className="categoryheader__image"
        />
        <div className="categoryheader__info">
          <h2 className="categoryheader__title">title</h2>
          <p className="categoryheader__text">ffdfdf</p>
        </div>
      </div>
    </section>
  );
}
