import "./categories.scss";

import Image from "next/image";
import Link from "next/link";

import ap from "../../images/photo.jpg";

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories__conteiner">
        <h2 className="categories__title">Categories</h2>
        <div className="categories__lists">
          <Link href="#" className="categories__link">
            <Image
              src={ap}
              width={32}
              height={32}
              alt="Kategor"
              className="categories__image"
            />
            <p className="categories__text">Travel Tips</p>
          </Link>
          <Link href="#" className="categories__link">
            <Image
              src={ap}
              width={32}
              height={32}
              alt="Kategor"
              className="categories__image"
            />
            <p className="categories__text">Travel Tips</p>
          </Link>
          <Link href="#" className="categories__link">
            <Image
              src={ap}
              width={32}
              height={32}
              alt="Kategor"
              className="categories__image"
            />
            <p className="categories__text">Travel Tips</p>
          </Link>
          <Link href="#" className="categories__link">
            <Image
              src={ap}
              width={32}
              height={32}
              alt="Kategor"
              className="categories__image"
            />
            <p className="categories__text">Travel Tips</p>
          </Link>
          <Link href="#" className="categories__link">
            <Image
              src={ap}
              width={32}
              height={32}
              alt="Kategor"
              className="categories__image"
            />
            <p className="categories__text">Travel Tips</p>
          </Link>
          <Link href="#" className="categories__link">
            <Image
              src={ap}
              width={32}
              height={32}
              alt="Kategor"
              className="categories__image"
            />
            <p className="categories__text">Travel Tips</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
