import "./searchbar.component.scss";
import { ReactComponent as Search } from "@/assets/icons/Search.svg";
import { useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate()
  const searchRef = useRef(null)

  const handleSearch = () => {
    const params = { search: searchRef.current.value }
    navigate({ pathname: '/products', search: `?${createSearchParams(params)}` })
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search">
      <input ref={searchRef} type="text" className="search--input" placeholder="Tìm kiếm" onKeyDown={handleEnter} />
      <div className="icon" onClick={handleSearch}>
        <Search className="icon--search" />
      </div>
    </div>
  );
}

export default SearchBar;
