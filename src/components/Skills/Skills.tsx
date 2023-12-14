import "./skills.scss";
import Image from "next/image";

//Убрать левый импорт когда буду доделывать карточки
import a from "../../images/logo.svg";

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Skills</h2>
        <ol className="skills__techs-list">
          <li className="skills__tech">
            <Image
              src={a}
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
              src={a}
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
              src={a}
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
              src={a}
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
              src={a}
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
              src={a}
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
              src={a}
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
              src={a}
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
        </ol>
      </div>
    </section>
  );
}
