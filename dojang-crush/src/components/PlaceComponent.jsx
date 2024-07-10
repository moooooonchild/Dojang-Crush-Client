import styled from "styled-components";
import placeDefault from "../assets/placeDefault.png";
import HeartIcon from "../assets/ui/heart.svg";

const PlaceComponent = ({ place, address, users = null }) => {
    return (
        <Container>
            <PlaceImg src={placeDefault} />
            <Name>{place}</Name>
            <Address>{address}</Address>
            {users ? (
                <Users>
                    {users.map((user, index) => {
                        if (index === users.length - 1) {
                            return <div>{user}</div>;
                        }
                        return <div>{user}&nbsp;</div>;
                    })}
                </Users>
            ) : null}
            <HeartButton>
                <img src={HeartIcon} />
            </HeartButton>
        </Container>
    );
};

export default PlaceComponent;

const Container = styled.button`
    background-color: #dba290;
    width: 90vw;
    height: 23vh;

    border: none;
    text-decoration: none;

    position: relative;

    margin-bottom: 4vw;

    flex-shrink: 0;
`;

const PlaceImg = styled.img`
    width: 82.1vw;
    height: 13vh;

    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);

    object-fit: cover;
`;

const Name = styled.div`
    position: absolute;
    top: 69%;
    left: 4%;

    font-size: 2rem;
    font-weight: bold;
    color: #612d1c;
`;

const Address = styled.div`
    position: absolute;
    top: 82%;
    left: 4%;

    font-size: 2rem;
    font-weight: bold;
    color: #612d1c;
`;

const Users = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 69%;
    right: 4%;
    overflow-x: scroll;

    width: 37vw;
    height: 2.1vh;

    div {
        font-size: 2rem;
        font-weight: bold;
        color: #612d1c;
    }
`;

const HeartButton = styled.button`
    position: absolute;
    top: 90%;
    right: 0%;

    background: none;
    border: none;

    width: 5.5vw;

    img {
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }
`;
