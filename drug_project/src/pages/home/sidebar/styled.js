import styled from 'styled-components';
import UserIMGSrc from '../../../image/profileImg.png';
import { Aside, Title } from '../aside/styled';
import * as Cate from '../aside/category/styled';
import { List } from '../aside/category/list/styled';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  position: fixed;
  left: 0;
  top: 80px;
  background: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: flex-end;
`;

export const Board = styled.div`
  width: 80%;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  justify-content: space-evenly;
  height: 100%;
  padding: 20px 0;
  overflow:scroll;
  >${Aside}{
    width: 80%;
    border: none;
    // >${Title}{
    //   background: #333;
    // }
    // >${Cate.Container}{
    //   background: #333;
    //   >${List}{
    //     background: #333;
    //   }
    // }
  }
  @media screen and (max-height: 800px){
    overflow-y: scroll;
    padding: 170px 0 10px 0;
  }
`;

export const User = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #333;
`;

export const Image = styled.div`
  width: 60px;
  height: 60px;
  background: url(${UserIMGSrc}) no-repeat center center/cover;
`;

export const UserID = styled.p`
  color: #fff;
  font-weight: 600;
  background: #333;
`;

export const Font = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  background: #333;
`;