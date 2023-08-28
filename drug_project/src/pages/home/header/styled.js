import styled from 'styled-components';
import LogoSrc from '../../../image/logoImg_main_-removebg-preview.png';
import UserIMGSrc from '../../../image/profileImg.png';

export const User = styled.div`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  background: #1E1E1E;
  box-shadow: 2px 2px 10px #111;
  align-items: center;
  z-index: 10;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px){
    >${User}{
      width: 55px;
    }
  }
  @media screen and (max-width: 1024px){
    position: fixed;
    top: 0;
    left: 0;
    margin-bottom: 0;
  }
`;
export const LogoImage = styled.div`
  width: 160px;
  height: 60px;
  background: #eee;
  background: url(${LogoSrc}) no-repeat center center/cover;
  cursor: pointer;
`;

export const Profile = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const UserImg = styled.div`
  width: 50px;
  height: 50px;
  background: url(${UserIMGSrc}) no-repeat center center/cover;
`;
export const UserId = styled.p`
  color: #fff;
  font-weight: 600;
`;
export const Logout = styled.div`
  width: 55px;
  height: 50px;
  font-size: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;