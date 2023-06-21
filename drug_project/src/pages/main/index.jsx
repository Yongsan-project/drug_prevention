import * as S from './styled';
import Input from '../../components/input';
import {Link} from 'react-router-dom';

function Main(){
  return(
    <S.Container>
      <S.LogoImage />
      <Input type='text' placeholder='아이디를 입력하세요.' />
      <Input type='password' placeholder='비밀번호를 입력하세요.' />
      <Link to='/home'><Input type='submit' value='로그인' /></Link>
    </S.Container>
  );
}

export default Main;