import styled from 'styled-components';

export const List = styled.li`
  height: 40px;
  width: 180px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding-left: 15px;
  color: #fff;
`;

export const Label = styled.label`
  display: block;
  width: 20px;
  height: 20px;
  border: solid 1px #fff;
`;

export const Check = styled.input`
  display: none;
  &:checked + ${Label}{
    background: #fff;
  }
`;

export const Name = styled.label`
  font-size: 20px;
`;