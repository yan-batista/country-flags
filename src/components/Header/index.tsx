import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "styled-components";
import Switch from "../Switch";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <p>Where in the world?</p>

        <Switch colorTheme={title} toggleTheme={toggleTheme} />
      </Container>

      <Outlet />
    </>
  );
};

export default Header;
