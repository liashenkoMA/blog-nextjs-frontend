import "./tag.scss";
import Image from "next/image";

import imgd from "../../images/photo.jpg";
import Link from "next/link";

export default function Tag() {
  return (
    <div className="tag">
      <Link href="#" className="tag__link">
        <Image
          src={imgd}
          width={32}
          height={32}
          alt={`Tag ${"tag"}`}
          className="tag__img"
        />
        <p className="tag__description">Travel</p>
      </Link>
    </div>
  );
}
