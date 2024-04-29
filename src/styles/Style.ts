import styled from "styled-components";

export const GolbalSubTitle = styled.p<{ color?: String }>`
  font-size: 32px;
  letter-spacing: 2px;
  font-weight: bold;
  height: 81px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.color === "black" ? "#1e1e1e" : "#fff")};
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

export const Line = styled.hr<{ color?: String; isVertical: Boolean }>`
  border: 1px solid ${(props) => (props.color === "black" ? "#1e1e1e" : "#fff")};
  width: ${(props) => (props.isVertical === true ? "1px" : "1000px")};
  height: ${(props) => (props.isVertical === true ? "600px" : "1px")};
`;
