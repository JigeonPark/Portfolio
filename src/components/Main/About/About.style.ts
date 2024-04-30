import { BottomToZero, brightness0to100 } from "@src/styles/Animation";
import {
  GolbalMainText,
  GolbalSubTitle,
  GolbalText,
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
  justify-content: center;

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

export const SecondeContainer = styled.div`
  width: 1000px;
  display: flex;
  align-items: start;
  justify-content: space-between;

  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;

  ${media.mobile} {
    width: 300px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  width: 431px;

  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    box-sizing: border-box;

    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #7f7f7f;
  }

  ${media.mobile} {
    width: 35vw;

    div {
      font-size: 11px;
      line-height: 17px;
      letter-spacing: 0.5px;
      padding-bottom: 13px;
    }
  }
`;

export const Title = styled(GolbalTitle)`
  /* animation: ${brightness0to100} 2s; */
`;

export const SubTitle = styled(GolbalSubTitle)`
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;

export const MainText = styled(GolbalMainText)<{ color?: String }>`
  color: ${(props) => (props.color === "white" ? "#fff" : "#1e1e1e")};
  /* animation: ${BottomToZero} 2s; */
`;

export const Text = styled(GolbalText)<{ color?: String }>`
  color: ${(props) => (props.color === "white" ? "#fff" : "#7f7f7f")};
`;

export const DotText = styled.ul<{ color?: String }>`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${(props) => (props.color === "white" ? "#fff" : "#7f7f7f")};

  box-sizing: border-box;
  padding-left: 13px;

  transition: 2s;
  overflow: hidden;

  li {
  }

  ${media.mobile} {
    letter-spacing: 0.5px;
    padding-left: 14.2px;

    li {
      font-size: 11px;
      line-height: 17px;
      letter-spacing: 0.5px;
    }
  }
`;
