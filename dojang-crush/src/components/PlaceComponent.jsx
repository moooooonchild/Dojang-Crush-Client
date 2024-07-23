import * as S from "./styles/placeComponent.styles";
import placeDefault from "../assets/ui/defaultImage.png";
import HeartIcon from "../assets/ui/heart.svg";

const PlaceComponent = ({ place, address, users = null }) => {
    return (
        <S.Container>
            <S.PlaceImg src={placeDefault} />
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
