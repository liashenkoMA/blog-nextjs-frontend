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
  const [markdownVal, setMarkdownVal] = useState();

  console.log(markdownVal);

  function handleSubmit(e) {
    e.preventDefault();

    postPage(markdownVal);
  }

  return (
    <section className="admonform__conteiner">
      <MarkdownEditor
        value={markdownVal}
        height="200px"
        onChange={(value) => {
          setMarkdownVal(value);
        }}
      />
      <form onSubmit={handleSubmit}>
        <button type="submit">Click</button>
      </form>
    </section>
  );
}
