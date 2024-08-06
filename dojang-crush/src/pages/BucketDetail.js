import * as S from './styles/bucketDetail.styles';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PlaceComponent from '../components/PlaceComponent';
import NavigationBar from '../components/NavigationBar';
import backIcon from '../assets/ui/back.svg';

import { getPlaces } from '../api/place';

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

const BucketDetailPage = () => {
    const nav = useNavigate();
    const theme = useParams().theme;
    const [placeList, setPlaceList] = useState(null);

    useEffect(() => {
        getPlaces(themeMap[theme])
            .then((res) => setPlaceList(res.places))
            .catch((err) => console.log(err));
    }, []);

    const onClickBackButton = () => {
        nav(-1);
    };

    return (
        <S.Container>
            <S.Header>
                <S.BackButton src={backIcon} onClick={onClickBackButton} />
                <S.Title>Recommended</S.Title>
            </S.Header>
            {placeList && (
                <S.PlaceList>
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
                </S.PlaceList>
            )}

            <NavigationBar />
        </S.Container>
    );
};

export default BucketDetailPage;
