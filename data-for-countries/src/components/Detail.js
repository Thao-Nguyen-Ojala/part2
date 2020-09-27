import React from "react";
import Weather from "./Weather";

const Detail = (props) => {
  const { detailOfCountry } = props;
  const detailList = detailOfCountry.map((country, i) => {
    return (
      <div key={i}>
        <h4>{country.name}</h4>
        <p>capital city: {country.capital}</p>
        <p>population: {country.population}</p>
        <h5>Languages</h5>
        {country.languages.map((language, j) => (
          <li key={j}>{language.nativeName}</li>
        ))}
        <img src={country.flag} alt={country.name}></img>
        <Weather capital={country.capital} />
      </div>
    );
  });
  return detailList;
};

export default Detail;
