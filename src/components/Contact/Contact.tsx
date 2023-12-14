import "./contact.scss";
import Image from "next/image";
import sendMessage from "../../images/icon-send.svg";

export default function Contatc() {
  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact</h2>
        <form className="contact__form">
          <div className="contact__inputs">
            <label className="contact__form-field">
              <span className="contact__text">Your name *</span>
              <input
                className="contact__input"
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                required
                minLength={2}
                maxLength={30}
              ></input>
            </label>
            <label className="contact__form-field">
              <span className="contact__text">Your email *</span>
              <input
                className="contact__input"
                type="email"
                name="email"
                placeholder="Введите ваш email"
                required
              ></input>
            </label>
            <label className="contact__form-field">
              <span className="contact__text">Your message *</span>
              <input
                className="contact__input contact__input_type_message"
                type="text"
                name="name"
                placeholder="Введите ваше сообщение"
              ></input>
            </label>
          </div>
          <button className="contact__button" type="button">
            Send Message
            <Image
              src={sendMessage}
              width={24}
              height={24}
              alt="Send Message"
              className="contact__icon"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
