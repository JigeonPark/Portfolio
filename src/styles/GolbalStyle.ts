import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #A9A9A9;
    background-clip: padding-box;
    border: 5px solid transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
       background-color: transparent
    /* box-shadow: inset 0px 0px 5px white; */
  }
  `;
