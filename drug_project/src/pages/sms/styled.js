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
  >${Button}{
    width: 150px;
    height: 50px;
    background: #fff;
    font-weight: 600;
  }
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

export const LogoImage = styled.div`
  width: 90%;
  max-width: 900px;
  height: 110px;
  background: url(${LogoSrc}) no-repeat center center/cover;
`;