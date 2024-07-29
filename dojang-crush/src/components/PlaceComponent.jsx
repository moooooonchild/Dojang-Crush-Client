import * as S from "./styles/placeComponent.styles";
import placeDefault from "../assets/ui/defaultImage.png";
import HeartIcon from "../assets/ui/heart.svg";
import { Map } from "react-kakao-maps-sdk";

const PlaceComponent = ({ place, address, id, users = null }) => {
    const onClickPlaceComponent = (id) => {
        window.location.href = `https://map.kakao.com/link/map/${id}`;
    };

    return (
        <S.Container onClick={() => onClickPlaceComponent(id)}>
            <Map
                center={{ lat: 37.56174, lng: 126.946855 }}
                style={{ width: "82vw", height: "13vh" }}
                level={3}
            />
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
