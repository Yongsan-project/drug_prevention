import styled from 'styled-components';
import { Button } from '../../components/button/styled';
import { InputTag } from '../../components/input/styled';
import LogoSrc from '../../image/logoImg-removebg-preview.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  >${InputTag}{
    width: 70%;
    height: 8%;
    max-width: 600px;
    background: #fff;
    padding: 0 20px;
    border-radius: 15px;
    font-size: 18px;
    @media screen and (max-width: 400px){
      font-size: 16px;
    }
  }
`;

export const LogoImage = styled.div`
  width: 90%;
  max-width: 900px;
  height: 110px;
  background: url(${LogoSrc}) no-repeat center center/cover;
`;

export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  >${Button}{
    width: 150px;
    height: 50px;
    background: #fff;
    font-weight: 600;
    &:nth-child(2){
      width: 55px;
      height: 25px;
      color: #fff;
      background: #1E1E1E;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: solid 1px #fff;
      font-size: 14px;
      font-weight: 100;
    }
  }
`;