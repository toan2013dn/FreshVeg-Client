import { createContext, useContext, useState } from 'react'

const SearchContext = createContext(undefined)

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')

  return <SearchContext.Provider value={{ searchValue, setSearchValue }}>{children}</SearchContext.Provider>
}

export const useSearch = () => {
  const context = useContext(SearchContext)

  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }

  return context
}
