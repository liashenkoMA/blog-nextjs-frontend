import "./categories.scss";

import Image from "next/image";
import Link from "next/link";

import ap from "../../images/photo.jpg";

type Categ = {
  id: string;
  name: string;
  description: string;
  imageurl: string;
};

export default function Categories({ categ }: { categ: Categ[] }) {
  return (
    <div className="categories">
      <div className="categories__conteiner">
        <h2 className="categories__title">Categories</h2>
        <div className="categories__lists">
          {categ.map((categ: Categ) => (
            <Link key={categ.id} href="#" className="categories__link">
              <Image
                src={ap}
                width={32}
                height={32}
                alt="Kategor"
                className="categories__image"
              />
              <p className="categories__text">{categ.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
