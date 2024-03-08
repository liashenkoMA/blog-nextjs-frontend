"use client";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "./adminform.scss";

import { useEffect, useState } from "react";
import {
  getTags,
  postCategory,
  postFile,
  postPage,
  postTags,
} from "@/utils/mainApi";
import { ITags } from "@/interface/interface";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);

export default function AdminForm() {
  const [markdownVal, setMarkdownVal] = useState("");
  const [urlPage, setUrlPage] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postAltImage, setPostAltImage] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [pageHeader, setPageHeader] = useState("");
  const [categoriesPage, setCategoriesPage] = useState("");
  const [readTime, setReadTime] = useState("");
  const [popularPage, setPopularPage] = useState(false);

  const [tags, setTags] = useState([]);
  const [checkTags, setCheckTags] = useState([]);

  useEffect(() => {
    getTags().then((res) => {
      setTags(res);
    });
  }, []);

  function handleChangeUrl(e) {
    setUrlPage(e.target.value);
  }

  function handlePostImage(e) {
    setPostImage(e.target.value);
  }

  function handlePostAltImage(e) {
    setPostAltImage(e.target.value);
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

  function checkTagsForPage(e) {
    if (e.target.checked === true) {
      const tag = tags.find((tag: ITags) => tag.url === e.target.value);
      setCheckTags([tag, ...checkTags]);
    } else {
      setCheckTags((state) => state.filter((c) => c.url !== e.target.value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    postPage(
      markdownVal,
      urlPage,
      postImage,
      postAltImage,
      pageTitle,
      pageDescription,
      pageHeader,
      categoriesPage,
      readTime,
      popularPage,
      checkTags
    );
  }

  /* File */

  const [file, setFile] = useState();
  const [fileImage, setFileImage] = useState();

  function handleChangeFile(e) {
    setFile(e.target.files[0]);
  }

  function handleSubmitFile(e) {
    e.preventDefault();

    postFile(file).then((res) => {
      setFileImage(res.filePath);
    });
  }

  /* Tags */

  const [urlTags, setUrlTags] = useState("");
  const [metaTitleTags, setMetaTitleTags] = useState("");
  const [metaDescriptionTags, setMetaDescriptionTags] = useState("");
  const [nameTags, setNameTags] = useState("");
  const [descriptionTags, setDescriptionTags] = useState("");
  const [imageUrlTags, setImageUrlTags] = useState("");
  const [imageAltTags, setImageAltTags] = useState("");

  function handleChangeUrlTags(e) {
    setUrlTags(e.target.value);
  }

  function handleChangeMetaTitleTags(e) {
    setMetaTitleTags(e.target.value);
  }

  function handleChangeMetaDescriptionTags(e) {
    setMetaDescriptionTags(e.target.value);
  }

  function handleChangeNameTags(e) {
    setNameTags(e.target.value);
  }

  function handleChangeDescriptionTags(e) {
    setDescriptionTags(e.target.value);
  }

  function handleChangeImageUrlTags(e) {
    setImageUrlTags(e.target.value);
  }

  function handleChangeImageAltTags(e) {
    setImageAltTags(e.target.value);
  }

  function handleSubmitTags(e) {
    e.preventDefault();

    postTags(
      urlTags,
      metaTitleTags,
      metaDescriptionTags,
      nameTags,
      descriptionTags,
      imageUrlTags,
      imageAltTags
    );
  }

  /* Category */

  const [urlCategory, setUrlCategory] = useState("");
  const [metaTitleCategory, setMetaTitleCategory] = useState("");
  const [metaDescriptionCategory, setMetaDescriptionCategory] = useState("");
  const [nameCategory, setNameCategory] = useState("");
  const [descriptionCategory, setDescriptionCategory] = useState("");
  const [imageUrlCategory, setImageUrlCategory] = useState("");
  const [imageAltCategory, setImageAltCategory] = useState("");

  function handleChangeUrlCategory(e) {
    setUrlCategory(e.target.value);
  }

  function handleChangeMetaTitleCategory(e) {
    setMetaTitleCategory(e.target.value);
  }

  function handleChangeMetaDescriptionCategory(e) {
    setMetaDescriptionCategory(e.target.value);
  }

  function handleChangeNameCategory(e) {
    setNameCategory(e.target.value);
  }

  function handleChangeDescriptionCategory(e) {
    setDescriptionCategory(e.target.value);
  }

  function handleChangeImageUrlCategory(e) {
    setImageUrlCategory(e.target.value);
  }

  function handleChangeImageAltCategory(e) {
    setImageAltCategory(e.target.value);
  }

  function handleSubmitCategory(e) {
    e.preventDefault();

    postCategory(
      urlCategory,
      metaTitleCategory,
      metaDescriptionCategory,
      nameCategory,
      descriptionCategory,
      imageUrlCategory,
      imageAltCategory,
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
            placeholder="postImage"
            className="adminform__form_input"
            onChange={handlePostImage}
            value={postImage}
          ></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="postAltImage"
            className="adminform__form_input"
            onChange={handlePostAltImage}
            value={postAltImage}
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
            placeholder="Url категории!!!"
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
        <div>
          {tags.map((tag) => (
            <div key={tag.url} className="adminform__form_list">
              <p className="adminform__form_list-page">{tag.name}</p>
              <input
                type="checkbox"
                value={tag.url}
                onClick={checkTagsForPage}
              ></input>
            </div>
          ))}
        </div>
        <button type="submit">Опубликовать статью</button>
      </form>
      <form
        className="adminform__form form__position"
        onSubmit={handleSubmitFile}
      >
        <span>Images</span>
        <label>
          <input
            type="file"
            className="adminform__form_input"
            accept="image/*,.png,.jpg,.gif,.web,"
            onChange={handleChangeFile}
          />
        </label>
        <div>
          <p>---------</p>
          <p>URL картинки - {fileImage}</p>
          <p>---------</p>
        </div>
        <button type="submit">Загрузить картинку</button>
      </form>
      <form
        className="adminform__form form__position"
        onSubmit={handleSubmitTags}
      >
        <span>Tags</span>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="url"
            onChange={handleChangeUrlTags}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="metaTitle"
            onChange={handleChangeMetaTitleTags}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="metaDescription"
            onChange={handleChangeMetaDescriptionTags}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="name"
            onChange={handleChangeNameTags}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="description"
            onChange={handleChangeDescriptionTags}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="imageUrl"
            onChange={handleChangeImageUrlTags}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="Alt image"
            onChange={handleChangeImageAltTags}
          ></input>
        </label>
        <button type="submit">Создать Tag</button>
      </form>
      <form
        className="adminform__form form__position"
        onSubmit={handleSubmitCategory}
      >
        <span>Категории</span>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="url"
            onChange={handleChangeUrlCategory}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="metaTitle"
            onChange={handleChangeMetaTitleCategory}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="metaDescription"
            onChange={handleChangeMetaDescriptionCategory}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="name"
            onChange={handleChangeNameCategory}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="description"
            onChange={handleChangeDescriptionCategory}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="imageUrl"
            onChange={handleChangeImageUrlCategory}
          ></input>
        </label>
        <label>
          <input
            type="text"
            className="adminform__form_input"
            placeholder="Alt image"
            onChange={handleChangeImageAltCategory}
          ></input>
        </label>
        <button type="submit">Создать категорию</button>
      </form>
    </section>
  );
}
