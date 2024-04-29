import { BottomToZero, brightness0to100 } from "@src/styles/Animation";
import {
  GolbalMainText,
  GolbalSubTitle,
  GolbalTitle,
  media,
} from "../../../styles/Style";
import styled from "styled-components";

export const Resume = styled.header`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const BackBoard = styled.div<{ color: String }>`
  width: 100vw;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
  background-color: ${(props) =>
    props.color === "black" ? "#1e1e1e" : "#fff"};

  ${media.mobile} {
    height: 500px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  width: 1000px;

  ${media.mobile} {
    width: 80vw;
  }
`;

export const Title = styled(GolbalTitle)`
  /* animation: ${brightness0to100} 2s; */
`;

export const SubTitle = styled(GolbalSubTitle)`
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;

export const MainText = styled(GolbalMainText)`
  color: #fff;
  /* animation: ${BottomToZero} 2s; */
`;
