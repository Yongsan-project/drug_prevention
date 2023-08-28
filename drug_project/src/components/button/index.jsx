import * as S from './styled';

const Button = ({children, onClick, type, disabled}) => {
  return <S.Button onClick={onClick} type={type} disabled={disabled}> {children} </S.Button>;
}

export default Button;