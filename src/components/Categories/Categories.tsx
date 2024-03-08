import "./categories.scss";

import Image from "next/image";
import Link from "next/link";

import ap from "../../images/photo.jpg";
import { ICategories } from "@/interface/interface";

export default function Categories({
  categories,
}: {
  categories: ICategories[];
}) {
  return (
    <div className="categories">
      <div className="categories__conteiner">
        <h2 className="categories__title">Categories</h2>
        <div className="categories__lists">
          {categories.map((category: ICategories) => (
            <Link
              key={category.url}
              href={`/${category.url}`}
              className="categories__link"
            >
              <Image
                src={category.imageUrl}
                width={32}
                height={32}
                alt="Kategor"
                className="categories__image"
              />
              <p className="categories__text">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
