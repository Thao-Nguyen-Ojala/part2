import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import CountriesList from "./components/CountriesList";
import Detail from "./components/Detail";
import Weather from "./components/Weather";

function App() {
  const [countries, setCountries] = useState([]);
  const [findCountry, setFindCountry] = useState("");
  const [countryToShow, setCountryToShow] = useState([]);

  useEffect(() => {
    Axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFindCountry = (event) => {
    setFindCountry(event.target.value);
    setCountryToShow([]);
  };

  const countryToRender = () => {
    const countryMatch = countries.filter((country) =>
      country.name.toLowerCase().includes(findCountry.toLowerCase())
    );
    return countryMatch;
  };

  let showCountry = (country) => {
    setCountryToShow([country]);
  };

  const countriesToRender = countryToRender();
  const isListSmallEnough = countriesToRender.length < 10;
  const gonnaRender = findCountry === "" || isListSmallEnough;

  if (countryToShow.length > 0) {
    return (
      <div>
        <p>find countries</p>

        <input value={findCountry} onChange={handleFindCountry} />
        <ul>
          <Detail detailOfCountry={countryToShow} />
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Find countries</h3>

        <input value={findCountry} onChange={handleFindCountry} />

        {gonnaRender ? (
          countriesToRender.length === 1 ? (
            <ul>
              <Detail detailOfCountry={countryToRender()} />
            </ul>
          ) : (
            <span>
              <CountriesList
                countryToRender={countriesToRender}
                renderButton={isListSmallEnough}
                showCountry={showCountry}
              />
            </span>
          )
        ) : (
          <p>Too many results, add more filter</p>
        )}

        <Weather />
      </div>
    );
  }
}

export default App;
