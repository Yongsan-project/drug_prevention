import axios from "axios";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";

const Sms = () => {
  const { state } = useLocation();
  const [phone, setPhone] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [totalVisitor, setTotalVisitor] = useState(0);
  const [todayVisitor, setTodayVisitor] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("accessToken");
    
    axios({
      method: "get",
      url: "https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/send",
      params: { id: state },
      withCredentials: true,
      header : {
        'x-access-token' : token
      }
    })
      .then((response) => {
        setTotalVisitor(response.data.totalCount);
        setTodayVisitor(response.data.todayCount);
        if (!response.data.isAdmin) return navigate("/home", { replace: true });
      })
      .catch((error) => {
        if (error.response.data === "Not allowed")
          return navigate("/", { replace: true });
      });
  }, []);

  const inputChange = ({ target: { value } }) => {
    setPhone(value);
  };

  const checkPhone = () => {
    const phoneRegExp = /^01([0|1|6|7|8|9])([0-9]{8})$/;
    if (!phoneRegExp.test(phone)) {
      setIsPhone(false);
      return alert("올바른 형식이 아닙니다!");
    } else {
      setIsPhone(true);
    }
  };

  const logout = () => {
    const token = localStorage.getItem("accessToken");
    localStorage.removeItem("accessToken");
    axios
      .get(
        "https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/logout",
        {
          headers: { "x-access-token": token },
        }
      )
      .then((response) => {
        return navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const sendSms = () => {
    if (isPhone) {
      const token = localStorage.getItem("accessToken");
      axios
        .post(
          "/send",
          { phoneNumber: phone },
          { headers: { "x-access-token": token } }
        )
        .then((response) => {
          console.log(response);
          console.log(`send phone number is ${phone}`);
        })
        .catch((error) => {
          console.log(error);
        });
      document.querySelector("input").value = "";
    }
  };
  useEffect(() => {
    sendSms();
  }, [isPhone]);

  return (
    <S.Container>
      <S.LogoImage />
      <Input
        onChange={inputChange}
        placeholder="문자 받을 번호를 입력해주세요."
      />
      <S.Btns>
        <Button onClick={checkPhone}>전송</Button>
        <Button onClick={logout}>로그아웃</Button>
      </S.Btns>
      <S.Counter>
        <S.Text>{todayVisitor}</S.Text>
        <S.Text>{totalVisitor}</S.Text>
      </S.Counter>
    </S.Container>
  );
};

export default Sms;
