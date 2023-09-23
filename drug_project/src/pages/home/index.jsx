import * as S from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./header";
import Aside from "./aside";
import Modal from "./modal";
import Sidebar from "./sidebar";
import ItemList from "./itemList";
import drug from "../../contants/drug_list";

const Home = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [shouldRenderAside, setShouldRenderAside] = useState(true);
  const [drugId, setDrugId] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isSide, setIsSide] = useState(false);
  const [userId, setUserId] = useState(""); // ** userId가 초기 상태에서 바뀌지 않음. 수정 요청
  const navigate = useNavigate();

  const onCheckedElement = (checked, item) => {
    checked
      ? setCheckedList([...checkedList, item])
      : setCheckedList(checkedList.filter((el) => el !== item));
  };
  useEffect(() => {
    if (shouldRenderAside) setIsSide(false);
  }, [shouldRenderAside]);
  const showModal = (props) => {
    if (drugId === "") {
      setDrugId(props);
      setIsModal(true);
    } else {
      setDrugId("");
      setIsModal(false);
    }
  };
  const closeModal = () => {
    setDrugId("");
    setIsModal(false);
  };
  const showSide = () => {
    if (!isModal) setIsSide(true);
    else alert("상세보기를 종료 후 실행해주세요!!!");
  };
  const closeSide = () => {
    setIsSide(false);
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
        console.log(response);
        return navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/home", {
        withCredentials: true,
        headers: { "x-access-token": token },
      })
      .then((response) => {
        const { user } = response.data;
        // 세션에 데이터가 안 담겨있음 => 로컬 스토리지 이용
        // 로그인되어있다면 ( 세션이 있다면 ) 로컬스토리지에서 유저의 아이디를 가져와 체크
        // setUserId(response.data.user);

        if (user === "yongsandrug")
          return navigate("/send", {
            replace: true,
            state: response.data.user,
          });
      })
      .catch((error) => {
        // if(error.response.data === 'Not allowed') return navigate('/', {replace: true});
        console.log(error);
        return navigate("/", { replace: true });
      });

    document.body.offsetWidth >= 1024
      ? setShouldRenderAside(true)
      : setShouldRenderAside(false);
    const handleResize = () => {
      document.body.offsetWidth >= 1024
        ? setShouldRenderAside(true)
        : setShouldRenderAside(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Container isSide={isSide}>
      <Header
        showSide={showSide}
        closeSide={closeSide}
        logout={logout}
        isSide={isSide}
        userId={userId}
      />
      <S.Main>
        {shouldRenderAside && <Aside drug={drug} onChange={onCheckedElement} />}
        <ItemList drug={drug} showModal={showModal} checkedList={checkedList} />
      </S.Main>
      {isModal && (
        <Modal data={drug.drug_list[Number(drugId)]} closeModal={closeModal} />
      )}
      {isSide && (
        <Sidebar
          closeSide={closeSide}
          drug={drug}
          userId={userId}
          logout={logout}
          onChange={onCheckedElement}
        />
      )}
    </S.Container>
  );
};

export default Home;
