import * as S from './styled';

const Input = ({type, placeholder, onChange}) => {
  return <S.InputTag type={type} placeholder={placeholder} onChange={onChange} />;
}

export default Input;