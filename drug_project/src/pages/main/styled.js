import styled from 'styled-components';
import {InputTag} from '../../components/input/styled.js';
import {Link} from 'react-router-dom';

export const Title = styled.h2``;

export const Container = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  >${InputTag}{
    width: 600px;
    height: 80px;
    background: #fff;
    padding: 0 15px;
    border-radius: 25px;
  }
`;

export const LogoImage = styled.div`
  width: 900px;
  height: 110px;
  background: #eee;
`;