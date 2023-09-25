import * as S from "./styled";
import WarningImage from "../../image/icons8-warning-96.png";

const Warning = () => {
  return (
    <S.Background>
      <S.WarningImage src={WarningImage} alt="Warning!!!" />
    </S.Background>
  );
};

export default Warning;
