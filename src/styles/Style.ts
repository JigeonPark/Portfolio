import styled from "styled-components";

export const GolbalSubTitle = styled.p<{ color?: String }>`
  font-size: 32px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const GolbalTitle = styled(GolbalSubTitle)<{ color?: String }>`
  font-size: 64px;
  background-color: ${(props) =>
    props.color === "black" ? "#1e1e1e" : "#fff"};
  text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`;

export const GolbalMainText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
