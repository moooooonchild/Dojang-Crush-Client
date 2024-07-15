import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PlaceComponent from "../components/PlaceComponent";
import NavigationBar from "../components/NavigationBar";

import backIcon from "../assets/ui/back.svg";

const BucketDetailPage = () => {
    const nav = useNavigate();

    const onClickBackButton = () => {
        nav(-1);
    };

    return (
        <Container>
            <Header>
                <BackButton src={backIcon} onClick={onClickBackButton} />
                <Title>Recommended</Title>
            </Header>
            <PlaceList>
                <PlaceComponent place="장소1" address="주소1" />
                <PlaceComponent place="장소2" address="주소2" />
                <PlaceComponent place="장소3" address="주소3" />
                <PlaceComponent place="장소4" address="주소4" />
                <PlaceComponent place="장소5" address="주소5" />
            </PlaceList>

            <NavigationBar />
        </Container>
    );
};

export default BucketDetailPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const Header = styled.div`
    display: flex;
    justify-content: center; /* Title을 중앙에 배치 */
    align-items: center;

    position: relative;

    width: 100vw;

    margin: 8vw;
`;

const Title = styled.div`
    font-size: 4rem;
    font-weight: bold;
`;

const BackButton = styled.img`
    position: absolute;
    left: 8%;
    top: 50%;
    transform: translateY(-50%);

    width: 4vw;
`;

const PlaceList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    flex: 1;
    width: 100vw;
`;
