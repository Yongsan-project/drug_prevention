import * as S from './styled';
import Button from '../button';
import Warning from '../warning';
import { useState } from 'react';

const Item = ({image, title, idx, showModal}) => {
  const [isLoading, setIsLoading] = useState(false);

  const URL = 'https://tourmaline-snickerdoodle-a92204.netlify.app';

  const handleDetail = () => {
    showModal(String(idx));
  }
  const wait = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.open(URL);
      setIsLoading(false);
    }, 3000);
  }

  return(
    <S.Item>
      {isLoading ? <Warning /> : null}
      <S.Title>{title}</S.Title>
      <S.Image url={image} />
      <S.Btns>
        <Button onClick={handleDetail}>상세보기</Button>
        <Button onClick={wait}>구매</Button>
      </S.Btns>
    </S.Item>
  );
}

export default Item;