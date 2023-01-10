import styled from "styled-components";
import { devices } from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled(Container)`
  align-items: flex-start;

  width: 90%;
`;

//TEMPORARY VISUALIZER FOR THE FLAG DATA
export const Flag = styled.div`
  background-color: red;
  height: 150px;
  width: 300px;

  @media ${devices.desktop} {
    margin-right: 150px;
  }
`;

// Container > Flag, Country Name
export const CountryContainer = styled(Container)`
  width: 90%;
  margin: 45px 0;

  .details-container {
    width: 100%;
  }

  .country-name {
    font-weight: 800;
    font-size: 25px;
    margin: 20px 0;
  }

  @media ${devices.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .details-container {
      width: fit-content;
    }
  }
`;

// Container > Text Details on the country
export const SpecificDetails = styled.div`
  & p {
    margin: 8px 0;
    font-weight: 600;
  }

  .extra-details {
    margin: 25px 0;

    .separationCommaNotOnFirst:not(:first-child)::before {
      content: ", ";
    }
  }

  @media ${devices.desktop} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    .extra-details {
      margin: 0 0 0 200px;
    }
  }
`;

// Container > Border Details
export const BorderContainer = styled.div`
  .bordering-countries {
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .border-title {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .border-card {
    margin: 0 8px 8px 0;
    text-align: center;
  }

  @media ${devices.desktop} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin-top: 30px;
    width: 600px;

    .border-title {
      margin-right: 15px;
    }

    .bordering-countries {
      display: inline-block;
      height: auto;
      max-width: 400px;

      & > .border-card {
        min-width: 80px;
        display: inline-block;
      }
    }
  }
`;
