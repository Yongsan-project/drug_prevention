import * as S from './styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Header = ({closeSide, showSide, isSide, userId, logout}) => {
  const [shouldRenderAside, setShouldRenderAside] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.offsetWidth >= 1024 ?  setShouldRenderAside(true) : setShouldRenderAside(false);
    const handleResize = () => {document.body.offsetWidth >= 1024 ? setShouldRenderAside(true) : setShouldRenderAside(false);};
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Test = () => {
    if(!isSide) return <FontAwesomeIcon icon={faBars} onClick={showSide} />;
    else return <FontAwesomeIcon icon={faX} onClick={closeSide} />
  }

  return(
    <S.Container>
      <S.LogoImage/>
      <S.User>
        {shouldRenderAside && <S.Profile><S.UserImg /><S.UserId>{userId}</S.UserId></S.Profile>}
        <S.Logout>
          {shouldRenderAside ? <FontAwesomeIcon icon={faRightFromBracket} onClick={logout} /> : <Test />}
        </S.Logout>
      </S.User>
    </S.Container>
  );
}

export default Header;