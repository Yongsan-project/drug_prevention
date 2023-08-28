import * as S from './styled';
import Button from '../../../components/button';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({data, closeModal}) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  const outSide = ({target}) => {
    if(target.classList.contains('close')) closeModal();
  }
  return createPortal(
    <S.Container onClick={outSide} className='close'>
      <S.White>
        <S.Title>{data.drug_name}</S.Title>
        <S.MiddleContainer>
          <S.ImageBox>
            <S.Image url={data.img_url} />
            <S.ImageTxt>※실물은 사진과 동일하오니 참고 바랍니다.</S.ImageTxt>
          </S.ImageBox>
          <S.TextBox>
            <S.InCome>{`제조국가: ${data.major_countries}`}</S.InCome>
            <S.Effect>{`효능: ${data.sympthon}`}</S.Effect>
            <S.Price>{`판매 가격: ${data.price_unit} / ${data.price}`}</S.Price>
          </S.TextBox>
        </S.MiddleContainer>
        <Button type='button'>구매</Button>
      </S.White>
    </S.Container>,
    document.querySelector('#modal')
  );
}

export default Modal;