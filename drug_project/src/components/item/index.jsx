import * as S from './styled';
import Button from '../button';

const Item = ({image, title, idx, showModal}) => {

  const URL = 'https://tourmaline-snickerdoodle-a92204.netlify.app';

  const handleDetail = () => {
    showModal(String(idx));
  }

  return(
    <S.Item>
      <S.Title>{title}</S.Title>
      <S.Image url={image} />
      <S.Btns>
        <Button onClick={handleDetail}>상세보기</Button>
        <Button onClick={()=>{window.open(URL)}}>구매</Button>
      </S.Btns>
    </S.Item>
  );
}

export default Item;