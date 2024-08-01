import * as S from './styles/placeComponent.styles';
import placeDefault from '../assets/ui/defaultImage.png';
import HeartIcon from '../assets/ui/heart.svg';
import HeartClickedIcon from '../assets/ui/heart-clicked.svg';
import { Map } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import {
    getLikedPlaces,
    postHeart,
    deleteHeart,
    getGroupHeart,
} from '../api/place';

const PlaceComponent = ({ place, address, mapId, placeId, users = null }) => {
    const [coord, setCoord] = useState(null);
    const [heart, setHeart] = useState(false);

    useEffect(() => {
        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result, status) => {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
                var coords = new window.kakao.maps.LatLng(
                    result[0].y,
                    result[0].x
                );
                setCoord({ lat: result[0].y, lng: result[0].x });
            }
        });
    }, []);

    useEffect(() => {
        getLikedPlaces(placeId)
            .then((res) => setHeart(res))
            .catch((err) => console.log(err));
    }, []);

    const onClickPlaceComponent = (mapId) => {
        window.location.href = `https://map.kakao.com/link/map/${mapId}`;
    };

    const onClickHeart = (e, placeId) => {
        e.stopPropagation();

        const data = {
            placeId: placeId,
            memberId: 6, //api 수정 후 삭제
        };

        if (heart) {
            deleteHeart(data)
                .then(() => setHeart(false))
                .catch((err) => console.error(err));
        } else {
            postHeart(data)
                .then(() => setHeart(true))
                .catch((err) => console.error(err));
        }
    };

    return (
        <S.Container>
            {coord ? (
                <Map
                    center={coord}
                    style={{ width: '82vw', height: '13vh' }}
                    level={3}
                    onClick={() => onClickPlaceComponent(mapId)}
                />
            ) : (
                <S.PlaceImg src={placeDefault} />
            )}
            <S.Name>{place}</S.Name>
            <S.Address>{address}</S.Address>
            {users ? (
                <S.Users>
                    {users.map((user, index) => {
                        if (index === users.length - 1) {
                            return <div>{user}</div>;
                        }
                        return <div>{user}&nbsp;</div>;
                    })}
                </S.Users>
            ) : (
                <S.HeartButton onClick={(e) => onClickHeart(e, placeId)}>
                    <img src={heart ? HeartClickedIcon : HeartIcon} />
                </S.HeartButton>
            )}
        </S.Container>
    );
};

export default PlaceComponent;
