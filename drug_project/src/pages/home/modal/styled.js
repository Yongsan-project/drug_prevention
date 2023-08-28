import styled from 'styled-components';
import { Button } from '../../../components/button/styled';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: rgba(0, 0, 0, .6);
  position: fixed;
  left: 0;
  top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const White = styled.div`
  width: 85%;
  height: 650px;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #D9D9D9;

  @media screen and (max-width: 400px){
    width: 300px;
    height: 500px;
  }

  >${Button}{
    background: green;
    color: #fff;
  }
`;

export const Title = styled.p`
  font-size: 45px;
  color: #333;
  background: #D9D9D9;
  @media screen and (max-width: 400px){
    font-size: 30px;
  }
`;
export const MiddleContainer = styled.div`
  display: flex;
  background: #D9D9D9;
  width: 85%;
  height: 350px;
  max-width: 950px;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px){
    height: 400px;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (max-width: 400px){
    height: 300px;
    row-gap: 10px;
  }
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #D9D9D9;
  row-gap: 10px;
  
  @media screen and (max-width: 400px){
    width: 200px;
  }
`;
export const Image = styled.div`
  width: 300px;
  height: 300px;  
  background: #333;
  background: url(${props => props.url}) no-repeat center center/cover;

  @media screen and (max-width: 1024px){
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 400px){
    width: 200px;
    height: 200px;
  }
`;
  
export const ImageTxt = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
  color: #f00;
  background: #D9D9D9;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 14px;
  }
  @media screen and (max-width: 400px){
    font-size: 10px;
  }
  `;
  
export const TextBox = styled.ul`
  width: 340px;
  background: #D9D9D9;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  align-items: left;
  justify-content: center;
  row-gap: 10px;
  font-size: 30px;
  @media screen and (max-width: 1024px){
    font-size: 25px;
    width: 280px;
  }
  @media screen and (max-width: 400px){
    width: 80%;
    font-size: 18px;
  }
`;
  
export const InCome = styled.li`
  background: #D9D9D9;
`;
export const Effect = styled.li`
  background: #D9D9D9;
`;
export const Price = styled.li`
  background: #D9D9D9;
`;