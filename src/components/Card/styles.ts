import styled from "styled-components";
import { devices } from "../../styles/devices";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.elements};
  margin: 20px;
  border-radius: 8px;

  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  .info-container {
    padding: 15px;
    padding-top: 0;
  }

  .flag-container,
  .flag-container > img {
    width: 100%;
    height: 200px;
    border-radius: 8px 8px 0 0;
  }

  .countryName {
    font-weight: 800;
    font-size: 16px;

    margin: 20px 0;
  }

  .infoTitle {
    font-weight: 600;
  }

  @media ${devices.desktop} {
    width: 20%;
  } ;
`;
