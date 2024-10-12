import React, {useContext} from 'react'
import SearchContext from '../../context/SearchContext'
import './SearchBar.css'

const SearchBar = () => {
  const { setKeyword, setPage } = useContext(SearchContext);

  const handleSearch = (event) => {
      if (event.key === 'Enter') {
          setKeyword(event.target.value);
          setPage(1); // Reset to first page
      }
  };
  return (
    <div className="search-bar">
    <input
        type="text"
        placeholder="Search news..."
        onKeyDown={handleSearch}
    />
</div>
  )
}

export default SearchBar
