import React from "react";
import Button from "./Button";

const CountriesList = (props) => {
  const { countryToRender, renderButton, showCountry } = props;

  const countriesList = countryToRender.map((country, i) => {
    return (
      <div key={i}>
        <span>{country.name}</span>
        {renderButton && <Button showCountry={showCountry} country={country} />}
      </div>
    );
  });
  return countriesList;
};

export default CountriesList;
