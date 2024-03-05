"use client";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "./adminform.scss";

import { useState } from "react";
import { postFile, postPage } from "@/utils/mainApi";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

export default function AdminForm() {
  const [markdownVal, setMarkdownVal] = useState("");
  const [urlPage, setUrlPage] = useState("");
  const [postImage, setPostImage] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [pageHeader, setPageHeader] = useState("");
  const [categoriesPage, setCategoriesPage] = useState("");
  const [readTime, setReadTime] = useState("");
  const [popularPage, setPopularPage] = useState(false);

  const [file, setFile] = useState();
  const [fileImage, setFileImage] = useState();

  function handleChangeUrl(e) {
    setUrlPage(e.target.value);
  }

  function handlePostImage(e) {
    setPostImage(e.target.value);
  }

  function handleChangeTitle(e) {
    setPageTitle(e.target.value);
  }

  function handleChangeDescription(e) {
    setPageDescription(e.target.value);
  }

  function handleChangeHeader(e) {
    setPageHeader(e.target.value);
  }

  function handleChanhgeCategoriesPage(e) {
    setCategoriesPage(e.target.value);
  }

  function handleChangeReadTime(e) {
    setReadTime(e.target.value);
  }

  function handlePopularPage(e) {
    setPopularPage(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    postPage(
      markdownVal,
      urlPage,
      postImage,
      pageTitle,
      pageDescription,
      pageHeader,
      categoriesPage,
      readTime,
      popularPage
    );
  }

  function handleChangeFile(e) {
    setFile(e.target.files[0]);
  }

  function handleSubmitFile(e) {
    e.preventDefault();

    postFile(file).then((res) => {
      setFileImage(res.filePath);
    });
  }

  return (
    <section className="adminform__conteiner">
      <MarkdownEditor
        value={markdownVal}
        height="200px"
        onChange={(value) => {
          setMarkdownVal(value);
        }}
      />
      <form onSubmit={handleSubmit} className="adminform__form">
        <label>
          <input
            type="text"
            placeholder="url"
            className="adminform__form_input"
            onChange={handleChangeUrl}
            value={urlPage}
          ></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="postImage"
            className="adminform__form_input"
            onChange={handlePostImage}
            value={postImage}
          ></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="title"
            className="adminform__form_input"
            onChange={handleChangeTitle}
            value={pageTitle}
          ></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="description"
            className="adminform__form_input"
            onChange={handleChangeDescription}
            value={pageDescription}
          ></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="h1"
            className="adminform__form_input"
            onChange={handleChangeHeader}
            value={pageHeader}
          ></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="Категория"
            className="adminform__form_input"
            onChange={handleChanhgeCategoriesPage}
            value={categoriesPage}
          ></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="Время на чтение"
            className="adminform__form_input"
            onChange={handleChangeReadTime}
            value={readTime}
          ></input>
        </label>
        <label>
          <span>Популярная статья? xD Да/Нет</span>
          <input
            type="checkbox"
            className="adminform__form_input"
            onChange={handlePopularPage}
          ></input>
        </label>
        <button type="submit">Click</button>
      </form>
      <form className="adminform__form form__image" onSubmit={handleSubmitFile}>
        <label>
          <input
            type="file"
            className="adminform__form_input"
            accept="image/*,.png,.jpg,.gif,.web,"
            onChange={handleChangeFile}
          />
        </label>
        <button type="submit">Click</button>
        <div>
          <p>---------</p>
          <p>URL картинки - {fileImage}</p>
          <p>---------</p>
        </div>
      </form>
    </section>
  );
}
