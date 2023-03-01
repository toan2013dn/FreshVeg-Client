import "./searchbar.component.scss";
import { ReactComponent as Search } from "@/assets/icons/Search.svg";

function SearchBar() {
  return (
    <div className="search">
      <input type="text" className="search--input" placeholder="Tìm kiếm" />
      <div className="icon">
        <Search className="icon--search" />
      </div>
    </div>
  );
}

export default SearchBar;
