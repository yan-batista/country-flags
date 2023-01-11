import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import { Container, ButtonContainer, CountryContainer, Flag, SpecificDetails, BorderContainer } from "./styles";

const CountryDetails = () => {
  const params = useParams();
  const [country, setCountry] = useState({
    name: { common: "" },
    altSpellings: "",
    population: 0,
    region: "",
    subregion: "",
    capital: "",
    tld: "",
    currencies: { currType: { name: "" } },
    languages: {},
    borders: [],
    flags: { png: "" },
  });

  useEffect(() => {
    getCountry();
  }, [params.countryName]);

  // Get Country data from API get using the country name from parameter
  const getCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${params.countryName}`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((err) => console.log(err));
  };

  const getCurrencies = () => {
    // returns key for the currency (ARS, BRL, USD) as string
    const countryCurrencies: string[] = Object.keys(country.currencies);

    /* 
   - the previous string countryCurrencies could be ANYTHING, therefore should not be used as a key like 
   - country.currencies.countryCurrencies[i].name or country.currencies[countryCurrencies[i]].
   - Because of that, we use - countryCurrencies[i] as keyof typeof country.currencies -, this way, we have a definition that the string is
   - a key of type country.currency
    */
    return countryCurrencies.map((currency, idx) => {
      return (
        <span key={idx} className="separationCommaNotOnFirst">
          {country.currencies[currency as keyof typeof country.currencies].name}
        </span>
      );
    });
  };

  // Get all languages, considering the same thing specified at getCurrencies()
  const getLanguages = () => {
    const countryLanguages: string[] = Object.keys(country.languages);
    return countryLanguages.map((lang, idx) => {
      return (
        <span key={idx} className="separationCommaNotOnFirst">
          {country.languages[lang as keyof typeof country.languages]}
        </span>
      );
    });
  };

  const getBorders = () => {
    return country.borders.map((border, idx) => {
      return (
        <Link to={`/details/${border}`} className="btn border-card" key={idx}>
          {border}
        </Link>
      );
    });
  };

  return (
    <Container>
      <ButtonContainer>
        <Link className="btn" to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} /> Back
        </Link>
      </ButtonContainer>

      <CountryContainer>
        <img src={country.flags.png} className="countryFlagImg" />

        <div className="details-container">
          <p className="country-name">{country.name.common}</p>

          <SpecificDetails>
            <div className="region-details">
              <p>
                Native Name: <span>{country.altSpellings[country.altSpellings.length - 1]}</span>
              </p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>

            <div className="extra-details">
              <p>
                Top Level Domain: <span>{country.tld}</span>
              </p>
              <p>
                Currencies: <>{getCurrencies()}</>
              </p>
              <p>
                Languages: <>{getLanguages()}</>
              </p>
            </div>
          </SpecificDetails>

          <BorderContainer>
            <p className="border-title">Border Countries:</p>
            <div className="bordering-countries">{country.borders && getBorders()}</div>
          </BorderContainer>
        </div>
      </CountryContainer>
    </Container>
  );
};

export default CountryDetails;
