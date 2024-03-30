"use client";

import "./login.scss";
import { useEffect, useState } from "react";
import useFormValidator from "@/hooks/UseFormValidator";
import { onLogin } from "@/utils/mainApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { values, errors, formValid, handleChange } = useFormValidator();

  useEffect(() => {
    setEmail(values.email);
    setPassword(values.password);
  }, [setEmail, setPassword, values.email, values.password]);

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(email, password).then((res) => {
      console.log(res)
    });
  }

  return (
    <section className="login">
      <div className="login__conteiner">
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <label className="login__form-field">
            <span className="login__input-placeholder">E-mail</span>
            <input
              type="email"
              onChange={handleChange}
              className="login__input login__input_type_email"
              id="login-input-email"
              name="email"
              placeholder="email"
              pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,3}$"
              required
            ></input>
            <span className="login__input-error input-email-error">
              {errors.email}
            </span>
          </label>
          <label className="login__form-field">
            <span className="login__input-placeholder">Пароль</span>
            <input
              type="password"
              onChange={handleChange}
              className="login__input login__input_type_password"
              id="login-input-password"
              name="password"
              placeholder="password"
              required
              minLength={2}
              maxLength={30}
            ></input>
            <span className="login__input-error input-password-error">
              {errors.password}
            </span>
          </label>
          <button type="submit" className="login__btn" disabled={!formValid}>
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}
