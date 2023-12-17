import "./homepagehead.scss";
import Image from "next/image";

import img1 from "../../images/photo.jpg";
import img2 from "../../images/banner-2.jpg";
import Social from "../Social/Social";

export default function HomepageHead() {
  return (
    <section className="homepagehead">
      <div className="homepagehead__container">
        <div className="homepagehead__profile">
          <p className="homepagehead__text homepagehead__text_type_strong">Hello Everyone!</p>
          <h1 className="homepagehead__header">
            I`m
            <br />
            <span className="homepagehead__header homepagehead__header_type_color">Creator</span>
          </h1>
          <p className="homepagehead__text">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I am not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <Social position="social_position_homepagehead" />
        </div>
        <div className="homepagehead__images">
          <Image src={img2} width={332} height={285} alt="Photo" className="homepagehead__image homepagehead__image_position_under"/>
          <Image src={img1} width={380} height={453} alt="Main photo" className="homepagehead__image homepagehead__image_position_on" />
        </div>
      </div>
    </section>
  );
}
