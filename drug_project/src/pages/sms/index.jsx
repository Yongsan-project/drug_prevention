import axios from 'axios';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';

const Sms = () => {
  const { state } = useLocation();
  const [phone, setPhone] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios({
      method: 'get',
      url: '/send',
      params: {"id": state,},
      withCredentials:true,
    }
    )
    .then((response) => {
      if(!response.data.isAdmin) return navigate('/home', {replace: true}); 
    }).catch((error) => {
      if(error.response.data === 'Not allowed') return navigate('/', {replace: true});
    });
  }, []);

  const inputChange = ({target: {value}}) => {
    setPhone(value);
  }

  const checkPhone = () => {
    const phoneRegExp = /^01([0|1|6|7|8|9])([0-9]{8})$/;
    if (!phoneRegExp.test(phone)) {
      setIsPhone(false);
      return alert('올바른 형식이 아닙니다!');
    } else {
      setIsPhone(true);
    }
  }

  const logout = () => {
    axios.get('/logout')
    .then((response) => {
      console.log(response);
      return navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    sendSms();
  }, [isPhone]);
  const sendSms = () => {
    if(isPhone){
      axios.post('/send', {phoneNumber: phone})
      .then((response) => {
        console.log(response);
        console.log(`send phone number is ${phone}`)
      }).catch((error) => {
        console.log(error);
      });
      document.querySelector('input').value = '';
    }else{
      console.log(`is Phone: ${isPhone}`);
    }
  }

  return (
    <S.Container>
      <S.LogoImage />
      <Input onChange={inputChange} placeholder='문자 받을 번호를 입력해주세요.' />
      <S.Btns>
        <Button onClick={checkPhone}>전송</Button>
        <Button onClick={logout}>로그아웃</Button>
      </S.Btns>
    </S.Container>
  );
}

export default Sms;