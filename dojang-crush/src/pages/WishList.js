import * as S from "./styles/wishList.styles";
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
        <S.Container>
            {showList ? (
                <>
                    <S.Header>
                        <S.Title>Wish List</S.Title>
                        <S.ToTheme onClick={onClickThemeButton}>
                            테마별 보기
                        </S.ToTheme>
                    </S.Header>
                    <S.PlaceList>
                        <PlaceComponent
                            place="장소1"
                            address="주소1"
                            users={["유저1", "유저2", "유저3"]}
                        />
                        <PlaceComponent place="장소2" address="주소2" />
                        <PlaceComponent place="장소3" address="주소3" />
                        <PlaceComponent place="장소4" address="주소4" />
                        <PlaceComponent place="장소5" address="주소5" />
                    </S.PlaceList>
                </>
            ) : (
                <>
                    <S.Header>
                        <S.ToTheme onClick={onClickThemeButton}>
                            전체 보기
                        </S.ToTheme>
                        <S.Title>Wish List</S.Title>
                    </S.Header>

                    <S.WishList>
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
                    </S.WishList>
                </>
            )}

            <NavigationBar />
        </S.Container>
    );
};

export default WishListPage;
