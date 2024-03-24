import "./comment.scss";

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment__author">
        <div className="comment__author_avatar"></div>
        <div className="comment__author_info">
          <p className="comment__author_name">{comment.author}</p>
          <p className="comment__author_publickdate">{comment.publickDate}</p>
        </div>
      </div>
      <div className="comment__text">{comment.textComment}</div>
    </div>
  );
}
