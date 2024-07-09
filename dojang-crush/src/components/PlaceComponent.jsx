import styled from "styled-components";
import placeDefault from "../assets/placeDefault.png";
import HeartIcon from "../assets/ui/heart.svg";

const PlaceComponent = () => {
    return (
        <Container>
            <PlaceImg src={placeDefault} />
            <Name>#장소명</Name>
            <Address>#주소</Address>
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
    height: 20vh;

    border: none;
    text-decoration: none;

    position: relative;

    margin-bottom: 4vw;

    flex-shrink: 0;
`;

const PlaceImg = styled.img`
    width: 82.1vw;
    height: 11vh;

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

const HeartButton = styled.button`
    position: absolute;
    top: 94%;
    left: 96%;
    transform: translate(-50%, -50%);

    background: none;
    border: none;

    width: 5.5vw;

    img {
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }
`;
