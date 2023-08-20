import React, { useState, useContext } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState(""); // search state
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext); // search data

  const handleInput = (e) => {
    const query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };
  
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-96 relative flex items-center ml-7 font-nunito"
      >
        <input
          type="text"
          name="search"
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
          placeholder="Search here..."
          value={searchText}
          onChange={handleInput}
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} className="w-full h-auto" alt="search" />
        </button>
      </form>
      {searchText.length === 0 ? (
        <ul className="absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                  className="flex items-center justify-between px-3 py-2 hover:bg-gray-300"
                >
                  <div className="flex items-center">
                    <img
                      src={coin.large}
                      className="w-8 h-8 rounded-full"
                      alt={coin.name}
                    />
                    <p className="ml-2">{coin.name}</p>
                  </div>
                  <p className="font-bold text-cyan">{coin.symbol}</p>
                </li>
              );
            })
          ) : (
            <li className="flex items-center justify-center px-3 py-2 hover:bg-gray-300">
              <p className="text-gray-100">Please wait...</p>
            </li>
          )}
        </ul>
      ) : null}
    </div>
  );
};

const Search = () => {
  const { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 1000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;
