import styled from "styled-components";

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const GolbalSubTitle = styled.p<{ color?: String }>`
  font-size: 32px;
  letter-spacing: 2px;
  font-weight: bold;
  min-height: 81px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.color === "black" ? "#1e1e1e" : "#fff")};

  ${media.mobile} {
    font-size: 16px;
    letter-spacing: 0.5px;
    min-height: 41px;
  }
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

  ${media.mobile} {
    font-size: 45px;
  }
`;

export const GolbalMainText = styled.p`
  font-size: 20px;
  font-weight: bold;

  ${media.mobile} {
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
  }
`;

export const Line = styled.hr<{ color?: String; vertical: String }>`
  border: 1px solid ${(props) => (props.color === "black" ? "#1e1e1e" : "#fff")};
  width: ${(props) => (props.vertical === "true" ? "1px" : "1000px")};
  height: ${(props) => (props.vertical === "true" ? "600px" : "1px")};

  ${media.mobile} {
    width: ${(props) => (props.vertical === "true" ? "1px" : "80vw")};
    height: ${(props) => (props.vertical === "true" ? "80vh" : "1px")};
  }
`;
