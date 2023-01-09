import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// temas
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

// pages
import Home from "./pages/Home/Home";
import CountryDetails from "./pages/CountryDetails";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import usePersistedState from "./utils/usePersistedState";

type CountryInfo = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: { svg: string; png: string };
};

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);
  const [countries, setCountries] = useState<CountryInfo[]>([]);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  };

  const filterByRegion = (region: string) => {
    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  };

  const filterByName = (name: string) => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header toggleTheme={toggleTheme} />}>
            <Route
              index
              element={
                <Home
                  countryData={countries}
                  filterByRegion={filterByRegion}
                  filterByName={filterByName}
                  getAllCountries={getAllCountries}
                />
              }
            />

            <Route path="details/:countryName" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
