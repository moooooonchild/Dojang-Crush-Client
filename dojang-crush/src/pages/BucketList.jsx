import NavigationBar from "../components/NavigationBar";
import ThemeComponent from "../components/ThemeComponent";
import styled from "styled-components";

import sportsIcon from "../assets/theme/sports.svg";
import gameIcon from "../assets/theme/game.svg";
import healingIcon from "../assets/theme/healing.svg";
import natureIcon from "../assets/theme/nature.svg";
import musicIcon from "../assets/theme/music.svg";
import uniqueIcon from "../assets/theme/unique.svg";

const BucketListPage = () => {
    return (
        <Container>
            <Title>Bucket List</Title>
            <BucketList>
                <ThemeComponent
                    themeKor="스포츠"
                    themeEng="sports"
                    icon={sportsIcon}
                />
                <ThemeComponent
                    themeKor="게임"
                    themeEng="game"
                    icon={gameIcon}
                />
                <ThemeComponent
                    themeKor="힐링"
                    themeEng="healing"
                    icon={healingIcon}
                />
                <ThemeComponent
                    themeKor="자연"
                    themeEng="nature"
                    icon={natureIcon}
                />
                <ThemeComponent
                    themeKor="음악"
                    themeEng="music"
                    icon={musicIcon}
                />
                <ThemeComponent
                    themeKor="이색"
                    themeEng="unique"
                    icon={uniqueIcon}
                />
            </BucketList>

            <NavigationBar />
        </Container>
    );
};

export default BucketListPage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const Title = styled.div`
    margin: 8vw;
    font-size: 4rem;
    font-weight: bold;
`;

const BucketList = styled.div`
    display: flex;
    justify-content: space-evenly;
    overflow-y: auto;

    width: 100vw;

    flex: 1;
    flex-wrap: wrap;
`;
