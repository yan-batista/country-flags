import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";

import { SwitchContainer } from "./styles";

interface Props {
  colorTheme: string;
  toggleTheme(): void;
}

const Switch: React.FC<Props> = ({ colorTheme, toggleTheme }) => {
  return (
    <SwitchContainer onClick={toggleTheme}>
      <FontAwesomeIcon icon={colorTheme == "light" ? regularMoon : solidMoon} />
      <p className="themeName">{colorTheme == "light" ? "Dark Mode" : "Light Mode"}</p>
    </SwitchContainer>
  );
};

export default Switch;
