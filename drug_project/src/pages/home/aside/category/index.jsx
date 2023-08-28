import * as S from './styled';
import List from './list';

const Category = ({drug, onChange}) => {
  return(
    <S.Container>
      {
        drug.drug_list.map(({id, drug_name}) => {
          return <List key={id} id={id} onChange={onChange} name={drug_name} />;
        })
      }
    </S.Container>
  );
}

export default Category;