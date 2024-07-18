import styled from "styled-components";
import { useState } from "react";

import PlaceComponent from "../components/PlaceComponent";
import ThemeComponent from "../components/ThemeComponent";
import NavigationBar from "../components/NavigationBar";

import sportsIcon from "../assets/theme/sports.svg";
import gameIcon from "../assets/theme/game.svg";
import healingIcon from "../assets/theme/healing.svg";
import natureIcon from "../assets/theme/nature.svg";
import musicIcon from "../assets/theme/music.svg";
import uniqueIcon from "../assets/theme/unique.svg";
import foodIcon from "../assets/theme/food.svg";
import cafeIcon from "../assets/theme/cafe.svg";
import exhibitionIcon from "../assets/theme/exhibition.svg";
import shoppingIcon from "../assets/theme/shopping.svg";

const WishListPage = () => {
    const [showList, setShowList] = useState(false);

    const onClickThemeButton = () => {
        setShowList(!showList);
    };

    return (
        <Container>
            {showList ? (
                <>
                    <Header>
                        <Title>Wish List</Title>
                        <ToTheme onClick={onClickThemeButton}>
                            테마별 보기
                        </ToTheme>
                    </Header>
                    <PlaceList>
                        <PlaceComponent
                            place="장소1"
                            address="주소1"
                            users={["유저1", "유저2", "유저3"]}
                        />
                        <PlaceComponent place="장소2" address="주소2" />
                        <PlaceComponent place="장소3" address="주소3" />
                        <PlaceComponent place="장소4" address="주소4" />
                        <PlaceComponent place="장소5" address="주소5" />
                    </PlaceList>
                </>
            ) : (
                <>
                    <Header>
                        <ToTheme onClick={onClickThemeButton}>
                            전체 보기
                        </ToTheme>
                        <Title>Wish List</Title>
                    </Header>

                    <WishList>
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
                        <ThemeComponent
                            themeKor="맛집"
                            themeEng="food"
                            icon={foodIcon}
                        />
                        <ThemeComponent
                            themeKor="카페"
                            themeEng="cafe"
                            icon={cafeIcon}
                        />
                        <ThemeComponent
                            themeKor="전시"
                            themeEng="exhibition"
                            icon={exhibitionIcon}
                        />
                        <ThemeComponent
                            themeKor="쇼핑"
                            themeEng="shopping"
                            icon={shoppingIcon}
                        />
                    </WishList>
                </>
            )}

            <NavigationBar />
        </Container>
    );
};

export default WishListPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const Header = styled.div`
    display: flex;
    justify-content: center; /* Title을 중앙에 배치 */
    align-items: center;
    position: relative;

    width: 100vw;
    margin: 8vw;
`;

const Title = styled.div`
    font-size: 4rem;
    font-weight: bold;
`;

const ToTheme = styled.div`
    position: absolute;
    right: 6%;
    top: 100%;

    font-size: 2.3rem;
    font-weight: bold;
`;

const PlaceList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
    flex: 1;
    width: 100vw;
`;

const WishList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    flex-wrap: wrap;

    overflow-y: auto;

    width: 100vw;
`;
