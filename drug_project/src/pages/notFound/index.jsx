import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return(
    <S.Container>
      <S.TextBox>
        <S.Ec>404</S.Ec>
        <S.Nf>Not Found</S.Nf>
        <S.Text>페이지를 찾을 수 없습니다.</S.Text>
      </S.TextBox>
        <S.StyledLink to='/'>
          <FontAwesomeIcon icon={faArrowLeft} />
          돌아가기
        </S.StyledLink>
    </S.Container>
  );
}

export default NotFound;