import styled from "styled-components";
import { devices } from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
  } ;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 90%;

  .inputIcon {
    position: absolute;
    top: 18px;
    left: 25px;
  }

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } ;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 8px;
  margin-bottom: 35px;

  border-radius: 4px;
  border: none;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  text-indent: 50px;

  background-color: ${(props) => props.theme.colors.elements};

  @media ${devices.desktop} {
    width: 30%;
  } ;
`;

export const Select = styled.select`
  padding: 15px 8px;
  margin-bottom: 35px;

  border-radius: 4px;
  border: none;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  background-color: ${(props) => props.theme.colors.elements};
`;
