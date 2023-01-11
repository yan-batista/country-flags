import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface Props {
  flag: string;
  population: number;
  name: string;
  region: string;
  capital: string;
  cca3: string;
}

const Card: React.FC<Props> = ({ flag, population, name, region, capital, cca3 }) => {
  return (
    <Container>
      <Link to={`details/${cca3}`}>
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
      </Link>
    </Container>
  );
};

export default Card;
