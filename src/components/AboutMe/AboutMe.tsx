import "./aboutme.scss";
import Image from "next/image";

import photo from "../../images/photo.jpg";

export default function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__conteiner">
        <div className="aboutme__profile">
          <h2 className="aboutme__title">About Me</h2>
          <div className="aboutme__description">
            <p className="aboutme__text aboutme__text_type_code">&lt;p&gt;</p>
            <p className="aboutme__text aboutme__text_type_position aboutme__text_type__title aboutme__text_type__color">
              Hello!
            </p>
            <p className="aboutme__text aboutme__text_type_position">
              My name is Sinan and I specialize in web developement that
              utilizes <span className="aboutme__text_type__color">HTML</span>,
              <span className="aboutme__text_type__color">CSS</span>,
              <span className="aboutme__text_type__color">JS</span>, and
              <span className="aboutme__text_type__color">REACT</span> etc.
            </p>
            <p className="aboutme__text aboutme__text_type_position">
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works. Striving to
              never stop learning and improving.
            </p>
            <p className="aboutme__text aboutme__text_type_position">
              When I'm not coding, I am writing bolgs, reading, or picking up
              some new hands-on art project like photography.
            </p>
            <p className="aboutme__text aboutme__text_type_position">
              I like to have my perspective and belief systems challenged so
              that I see the world through new eyes.
            </p>
            <p className="aboutme__text aboutme__text_type_code">&lt;/p&gt;</p>
          </div>
        </div>
        <div className="aboutme__photo">
          <Image
            src={photo}
            width={462}
            height={556}
            alt="1"
            className="aboutme__user-photo"
          />
        </div>
      </div>
    </section>
  );
}
