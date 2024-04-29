import { media } from "@src/styles/Style";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: start;
  flex-direction: column;

  width: 520px;
  height: 50px;

  box-sizing: border-box;
  padding: 8px;
  border-radius: 25px;
  background: rgba(169, 169, 169, 0.7);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: fixed;
  left: calc(50% - 260px);
  top: 20px;
  z-index: 999;
  transition: 1s;

  ${media.mobile} {
    width: 300px;
    height: 30px;
    padding: 5px;
    top: 20px;
    left: calc(50% - 150px);
    border-radius: 15px;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBtn = styled.button<{ border: String }>`
  border: none;
  background: none;

  color: ${(props) => (props.border === "true" ? "#1e1e1e" : "#fff")};
  transition: 1s;
  text-shadow: ${(props) =>
    props.border === "true" ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  font-size: 24px;
  font-weight: bold;

  width: 120px;
  height: 35px;
  cursor: pointer;

  ${media.mobile} {
    width: 70px;
    height: 20px;
    font-size: 12px;
  }
`;

export const Border = styled.div`
  border-radius: 17.5px;
  background-color: #d9d9d9;

  width: 120px;
  height: 35px;

  position: absolute;
  z-index: -1;
  transition: 1s;

  ${media.mobile} {
    width: 70px;
    height: 20px;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-evenly;

  width: 100%;
  height: 65px;
  cursor: pointer;

  ${media.mobile} {
    height: 35px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
