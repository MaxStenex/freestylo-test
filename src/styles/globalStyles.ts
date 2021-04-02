import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: monospace;
  }
`;
