import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
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

export const SubTitle = styled.p<{ color?: String }>`
  font-size: 32px;
  letter-spacing: 5%;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => (props.color === "black" ? "#1e1e1e" : "#fff")};
`;

export const Title = styled(SubTitle)<{ color?: String }>`
  font-size: 64px;
  background-color: #fff;
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

export const MainText = styled.p<{ color?: String }>`
  font-size: 20px;
  color: ${(props) => (props.color === "black" ? "#1e1e1e" : "#fff")};
`;
