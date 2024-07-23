import { useNavigate } from "react-router-dom";
import * as S from "./TitleComponent.style";

export const TitleComponent = ({
  title = "제목",
  isBackBtn = true,
  RightIcon = null,
  RightIconPath = null,
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (isBackBtn) navigate(-1);
  };

  const goIcon = () => {
    if (RightIcon) navigate(RightIconPath);
  };

  return (
    <S.Container>
      <S.LeftIconContainer onClick={goBack}>
        {isBackBtn && <S.BackBtn />}
      </S.LeftIconContainer>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.RightIconContainer onClick={goIcon}>
        {RightIcon && <RightIcon />}
      </S.RightIconContainer>
    </S.Container>
  );
};
