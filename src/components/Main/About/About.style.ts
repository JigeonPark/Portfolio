import {
  GolbalMainText,
  GolbalSubTitle,
  GolbalTitle,
} from "../../../styles/Style";
import styled from "styled-components";

export const About = styled.header`
  display: flex;
  align-items: start;
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
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
  }
`;

export const IntroduceTxt = styled(GolbalSubTitle)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* color: #1e1e1e; */
`;

export const Title = styled(GolbalTitle)``;

export const MainText = styled(GolbalMainText)`
  color: #1e1e1e;
`;
