import * as S from "./styles/themeComponent.styles";

const ThemeComponent = ({ themeKor, themeEng, icon }) => {
    return (
        <S.Container to={`./${themeEng}`}>
            <S.Icon src={icon} />
            <S.Theme>{`#${themeKor}`}</S.Theme>
        </S.Container>
    );
};

export default ThemeComponent;
