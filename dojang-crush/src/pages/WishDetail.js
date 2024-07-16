import NavigationBar from "../components/NavigationBar";
import PlaceComponent from "../components/PlaceComponent";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import sportsIcon from "../assets/theme/sports.svg";
import gameIcon from "../assets/theme/game.svg";
import healingIcon from "../assets/theme/healing.svg";
import natureIcon from "../assets/theme/nature.svg";
import musicIcon from "../assets/theme/music.svg";
import uniqueIcon from "../assets/theme/unique.svg";
import backIcon from "../assets/ui/back.svg";

const iconMap = {
    sports: sportsIcon,
    game: gameIcon,
    healing: healingIcon,
    nature: natureIcon,
    music: musicIcon,
    unique: uniqueIcon,
};

const WishDetailPage = () => {
    const { theme } = useParams();
    const nav = useNavigate();
    const onClickBackButton = () => {
        nav(-1);
    };

    return (
        <Container>
            <Header>
                <BackButton
                    src={backIcon}
                    onClick={onClickBackButton}
                ></BackButton>
                <Title>Wish List</Title>
                <ThemeIcon src={iconMap[theme]} />
            </Header>

            <WishList>
                <PlaceComponent
                    place="장소1"
                    address="주소1"
                    users={["유저1", "유저2", "유저3"]}
                />
                <PlaceComponent place="장소2" address="주소2" />
                <PlaceComponent place="장소3" address="주소3" />
                <PlaceComponent place="장소4" address="주소4" />
                <PlaceComponent place="장소5" address="주소5" />
            </WishList>

            <NavigationBar />
        </Container>
    );
};

export default WishDetailPage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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

const ThemeIcon = styled.img`
    position: absolute;
    right: 8%;
    top: 50%;
    transform: translateY(-50%);

    width: 6vw;
`;

const WishList = styled.div`
    display: flex;
    justify-content: space-evenly;
    overflow-y: auto;
    flex: 1;
    flex-wrap: wrap;
    width: 100vw;
`;
