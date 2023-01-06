import React from "react";

import { Container } from "./styles";

interface Props {
  flag: string;
  population: number;
  name: string;
  region: string;
  capital: string;
}

const Card: React.FC<Props> = ({ flag, population, name, region, capital }) => {
  return (
    <Container>
      <div className="flag-container">
        <img src={flag}></img>
      </div>
      <div className="info-container">
        <p className="countryName">{name}</p>
        <p>
          <span className="infoTitle">Population:</span> {population}
        </p>
        <p>
          <span className="infoTitle">Region:</span> {region}
        </p>
        <p>
          <span className="infoTitle">Capital:</span> {capital}
        </p>
      </div>
    </Container>
  );
};

export default Card;
