import * as S from './styled';
import Spinner from '../../image/Rolling-1s-200px.gif';


const Loading = () => {
  return(
    <S.Background>
      <S.LoadingImage src={Spinner} alt='loading...' width='5%' />
    </S.Background>
  );
}

export default Loading;