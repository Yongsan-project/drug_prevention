import styled from 'styled-components';
import { Button } from '../button/styled';

export const Item = styled.div`
  width: 330px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  border: solid 3px #DDD;
  @media screen and (max-width: 400px){
    width: 150px;
    height: 200px;
    border-radius: 15px;
    justify-content: space-evenly;
  }
`;

export const Title = styled.p`
  width: 100%;
  height: 35px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  @media screen and (max-width: 400px){
    height: 20px;
    font-size: 20px;
    border-radius: 15px;
  }
`;

export const Image = styled.div`
  width: 230px;
  height: 230px;
  background: url(${props => props.url}) no-repeat center center/cover;
  @media screen and (max-width: 400px){
    width: 100px;
    height: 100px;
  }
`;

export const Btns = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 400px){
    width: 100px;
    height: 52px;
    flex-direction: column;
  }
  >${Button}{
    width: 130px;
    height: 45px;
    font-size: 25px;
    @media screen and (max-width: 400px){
      width: 100px;
      height: 25px;
      font-size: 13px;
    }
  }
  >${Button}:nth-child(1){
    background: #D9D9D9;
  }
  >${Button}:nth-child(2){
    background: #2A9742;
    color: #fff;
  }
`;