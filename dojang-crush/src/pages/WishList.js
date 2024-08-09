import * as S from './styles/wishList.styles';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import PlaceComponent from '../components/PlaceComponent';
import ThemeComponent from '../components/ThemeComponent';
import NavigationBar from '../components/NavigationBar';

import sportsIcon from '../assets/theme/sports.svg';
import gameIcon from '../assets/theme/game.svg';
import healingIcon from '../assets/theme/healing.svg';
import natureIcon from '../assets/theme/nature.svg';
import musicIcon from '../assets/theme/music.svg';
import uniqueIcon from '../assets/theme/unique.svg';
import foodIcon from '../assets/theme/food.svg';
import cafeIcon from '../assets/theme/cafe.svg';
import exhibitionIcon from '../assets/theme/exhibition.svg';
import shoppingIcon from '../assets/theme/shopping.svg';

import { getHeartListForTheme } from '../api/wishlist';

const themeList = [
    '스포츠',
    '게임',
    '힐링',
    '자연',
    '음악',
    '이색',
    '맛집',
    '카페',
    '전시',
    '쇼핑',
];

const WishListPage = () => {
    const [showList, setShowList] = useState(false);
    const [placeList, setPlaceList] = useState(null);

    const onClickThemeButton = () => {
        setShowList(!showList);
    };

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                // 모든 테마에 대해 getHeartListForTheme을 실행하고 결과를 병렬로 수집
                const results = await Promise.all(
                    themeList.map((theme) => getHeartListForTheme(theme))
                );
                // 결과 배열들을 하나의 배열로 합치기
                const mergedResults = results.flat();
                setPlaceList(mergedResults);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPlaces();
    }, []);

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
                    {placeList && (
                        <S.WishList>
                            {placeList.map((p, i) => {
                                return (
                                    <PlaceComponent
                                        key={i}
                                        place={p.placeName}
                                        address={p.address}
                                        mapId={p.mapId}
                                        placeId={p.placeId}
                                    />
                                );
                            })}
                        </S.WishList>
                    )}
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
