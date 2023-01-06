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
`;
