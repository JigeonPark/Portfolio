import styled from "styled-components";
import { opacity0to1 } from "./Animation";

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
    letter-spacing: 1px;
    min-height: 45px;
    /* min-height: 41px; */
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
  letter-spacing: 1px;

  ${media.mobile} {
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.5px;
  }
`;

export const GolbalText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: "#7F7F7F";
  letter-spacing: 1px;

  ${media.mobile} {
    font-size: 9px;
    line-height: 17px;
    letter-spacing: 0.5px;
  }
`;

export const Line = styled.hr<{
  color?: String;
  vertical: String;
  time?: String;
}>`
  border: 1px solid ${(props) => (props.color === "black" ? "#1e1e1e" : "#fff")};
  width: ${(props) => (props.vertical === "true" ? "1px" : "1000px")};
  height: ${(props) => (props.vertical === "true" ? "100%" : "1px")};

  ${media.mobile} {
    width: ${(props) => (props.vertical === "true" ? "1px" : "345px")};
    height: ${(props) => (props.vertical === "true" ? "100%" : "1px")};
  }

  &#opacity {
    animation-name: ${opacity0to1};
    animation-duration: ${(props) => (props.time ? `${props.time}s` : "3s")};
  }
`;
