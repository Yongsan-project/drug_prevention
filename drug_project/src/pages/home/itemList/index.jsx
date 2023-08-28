import * as S from './styled';
import Item from '../../../components/item';

const ItemList = ({drug, checkedList, showModal}) => {
  let test = [];
  
  if(checkedList.length !== 0) checkedList.forEach(e => {test.push(drug.drug_list[e]);});
  else test = [...drug.drug_list];

  return(
    <S.Ul>
      {
        test.map(({id, drug_name, img_url}) => {
          return <Item key={id} idx={id} showModal={showModal} title={drug_name} image={img_url} />
        })
      }
    </S.Ul>
  )

}

export default ItemList;