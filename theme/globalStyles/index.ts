import { createGlobalStyle } from "styled-components";
import reset from "theme/reset";

export const GlobalStyles = createGlobalStyle`
${reset};

html, body {
    font-family: 'Archivo', sans-serif;
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: hidden;
}

`;
