import * as S from './styled';

const Input = ({type, placeholder, value}) => {
  return <S.InputTag type={type} placeholder={placeholder} value={value} />;
}

export default Input;