import React from "react";

import Card from "../../components/Card/index";

import { Container, InputContainer, Input, Select, CardContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type CountryInfo = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: { svg: string; png: string };
};

interface Props {
  countryData: CountryInfo[];
  filterByRegion(region: string): void;
  filterByName(name: string): void;
  getAllCountries(): void;
}

const Home: React.FC<Props> = ({ countryData, filterByRegion, filterByName, getAllCountries }) => {
  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => {
            if (e.target.value === "") getAllCountries;
            else filterByName(e.target.value);
          }}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="inputIcon" />

        <Select
          defaultValue={0}
          onChange={(e) => {
            if (e.target.value === "") getAllCountries();
            else filterByRegion(e.target.value);
          }}
        >
          <option value={""}>Filter By Region</option>
          <option value={"Africa"}>Africa</option>
          <option value={"America"}>America</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Oceania"}>Oceania</option>
        </Select>
      </InputContainer>

      <CardContainer>
        {countryData.map((country, idx) => {
          return (
            <Card
              key={idx}
              flag={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
              name={country.name.common}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Home;
