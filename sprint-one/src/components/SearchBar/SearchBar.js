import SearchIcon from '../../assets/icons/Icon-search.svg';

import './SearchBar.scss';

const SearchBar = () => {
  return (
      <input 
      className="searchbar"
      type="text"
      placeholder="Search"
      alt="search icon"
      src={SearchIcon}>
      </input>
  );
}

export default SearchBar;