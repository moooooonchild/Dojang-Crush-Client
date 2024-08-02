import * as S from './styles/placeComponent.styles';
import placeDefault from '../assets/ui/defaultImage.png';
import HeartIcon from '../assets/ui/heart.svg';
import HeartClickedIcon from '../assets/ui/heart-clicked.svg';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    getLikedPlaces,
    postHeart,
    deleteHeart,
    getGroupHeart,
} from '../api/place';
import { getNameFromId } from '../api/wishlist';

const PlaceComponent = ({ place, address, mapId, placeId }) => {
    const [coord, setCoord] = useState(null);
    const [heart, setHeart] = useState(false);
    const [users, setUsers] = useState(null);
    const [userNames, setUserNames] = useState(null);
    const location = useLocation();

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
        const getGroupNameData = async () => {
            try {
                const res = await getGroupHeart(placeId);
                setUsers(res);
            } catch (err) {
                console.error(err);
            }
        };

        getGroupNameData();
    }, []);

    useEffect(() => {
        if (users) {
            const updateUserNames = async () => {
                try {
                    const newUsers = await Promise.all(
                        users.map(getNameFromId)
                    );
                    const userNames = newUsers.filter((e) => e !== null);
                    setUserNames(userNames);
                } catch (err) {
                    console.error(err);
                }
            };

            updateUserNames();
        }
    }, [users]);

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
                >
                    <MapMarker position={coord} />
                </Map>
            ) : (
                <S.PlaceImg src={placeDefault} />
            )}
            <S.Name>{place}</S.Name>
            <S.Address>{address}</S.Address>
            {location.pathname.startsWith('/wishlist') ? (
                userNames ? (
                    <S.Users>
                        {userNames.map((user, index) => {
                            if (index === userNames.length - 1) {
                                return <div>{user}</div>;
                            }
                            return <div>{user}&nbsp;</div>;
                        })}
                    </S.Users>
                ) : null
            ) : (
                <S.HeartButton onClick={(e) => onClickHeart(e, placeId)}>
                    <img src={heart ? HeartClickedIcon : HeartIcon} />
                </S.HeartButton>
            )}
        </S.Container>
    );
};

export default PlaceComponent;
