import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState(""); // search state
  const [coinSearch, setCoinSearch] = useState(""); // search state
  const [currency, setCurrency] = useState("usd"); // currency state
  const [sortBy, setSortBy] = useState("market_cap_desc"); // sort state
  const [page, setPage] = useState(1); // page state
  const [totalPages, setTotalPages] = useState(250); // total pages state

  const getCryptoData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/list`
      )
        .then((res) => res.json())
        .then((json) => json);

      console.log(data);
      setTotalPages(data.length);
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      )
        .then((res) => res.json())
        .then((json) => json);
      setCryptoData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSearchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);
      console.log(data);
      setSearchData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFunction = () => {
    setPage(1);
    setCoinSearch("");
    setSortBy("market_cap_desc");
    setCurrency("usd");
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        sortBy, 
        setSortBy,
        page,
        setPage,
        totalPages,
        setTotalPages,
        resetFunction,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
