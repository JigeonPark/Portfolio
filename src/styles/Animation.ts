import { keyframes } from "styled-components";

export const LeftToRight = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const RightToLeft = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const TopToZero = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const BottomToZero = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const opacity0to1 = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
