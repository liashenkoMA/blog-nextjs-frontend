import "./categoryheader.scss";
import Image from "next/image";

import { ICategories } from "@/interface/interface";

export default function CategoryHeader({
  category,
}: {
  category: ICategories;
}) {
  return (
    <section className="categoryheader">
      <div className="categoryheader__conteiner">
        <Image
          src={category.imageUrl}
          width={211}
          height={211}
          alt="Фото категории"
          className="categoryheader__image"
        />
        <div className="categoryheader__info">
          <h2 className="categoryheader__title">{category.metaTitle}</h2>
          <p className="categoryheader__text">{category.metaDescription}</p>
        </div>
      </div>
    </section>
  );
}
