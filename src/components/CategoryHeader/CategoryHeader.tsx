import "./categoryheader.scss";
import Image from "next/image";

import avatar from "../../images/photo.jpg";

export default function CategoryHeader() {
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
          <h2 className="categoryheader__title">Категория какая-то!</h2>
          <p className="categoryheader__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            quaerat voluptate, saepe praesentium rem dolore ipsam excepturi,
            facilis voluptates obcaecati aliquam velit. Animi dolorem officiis
            harum! Fugiat suscipit laborum similique?
          </p>
        </div>
      </div>
    </section>
  );
}
