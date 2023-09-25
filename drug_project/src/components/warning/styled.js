import styled, { keyframes } from "styled-components";

export const ChangeColor = keyframes`
  from{
    background: #B70404;
  }
  50%{
    background: #6F0F40;
  }
  to{
    background: #191D88;
  }
  `;

export const ShakeIt = keyframes`
  from{
    transform: scale(1);
    // background: #B70404;
  }
  50%{
    transform: scale(1.3);
    // background: #6F0F40;
  }
  to{
    transform: scale(1);
    // background: #191D88;
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #B70404;
  overflow: hidden;
  animation: ${ChangeColor} .5s infinite alternate;
`;

export const WarningImage = styled.img`
  width: 150px;
  height: 150px;
  background: transparent;
  animation: ${ShakeIt} 1s infinite;
`;