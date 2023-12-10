import "./aboutme.scss";

export default function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__conteiner">
        <h1 className="aboutme__title">About me</h1>
        <div className="aboutme__content">
          <div className="aboutme__contacts">
            <p>fffffffffffffffffffffffffffffffff</p>
          </div>
          <div className="aboutme__info">
            <div className="aboutme__name">
              <p className="aboutme__text-header">&lt;h1&gt;</p>
              <p className="aboutme__name-text">
                Привет!
                <br />
                Меня зовут{" "}
                <span className="aboutme__text_colored_brand-aqamarin">
                  Максим
                </span>
                <br />Я начинающий Full-Stack Developer{" "}
                <span className="aboutme__text-header">&lt;/h1&gt;</span>
              </p>
            </div>
            <div className="aboutme__description">
              <span className="aboutme__text-header">&lt;p&gt;</span>
              <p className="aboutme__description-text">
                I help business grow by crafting amazing web experiences. If
                you`re looking for a developer that likes to get stuff done,
              </p>
              <span className="aboutme__text-header">&lt;/p&gt;</span>
            </div>
            <p className="aboutme__contact">
              Let`s Talk<button type="button" className="aboutme__contact-btn"></button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
