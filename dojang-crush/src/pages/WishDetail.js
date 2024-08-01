import NavigationBar from '../components/NavigationBar';
import PlaceComponent from '../components/PlaceComponent';
import * as S from './styles/wishDetail.styles';

import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getHeartListForTheme } from '../api/wishlist';

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
import backIcon from '../assets/ui/back.svg';

const iconMap = {
    sports: sportsIcon,
    game: gameIcon,
    healing: healingIcon,
    nature: natureIcon,
    music: musicIcon,
    unique: uniqueIcon,
    food: foodIcon,
    cafe: cafeIcon,
    exhibition: exhibitionIcon,
    shopping: shoppingIcon,
};

const themeMap = {
    sports: '스포츠',
    game: '게임',
    healing: '힐링',
    nature: '자연',
    music: '음악',
    unique: '이색',
    food: '맛집',
    cafe: '카페',
    exhibition: '전시',
    shopping: '쇼핑',
};

const WishDetailPage = () => {
    const { theme } = useParams();
    const nav = useNavigate();

    const [placeList, setPlaceList] = useState(null);
    const [heartList, setHeartList] = useState(null);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const res = await getHeartListForTheme(themeMap[theme]);
                setPlaceList(res);
            } catch (err) {
                console.log(err);
            }
        };

        fetchPlaces();
    }, []);

    const onClickBackButton = () => {
        nav(-1);
    };

    return (
        <S.Container>
            <S.Header>
                <S.BackButton
                    src={backIcon}
                    onClick={onClickBackButton}
                ></S.BackButton>
                <S.Title>Wish List</S.Title>
                <S.ThemeIcon src={iconMap[theme]} />
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

            <NavigationBar />
        </S.Container>
    );
};

export default WishDetailPage;
