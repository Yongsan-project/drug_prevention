import * as S from './styled';

const List = ({name, onChange, id}) => {
  const handleInput = ({target}) => {
    onChange(target.checked, Number(target.value));
  }
  return(
    <S.List>
      <S.Check type='checkbox' id={id} onChange={handleInput} value={id} />
      <S.Label htmlFor={id} />
      <S.Name htmlFor={id}>{name}</S.Name>
    </S.List>
  );
}

export default List;