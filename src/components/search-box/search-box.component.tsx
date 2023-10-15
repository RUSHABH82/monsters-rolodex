import "./search-box.styles.css";
import {ChangeEvent, ChangeEventHandler} from "react";

type SearchBoxProp = {
    className: string,
    placeholder?: string,
//  onSearchBoxHandler: ChangeEventHandler<HTMLInputElement>
    onSearchBoxHandler: (event: ChangeEvent<HTMLInputElement>) => void
}
const SearchBox = ({className, placeholder, onSearchBoxHandler}: SearchBoxProp) => {
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
