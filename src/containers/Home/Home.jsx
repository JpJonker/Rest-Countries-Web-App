import React, { useState } from "react";
import { useQuery } from "react-query";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

import { CountryCard } from "../../components";
import "./Home.scss";

const Home = () => {
  const [countryName, setCountryName] = useState("");

  const getCountryByName = () => {
    return axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
  };

  const { data, isLoading, isError, error, isFetching, isFetched, refetch } = useQuery(
    "countryByName",
    getCountryByName,
    {
      enabled: false,
    }
  );

  return (
    <div className='app__home'>
      <div className='app__home-search-bar'>
        <button className='app__home-search-bar-btn' onClick={refetch}>
          <FaSearch className='search-bar-btn-icon' />
        </button>
        <input
          className='app__home-search-bar-input'
          onChange={(e) => setCountryName(e.target.value)}
          placeholder='Search for a country...'
        />
      </div>
      {isFetched ? <CountryCard data={data.data[0]} /> : <></>}
    </div>
  );
};

export default Home;
