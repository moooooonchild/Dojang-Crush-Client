import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PlaceComponent from "../components/PlaceComponent";
import NavigationBar from "../components/NavigationBar";

import backIcon from "../assets/back.svg";

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
                <PlaceComponent />
                <PlaceComponent />
                <PlaceComponent />
                <PlaceComponent />
                <PlaceComponent />
            </PlaceList>

            <NavigationBar />
        </Container>
    );
};

export default BucketDetailPage;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center; /* Title을 중앙에 배치 */
    align-items: center;
    margin: 8vw;
`;

const Title = styled.div`
    font-size: 4rem;
    font-weight: bold;
`;

const BackButton = styled.img`
    width: 4vw;
    position: absolute;
    left: 8%;
    top: 50%;
    transform: translateY(-50%);
`;

const PlaceList = styled.div`
    flex: 1;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
`;
