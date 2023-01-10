import "../styles/Search.scss";

export default function Search() {
  return (
    <form className="searchForm">
      <label htmlFor="text"></label>
      <input className="searchForm-input input" type="text" required />
      <button>Search</button>
    </form>
  );
}
