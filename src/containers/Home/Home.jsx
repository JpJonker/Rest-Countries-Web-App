import React, { useState } from "react";
import { useQuery } from "react-query";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

import { CountryCard } from "../../components";
import "./Home.scss";

const Home = () => {
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");

  const getCountryByName = () => {
    return axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
  };

  const getCountriesByRegion = () => {
    return axios.get(`https://restcountries.com/v3.1/region/${regionName}`);
  };

  const {
    data: countryByNameData,
    isLoading: countryByNameLoading,
    isError: countryByNameErrorOccured,
    error: countryByNameError,
    isFetching: countryByNameFetching,
    isFetched: countryByNameFetched,
    refetch: countryByNameRefetch,
  } = useQuery("countryByName", getCountryByName, {
    enabled: false,
  });

  const {
    data: countriesByRegionData,
    isLoading: countriesByRegionLoading,
    isError: countriesByRegionErrorOccured,
    error: countriesByRegionError,
    isFetching: countriesByRegionFetching,
    isFetched: countriesByRegionFetched,
    refetch: countriesByRegionRefetch,
  } = useQuery("countriesByRegion", getCountriesByRegion, {
    enabled: false,
  });

  return (
    <div className='app__home'>
      <div className='app__inputs-container'>
        <div className='app__home-search-bar'>
          <button className='app__home-search-bar-btn' onClick={countryByNameRefetch}>
            <FaSearch className='search-bar-btn-icon' />
          </button>
          <input
            className='app__home-search-bar-input'
            onChange={(e) => setCountryName(e.target.value)}
            placeholder='Search for a country...'
          />
        </div>
        <div className='app__home-region-selector'>
          <select name='region' id='region' onChange={(e) => setRegionName(e.target.value)}>
            <option value='africa'>Africa</option>
            <option value='americas'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>

          <button onClick={countriesByRegionRefetch}>search</button>
          <button onClick={() => console.log(countriesByRegionData.data)}>test</button>
        </div>
      </div>
      {countriesByRegionFetched ? (
        countriesByRegionData.data.map((country) => {
          return <CountryCard data={country} key={country.car[1]} />;
        })
      ) : countryByNameFetched ? (
        <CountryCard data={countryByNameData.data[0]} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
