import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const TextBox = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Ec = styled.h1`
  color: #f00;
  font-size: 150px;
`;
export const Nf = styled.h2`
  color: #ffc0c0;
  font-size: 120px;
`;
export const Text = styled.p`
  color: #fff;
  font-size: 50px;
`;
export const StyledLink = styled(Link)`
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
`;