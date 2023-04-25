import './searchbar.component.scss'
import { ReactComponent as Search } from '@/assets/icons/Search.svg'
import { useRef } from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { useSearch } from '../../context/header.context'

function SearchBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { searchValue, setSearchValue } = useSearch()

  const handleSearch = () => {
    if (location.pathname !== '/products') {
      const params = { search: searchValue }
      navigate({ pathname: '/products', search: `?${createSearchParams(params)}` })
    }
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className="search--input"
        placeholder="Tìm kiếm"
        onKeyDown={handleEnter}
      />
      <div className="icon" onClick={handleSearch}>
        <Search className="icon--search" />
      </div>
    </div>
  )
}

export default SearchBar
