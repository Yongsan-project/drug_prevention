import * as S from './styled';
import Category from './category';

const Aside = ({drug, onChange}) => {
  return(
    <S.Aside>
      <S.Title>Category</S.Title>
      <Category drug={drug} onChange={onChange} />
    </S.Aside>
  );
}

export default Aside;