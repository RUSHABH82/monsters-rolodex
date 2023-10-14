import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onSearchBoxHandler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchBoxHandler}
    />
  );
};

export default SearchBox;
