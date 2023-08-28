import * as S from './styled';
import Aside from '../aside';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({closeSide, drug, onChange, userId, logout}) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  const outSide = ({target}) => {
    if(target.classList.contains('close')) closeSide();
  }
  return createPortal(
    <S.Container onClick={outSide} className='close'>
      <S.Board>
        <S.User>
          <S.Image />
          <S.UserID>{userId}</S.UserID>
        </S.User>
        <Aside drug={drug} onChange={onChange}/>
        <S.Font>
          <FontAwesomeIcon className='bk' icon={faRightFromBracket} onClick={logout} />
        </S.Font>
      </S.Board>
    </S.Container>,
    document.querySelector('#modal')
  );
}

export default Sidebar;