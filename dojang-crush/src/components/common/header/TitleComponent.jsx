import { useNavigate } from 'react-router-dom';
import * as S from './TitleComponent.style';

export const TitleComponent = ({
    title = 'Title',
    isBackBtn = true,
    RightIcon = null,
    RightIconPath = null,
}) => {
    const navigate = useNavigate();

    // 뒤로가기 버튼
    const goBack = () => {
        if (isBackBtn) navigate(-1);
    };

    // 오른쪽 icon으로 이동하기 버튼
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
