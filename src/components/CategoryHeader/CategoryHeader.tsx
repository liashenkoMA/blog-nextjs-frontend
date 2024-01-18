import "./categoryheader.scss";
import Image from "next/image";

import avatar from "../../images/photo.jpg";
import { ICategories } from "@/interface/interface";

export default function CategoryHeader({
  categorie,
}: {
  categorie: ICategories;
}) {
  const { name, description, imageUrl } = categorie;

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
          <h2 className="categoryheader__title">{name}</h2>
          <p className="categoryheader__text">{description}</p>
        </div>
      </div>
    </section>
  );
}
