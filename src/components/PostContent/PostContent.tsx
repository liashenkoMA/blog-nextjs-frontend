import { MDXRemote } from "next-mdx-remote/rsc";
import "./postcontent.scss";

const components = {
  h1: (props) => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 {...props} className="post__content_header_h2">
      {props.children}
    </h2>
  ),
  p: (props) => (
    <p {...props} className="post__content_text">
      {props.children}
    </p>
  ),
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
