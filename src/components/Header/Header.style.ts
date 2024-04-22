import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 600px;
  min-height: 50px;

  border-radius: 25px;
  background: rgba(169, 169, 169, 0.7);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: absolute;
  left: calc(50% - 300px);
  top: 20px;
  z-index: 999;
`;

export const HeaderBtn = styled.button`
  color: $GlobalBlack;
`;
