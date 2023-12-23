import Image from "next/image";
import "./blogheader.scss";

import avatar from "../../images/photo.jpg";
import Social from "../Social/Social";

export default function BlogHeader() {
  return (
    <section className="blogheader">
      <div className="blogheader__conteiner">
        <Image
          src={avatar}
          width={211}
          height={211}
          alt="Мое фото"
          className="blogheader__image"
        />
        <div className="blogheader__info">
          <p className="blogheader__text">Hello Everyone!</p>
          <h2 className="blogheader__title">
            I'm Makcim, a lover of technology, business and experiencing new
            things
          </h2>
          <Social position="social_position_homepagehead" />
        </div>
      </div>
    </section>
  );
}
