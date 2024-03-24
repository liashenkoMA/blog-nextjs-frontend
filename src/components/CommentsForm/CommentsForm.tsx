"use client";

import { useState } from "react";
import "./commentsform.scss";
import { postComment } from "@/utils/mainApi";

export default function CommentsForm({ url }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleChengeName(e) {
    setName(e.target.value);
  }

  function handleChengeComment(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    postComment(url, name, comment);
  }

  return (
    <div className="commentsform">
      <h2 className="commentsform__title">Leave a comment</h2>
      <form onSubmit={handleSubmit} className="commentsform__conteiner">
        <label className="commentsform__label">
          <textarea
            onChange={handleChengeComment}
            className="commentsform__textarea"
          ></textarea>
        </label>
        <label className="commentsform__label">
          <span className="commentsform__span">Введите ваше имя: </span>
          <input
            type="text"
            placeholder="Имя"
            onChange={handleChengeName}
            className="commentsform__author"
          ></input>
        </label>
        <div className="commentsform__submit-form">
          <p className="commentsform__notes">
            Нажимая на кнопку "Отправить комментарий", я даю согласие на
            обработку персональных данных и принимаю политику
            конфиденциальности.
          </p>
          <button type="submit" className="commentsform__btn">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
