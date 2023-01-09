import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import { Container, ButtonContainer, CountryContainer, Flag, SpecificDetails, BorderContainer } from "./styles";

const CountryDetails = () => {
  return (
    <Container>
      <ButtonContainer>
        <button className="btn">
          <FontAwesomeIcon icon={faArrowLeftLong} /> Back
        </button>
      </ButtonContainer>

      <CountryContainer>
        <Flag />

        <div className="details-container">
          <p className="country-name">Belgium</p>

          <SpecificDetails>
            <div className="region-details">
              <p>Native Name:</p>
              <p>Population:</p>
              <p>Region:</p>
              <p>Sub Region:</p>
              <p>Capital:</p>
            </div>

            <div className="extra-details">
              <p>Top Level Domain:</p>
              <p>Currencies:</p>
              <p>Languages:</p>
            </div>
          </SpecificDetails>

          <BorderContainer>
            <p className="border-title">Border Countries:</p>
            <div className="bordering-countries">
              <button className="btn border-card">Country1</button>
              <button className="btn border-card">Country2</button>
              <button className="btn border-card">Country3</button>
              <button className="btn border-card">Country3</button>
              <button className="btn border-card">Country3</button>
              <button className="btn border-card">Country3</button>
              <button className="btn border-card">Country3</button>
              <button className="btn border-card">Country3</button>
            </div>
          </BorderContainer>
        </div>
      </CountryContainer>
    </Container>
  );
};

export default CountryDetails;
