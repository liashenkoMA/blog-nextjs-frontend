import "./skills.scss";
import Image from "next/image";

import html from "../../images/html.png";
import css from "../../images/css-3.png";
import js from "../../images/js.png";
import ts from "../../images/typescript.png";
import react from "../../images/react.png";
import next from "../../images/nextjs.png";
import nest from "../../images/NestJS.svg.png";
import mongo from "../../images/mongodb.png";


export default function Skills() {
  return (
    <section className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Skills</h2>
        <ol className="skills__techs-list">
          <li className="skills__tech">
            <Image
              src={html}
              width={60}
              height={60}
              alt="1"
              className="skills__icon"
            />
            <p className="skills__header">HTML</p>
            <p className="skills__description">
              NetTracking" is a very powerful Web 2.0 site search engine allows
              you to find email allerts
            </p>
          </li>
          <li className="skills__tech">
            <Image
              src={css}
              width={60}
              height={60}
              alt="1"
              className="skills__icon"
            />
            <p className="skills__header">CSS</p>
            <p className="skills__description">
              NetTracking" is a very powerful Web 2.0 site search engine allows
              you to find email allerts
            </p>
          </li>
          <li className="skills__tech">
            <Image
              src={js}
              width={60}
              height={60}
              alt="1"
              className="skills__icon"
            />
            <p className="skills__header">JavaScript</p>
            <p className="skills__description">
              NetTracking" is a very powerful Web 2.0 site search engine allows
              you to find email allerts
            </p>
          </li>
          <li className="skills__tech">
            <Image
              src={ts}
              width={60}
              height={60}
              alt="1"
              className="skills__icon"
            />
            <p className="skills__header">TypeScript</p>
            <p className="skills__description">
              NetTracking" is a very powerful Web 2.0 site search engine allows
              you to find email allerts
            </p>
          </li>
          <li className="skills__tech">
            <Image
              src={react}
              width={60}
              height={60}
              alt="1"
              className="skills__icon"
            />
            <p className="skills__header">React</p>
            <p className="skills__description">
              NetTracking" is a very powerful Web 2.0 site search engine allows
              you to find email allerts
            </p>
          </li>
          <li className="skills__tech">
            <Image
              src={next}
              width={60}
              height={60}
              alt="1"
              className="skills__icon"
            />
            <p className="skills__header">NextJs</p>
            <p className="skills__description">
              NetTracking" is a very powerful Web 2.0 site search engine allows
              you to find email allerts
            </p>
          </li>
          <li className="skills__tech">
            <Image
              src={nest}
              width={60}
              height={60}
              alt="1"
              className="skills__icon"
            />
            <p className="skills__header">NestJs</p>
            <p className="skills__description">
              NetTracking" is a very powerful Web 2.0 site search engine allows
              you to find email allerts
            </p>
          </li>
          <li className="skills__tech">
            <Image
              src={mongo}
              width={60}
              height={60}
              alt="1"
              className="skills__icon"
            />
            <p className="skills__header">MongoDB</p>
            <p className="skills__description">
              NetTracking" is a very powerful Web 2.0 site search engine allows
              you to find email allerts
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
