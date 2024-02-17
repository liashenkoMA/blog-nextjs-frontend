"use client";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "./adminform.scss";

import { useState } from "react";
import { postPage } from "@/utils/mainApi";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

export default function AdminForm() {
  const [markdownVal, setMarkdownVal] = useState("");
  const [urlPage, setUrlPage] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [pageHeader, setPageHeader] = useState("");
  const [categoriesPage, setCategoriesPage] = useState("");
  const [readTime, setReadTime] = useState("");

  function handleChangeUrl(e) {
    setUrlPage(e.target.value);
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

  function handleSubmit(e) {
    e.preventDefault();

    postPage(
      markdownVal,
      urlPage,
      pageTitle,
      pageDescription,
      pageHeader,
      categoriesPage,
      readTime
    );
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
        <button type="submit">Click</button>
      </form>
    </section>
  );
}
