import "./comments.scss";

import Comment from "../Comment/Comment";
import CommentsForm from "../CommentsForm/CommentsForm";

export default function Comments({ page }) {
  return (
    <div className="comments">
      <h2 className="comments__title">Comments</h2>
      {page.comments.length === 0 ? (
        <p className="comments__text">Оставьте первый комментарий!</p>
      ) : (
        <div className="comments__lists">
          {page.comments.map((comment, id) => (
            <Comment key={id} comment={comment} />
          ))}
        </div>
      )}
      <CommentsForm url={page.url} />
    </div>
  );
}
