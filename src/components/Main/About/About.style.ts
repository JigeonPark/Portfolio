import { BottomToZero, brightness0to100 } from "@src/styles/Animation";
import {
  GolbalMainText,
  GolbalSubTitle,
  GolbalText,
  GolbalTitle,
  media,
} from "../../../styles/Style";
import styled from "styled-components";

export const About = styled.header`
  display: flex;
  align-items: start;
  flex-direction: column;

  overflow-x: hidden;
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

export const VolunteeringText = styled.ul`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  color: "#7f7f7f";

  box-sizing: border-box;

  transition: 2s;
  overflow: hidden;

  div {
    padding-top: 10px;
    padding-left: 13px;
  }

  ${media.mobile} {
    font-size: 11px;
    div {
      padding-top: 5px;
    }
  }
`;

export const VolunteeringContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;
  gap: 10px;

  p[id="arrow"] {
    position: absolute;
    right: -10px;
    top: 0px;
    transition: 2s;

    ${media.mobile} {
      font-size: 10px;
      right: -2px;
    }
  }
`;

export const ExperienceContainer = styled.div`
  gap: 10px;
`;

export const Company = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  border-radius: 40px;
  padding: 20px;

  background-color: #fff;
  transition: 2s;
`;

export const ExperienceText = styled.div`
  width: 100%;

  font-weight: bold;
  letter-spacing: 1px;
  color: "#1e1e1e";

  box-sizing: border-box;
  transition: 1s;
  overflow: hidden;

  div,
  p {
    font-size: 14px;
  }

  div[id="PD"] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      font-size: 16px;
    }
  }

  #detailContext {
    p {
      margin-top: 7px;
    }
    ul {
      box-sizing: border-box;
      padding-left: 13px;
    }
  }
`;
