import "./categoryheader.scss";
import Image from "next/image";

import avatar from "../../images/photo.jpg";

type Props = {
  name: string;
  description: string;
  imageurl: string;
  id: string;
};

export default function CategoryHeader({ categorie }: { categorie: Props }) {
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
          <h2 className="categoryheader__title">{categorie.name}</h2>
          <p className="categoryheader__text">{categorie.description}</p>
        </div>
      </div>
    </section>
  );
}
