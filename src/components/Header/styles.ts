import styled from "styled-components";
import { devices } from "../../styles/devices";

export const Container = styled.div`
  height: 60px;
  padding: 0 10px;
  margin-bottom: 25px;
  font-weight: 800;
  background-color: ${(props) => props.theme.colors.elements};

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${devices.desktop} {
    padding: 0 70px;
  }
`;
