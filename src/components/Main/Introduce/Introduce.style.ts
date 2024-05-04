import {
  BottomToZero,
  LeftToRight,
  RightToLeft,
  TopToZero,
  brightness0to100,
} from "@src/styles/Animation";
import {
  GolbalMainText,
  GolbalSubTitle,
  GolbalTitle,
  media,
} from "@src/styles/Style";
import styled from "styled-components";

export const Introduce = styled.header`
  display: flex;
  align-items: start;

  :nth-child(1) {
    animation: ${LeftToRight} 1s;
  }

  :nth-child(2) {
    animation: ${RightToLeft} 1s;
  }
`;

export const BackBoard = styled.div<{ color: String }>`
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${(props) =>
    props.color === "black" ? "#1e1e1e" : "#fff"};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
  }

  ${media.mobile} {
    div {
      gap: 20px;
      align-items: center;
      width: 150px;
    }
  }
`;

export const IntroduceTxt = styled(GolbalSubTitle)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  animation: ${TopToZero} 2s !important;
  height: auto;
  justify-content: start;
`;

export const Title = styled(GolbalTitle)`
  animation: ${brightness0to100} 5s !important;

  ${media.mobile} {
    text-align: center;
  }
`;

export const MainText = styled(GolbalMainText)`
  color: #1e1e1e;
  max-width: 459px;
  animation: ${BottomToZero} 2s !important;

  ${media.mobile} {
    font-weight: bold;
  }
`;
