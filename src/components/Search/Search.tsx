import "./search.scss";

export default function Search() {
  return (
    <form className="searchform">
      <label className="search">
        <input
          type="search"
          className="search__input"
          name="search"
          placeholder=" "
        ></input>
        <button type="button" className="search__btn"></button>
      </label>
    </form>
  );
}
