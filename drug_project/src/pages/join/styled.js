import styled from 'styled-components';
import LogoSrc from '../../image/logoImg-removebg-preview.png';
import { InputTag } from '../../components/input/styled';
import { Button } from '../../components/button/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  // background: #1E1E1E;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  >${Button}{
    width: 150px;
    height: 50px;
    background: #fff;
    font-weight: 600;
  }
`;

export const Form = styled.div`
  width: 90%;
  min-height: 500px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;
  
export const FormEl = styled.div`
width: 600px;
height: 110px;
display: flex;
flex-direction: column;
justify-content: space-around;
>${InputTag}{
  width: 100%;
  height: 80px;
  border-radius: 15px;
  background: #D9D9D9;
  padding: 0 20px;
  font-size: 18px;
}
`;

export const Message = styled.p`
  width: 100%;
  height: 20px;
  padding: 0 20px;
  color: ${props => props.bool ? 'green' : 'red'};
`;

export const LogoImage = styled.div`
  width: 90%;
  max-width: 900px;
  height: 110px;
  background: url(${LogoSrc}) no-repeat center center/cover;
`;