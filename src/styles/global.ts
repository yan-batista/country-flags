import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --desktop: 992px;
    }

    *, input::placeholder {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        color: ${(props) => props.theme.colors.text};
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
    }

    .btn {
        padding: 5px 20px;

        background-color: ${(props) => props.theme.colors.elements};

        border-radius: 4px;
        border: none;

        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

        cursor: pointer;
    }
`;
