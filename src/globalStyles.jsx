import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        display: grid;
        place-items: center;
        background: #06283D;
    }


`;


export default GlobalStyle