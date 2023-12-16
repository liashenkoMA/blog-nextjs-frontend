import "./developer.scss";
import Image from "next/image";
import Link from "next/link";

import avatar from "../../images/photo.jpg";
import email from "../../images/icon-mail.png";
import sity from "../../images/icon-map-pin.png";
import rab from "../../images/Shape.png";
import link from "../../images/icon-link.png";


export default function Developer() {
  return (
    <section className="developer">
      <div className="developer__conteiner">
        <h1 className="developer__title">Developer</h1>
        <div className="developer__content">
          <div className="developer__contacts">
            <Image
              src={avatar}
              width={110}
              height={110}
              alt="1"
              className="developer__avatar"
            />
            <h2 className="developer__name">Максим</h2>
            <p className="developer__profession">Full-stack Developer</p>
            <ol className="developer__contacts-data">
              <li className="developer__text">
                <Image
                  src={email}
                  width={14}
                  height={14}
                  alt="email"
                  className="developer__icon"
                />
                makcim_an@mail.ru
              </li>
              <li className="developer__text">
                <Image
                  src={sity}
                  width={14}
                  height={14}
                  alt="Город"
                  className="developer__icon"
                />
                Samara
              </li>
              <li className="developer__text">
                <Image
                  src={rab}
                  width={14}
                  height={14}
                  alt="Работа"
                  className="developer__icon"
                />
                Full-time
              </li>
              <li className="developer__text">
                <Image
                  src={link}
                  width={14}
                  height={14}
                  alt="Сайт"
                  className="developer__icon"
                />
                iflife.ru
              </li>
            </ol>
            <ol className="developer__techs">
              <li className="developer__tech">HTML</li>
              <li className="developer__tech">CSS</li>
              <li className="developer__tech">SASS</li>
              <li className="developer__tech">JS</li>
              <li className="developer__tech">TS</li>
              <li className="developer__tech">REACT</li>
              <li className="developer__tech">NODE</li>
              <li className="developer__tech">NOSQL</li>
            </ol>
          </div>
          <div className="developer__info">
            <div className="developer__user">
              <p className="developer__text-header">&lt;h1&gt;</p>
              <p className="developer__user-text">
                Привет!
                <br />
                Меня зовут
                <span className="developer__text_colored_brand-aqamarin">
                  {" "}
                  Максим
                </span>
                <br />Я начинающий Full-Stack Developer
                <span className="developer__text-header">&lt;/h1&gt;</span>
              </p>
            </div>
            <div className="developer__description">
              <span className="developer__text-header">&lt;p&gt;</span>
              <p className="developer__description-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                nisi cumque magni praesentium eveniet expedita cum deserunt
                nobis molestiae, quas accusamus adipisci cupiditate, id debitis
                amet quis eaque ipsum repellendus?
              </p>
              <span className="developer__text-header">&lt;/p&gt;</span>
            </div>
            <p className="developer__contact">
              Let`s Talk
              <Link href="#contact__title"  className="developer__contact-btn"></Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
