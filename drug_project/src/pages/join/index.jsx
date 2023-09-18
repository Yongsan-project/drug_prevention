import Input from '../../components/input';
import Button from '../../components/button';
import Loading from '../../components/loading';
import * as S from './styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/join', {withCredentials:true})
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      if(error.response.data === `Not allowed`) return navigate('/home', {replace: true});
    });
  }, []);

  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  // const onChangeName = (e) => {
  //   const currentName = e.target.value;
  //   setName(currentName);

  //   if (currentName.length < 2 || currentName.length > 5) {
  //     setNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요!");
  //     setIsName(false);
  //   } else {
  //     setNameMessage("올바른 이름 형식입니다.");
  //     setIsName(true);
  //   }
  // };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    onChangePasswordConfirm(e);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("동일한 비밀번호를 입력해주세요.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("동일한 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };
  // const onChangeEmail = (e) => {
  //   const currentEmail = e.target.value;
  //   setEmail(currentEmail);
  //   const emailRegExp =
  //     /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  //   if (!emailRegExp.test(currentEmail)) {
  //     setEmailMessage("이메일의 형식이 올바르지 않습니다!");
  //     setIsEmail(false);
  //   } else {
  //     setEmailMessage("사용 가능한 이메일 입니다.");
  //     setIsEmail(true);
  //   }
  // };
  // const onChangePhone = ({target: {value}}) => {
  //   setPhone(value);
  //   const phoneRegExp = /^01([0|1|6|7|8|9])([0-9]{8})$/;

  //   if (!phoneRegExp.test(value)) {
  //     setPhoneMessage("올바른 형식이 아닙니다!");
  //     setIsPhone(false);
  //   } else {
  //     setPhoneMessage("사용 가능한 번호입니다:-)");
  //     setIsPhone(true);
  //   }
  // };

  // const addHyphen = (e) => {
  //   const currentNumber = e.target.value;
  //   setPhone(currentNumber);
  //   if (currentNumber.length === 3 || currentNumber.length === 8) {
  //     setPhone(currentNumber + "-");
  //     onChangePhone(currentNumber + "-");
  //   } else {
  //     onChangePhone(currentNumber);
  //   }
  // };

  const join = () => {
    setLoading(true);
    axios.post('https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/join',
      {
        id: id,
        password: password,
        confirmPassword: passwordConfirm,
      }
    ).then((response) => {
      console.log(response);
      setLoading(false);
      if(response.status === 200) navigate('/');
    }).catch((error) => {
      if(error.response.data === 'user id is already taken.'){
        setIsId(false);
        setIdMessage('사용중인 아이디입니다.');
      }else{
        console.log(error);
      }
      setLoading(false);
    });
  }

  return(
    <S.Container>
      {loading ? <Loading /> : null}
      <S.LogoImage to='/' />
      <S.Form>
        <S.FormEl>
          <Input onChange={onChangeId} type='text' placeholder='아이디를 입력하세요.' />
          <S.Message bool={isId}>{idMessage}</S.Message>
        </S.FormEl>
        <S.FormEl>
          <Input onChange={onChangePassword} type='password' placeholder='비밀번호를 입력하세요.' />
          <S.Message bool={isPassword}>{passwordMessage}</S.Message>
        </S.FormEl>
        <S.FormEl>
          <Input onChange={onChangePasswordConfirm} type='password' placeholder='비밀번호를 재입력하세요.' />
          <S.Message bool={isPasswordConfirm}>{passwordConfirmMessage}</S.Message>
        </S.FormEl>
      </S.Form>
      {
        isId && isPassword && isPasswordConfirm ? 
        <Button onClick={join} type='button'>회원가입</Button> :
        <Button disabled type='button'>회원가입</Button>
      }
    </S.Container>
  );
}

export default Join;