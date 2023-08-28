import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  left: 0;
  top: 0;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  width: 100%;

  @media screen and (max-width: 1024px){
    margin-top: 0;
  }
`;