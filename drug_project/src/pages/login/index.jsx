import * as S from './styled';
import Input from '../../components/input';
import Button from '../../components/button';
import Loading from '../../components/loading';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/login')
    .then((response) => {
      // console.log(response);
    }).catch((error) => {
      // console.log(error);
      if(error.response.data === 'Not allowed') return navigate('/home', {replace: true});
    });
  }, []);

  const onChangeId = ({target: {value}}) => {
    setId(value);
  }
  const onChangePassword = ({target: {value}}) => {
    setPassword(value);
  }

  const Test = () => {
    if(id === '' || password === '') return alert('아이디, 비밀번호를 입력하세요.');
    setLoading(true);
    axios.post('https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/login', {
        id: id,
        password: password,
        withCredentials: true
      }
    ).then((response) => {
      if(response.data.isAdmin) return navigate('/send', {state: response.data.userId});
      if(response.data.msg === 'Login Success') return navigate('/home', {replace: true});
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
      if(error.response.data === 'An account with this id does not exists'){
        alert('아이디를 찾을 수 없습니다.');
      }else if(error.response.data === 'Wrong password'){
        alert('비밀번호가 일치하지 않습니다.');
      }
    });
  }

  return(
    <S.Container>
      {loading ? <Loading /> : null }
      <S.LogoImage />
      <Input onChange={onChangeId} type='text' placeholder='아이디를 입력하세요.' />
      <Input onChange={onChangePassword} type='password' placeholder='비밀번호를 입력하세요.' />
      <S.Btns>
        <Button type='button' onClick={Test}>로그인</Button>
        <S.Join to='/join'>회원가입하기</S.Join>
      </S.Btns>
    </S.Container>
  );
}

export default Login;