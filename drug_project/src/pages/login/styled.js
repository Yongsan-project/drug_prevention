import styled from 'styled-components';
import { InputTag } from '../../components/input/styled.js';
import { Button } from '../../components/button/styled.js';
import { Link } from 'react-router-dom';
import LogoSrc from '../../image/logoImg-removebg-preview.png';

export const Title = styled.h2``;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  >${InputTag}{
    width: 70%;
    height: 8%;
    max-width: 600px;
    background: #fff;
    padding: 0 20px;
    border-radius: 15px;
    font-size: 18px;
  }
`;

export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  ${Button}{
    width: 150px;
    height: 50px;
    background: #fff;
    font-weight: 600;
  }
`;

export const Join = styled(Link)`
  width: content-fit;
  height: 25px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #fff;
  font-size: 14px;
`;

export const LogoImage = styled.div`
  width: 90%;
  max-width: 900px;
  height: 110px;
  background: url(${LogoSrc}) no-repeat center center/cover;
`;