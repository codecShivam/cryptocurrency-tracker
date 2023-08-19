import React from "react";
import { useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const Search = () => {
  const [searchtext, setSearchtext] = useState(""); // search state
  let {getSearchResult} = useContext(CryptoContext);
  const handleInput = (e) => {
    let query = e.preventDefault();
    setSearchtext(query);
  };

  return (
    <div>
      <form className="w-96 relative flex items-center ml-7 font-nunito ">
        <input
          typeof="text"
          name="search"
          className=" w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
          type="text"
          placeholder="Search here..."
        />
        <button type="submit" className=" absolute right-1 cursor-pointer">
          <img src={searchIcon} className="w-full h-auto" alt="search" />
        </button>
      </form>
      {searchtext.length > 0 ? (
        <ul className="absolute top-11 right-0 w-full  h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          <li>bitcoin</li>
          <li>ethereum</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Search;
