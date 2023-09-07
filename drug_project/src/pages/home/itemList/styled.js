import styled from 'styled-components';
import { Item } from '../../../components/item/styled';

export const Ul = styled.ul`
  width: 70%;
  height: 750px;
  max-width: 1250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-right: 10px;
  column-gap: 10px;
  row-gap: 20px;
  overflow-y: scroll;
  margin-right: 15px;

  @media screen and (min-width: 401px){
    &::-webkit-scrollbar{
      width: 6px;
    }
    &::-webkit-scrollbar-thumb{
      height: 10%;
      background: #CCCCCC;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track{
      background: #888888;
    }
  }
  @media screen and (max-width: 1024px){
    width: 100%;
    margin-right: 0;
    margin-top: 100px;
    padding-bottom: 10px;
    overflow: hidden;
    padding-right: 0;
    height: calc(100% - 80px);
  }
  @media screen and (max-width: 400px){
    row-gap: 10px;
  }
`;