import * as S from './styles/placeComponent.styles';
import placeDefault from '../assets/ui/defaultImage.png';
import HeartIcon from '../assets/ui/heart.svg';
import { Map } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';

const PlaceComponent = ({ place, address, id, users = null }) => {
    const [coord, setCoord] = useState(null);

    const onClickPlaceComponent = (id) => {
        window.location.href = `https://map.kakao.com/link/map/${id}`;
    };

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

    return (
        <S.Container onClick={() => onClickPlaceComponent(id)}>
            {coord ? (
                <Map
                    center={coord}
                    style={{ width: '82vw', height: '13vh' }}
                    level={3}
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
            ) : null}
            <S.HeartButton>
                <img src={HeartIcon} />
            </S.HeartButton>
        </S.Container>
    );
};

export default PlaceComponent;
