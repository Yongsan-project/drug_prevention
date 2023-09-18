import * as S from './styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './header';
import Aside from './aside';
import Modal from './modal';
import Sidebar from './sidebar';
import ItemList from './itemList';
import drug from '../../contants/drug_list';

const Home = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [shouldRenderAside, setShouldRenderAside] = useState(true);
  const [drugId, setDrugId] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isSide, setIsSide] = useState(false);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const onCheckedElement = (checked, item) => {
    checked ? setCheckedList([...checkedList, item]) : setCheckedList(checkedList.filter(el => el !== item));
  }
  useEffect(() => {
    if(shouldRenderAside) setIsSide(false);
  }, [shouldRenderAside]);
  const showModal = (props) => {
    if(drugId === ''){
      setDrugId(props);
      setIsModal(true);
    }else{
      setDrugId('');
      setIsModal(false);
    }
  }
  const closeModal = () => {
    setDrugId('');
    setIsModal(false);
  }
  const showSide = () => {
    if(!isModal) setIsSide(true);
    else alert('상세보기를 종료 후 실행해주세요!!!');
  }
  const closeSide = () => {
    setIsSide(false);
  }
  const logout = () => {
    axios.get('https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/logout')
    .then((response) => {
      console.log(response);
      return navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    axios.get('https://port-0-drug-api-3prof2lll4t38bw.sel3.cloudtype.app/home', {withCredentials: true})
    .then((response) => {
      setUserId(response.data.user);
      if(response.data.user === 'yongsandrug') return navigate('/send', {replace: true, state: response.data.user});
    }).catch((error) => {
      // if(error.response.data === 'Not allowed') return navigate('/', {replace: true});
      console.log(error);
    });

    document.body.offsetWidth >= 1024 ?  setShouldRenderAside(true) : setShouldRenderAside(false);
    const handleResize = () => {document.body.offsetWidth >= 1024 ? setShouldRenderAside(true) : setShouldRenderAside(false);};
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return( 
      <S.Container isSide={isSide}>
        <Header showSide={showSide} closeSide={closeSide} logout={logout} isSide={isSide} userId={userId} />
        <S.Main>
          {shouldRenderAside && <Aside drug={drug} onChange={onCheckedElement} />}
          <ItemList drug={drug} showModal={showModal} checkedList={checkedList} />
        </S.Main>
        {isModal && <Modal data={drug.drug_list[Number(drugId)]} closeModal={closeModal} />}
        {isSide && <Sidebar closeSide={closeSide} drug={drug} userId={userId} logout={logout} onChange={onCheckedElement} />}
      </S.Container>
  );
}

export default Home;