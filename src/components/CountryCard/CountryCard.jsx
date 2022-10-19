import React from "react";

import "./CountryCard.scss";

const CountryCard = ({ data }) => {
  return (
    <div className='countryCard'>
      <img className='countryCardFlag' src={data.flags.png} alt={`flag of ${data.name.common}`} />
      <div className='countryCardContent'>
        <h3>{data.name.common}</h3>
        <div className='countryCardInfo'>
          <h4>
            Population:<span className='countryDetails'> {data.population}</span>
          </h4>
          <h4>
            Region:<span className='countryDetails'> {data.region}</span>
          </h4>
          <h4>
            Capital: <span className='countryDetails'> {data.capital}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
