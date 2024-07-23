import NavigationBar from "../components/NavigationBar";
import PlaceComponent from "../components/PlaceComponent";
import * as S from "./styles/wishDetail.styles";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import sportsIcon from "../assets/theme/sports.svg";
import gameIcon from "../assets/theme/game.svg";
import healingIcon from "../assets/theme/healing.svg";
import natureIcon from "../assets/theme/nature.svg";
import musicIcon from "../assets/theme/music.svg";
import uniqueIcon from "../assets/theme/unique.svg";
import foodIcon from "../assets/theme/food.svg";
import cafeIcon from "../assets/theme/cafe.svg";
import exhibitionIcon from "../assets/theme/exhibition.svg";
import shoppingIcon from "../assets/theme/shopping.svg";
import backIcon from "../assets/ui/back.svg";

const iconMap = {
    sports: sportsIcon,
    game: gameIcon,
    healing: healingIcon,
    nature: natureIcon,
    music: musicIcon,
    unique: uniqueIcon,
    food: foodIcon,
    cafe: cafeIcon,
    exhibition: exhibitionIcon,
    shopping: shoppingIcon,
};

const WishDetailPage = () => {
    const { theme } = useParams();
    const nav = useNavigate();
    const onClickBackButton = () => {
        nav(-1);
    };

    return (
        <S.Container>
            <S.Header>
                <S.BackButton
                    src={backIcon}
                    onClick={onClickBackButton}
                ></S.BackButton>
                <S.Title>Wish List</S.Title>
                <S.ThemeIcon src={iconMap[theme]} />
            </S.Header>

            <S.WishList>
                <PlaceComponent
                    place="장소1"
                    address="주소1"
                    users={["유저1", "유저2", "유저3"]}
                />
                <PlaceComponent place="장소2" address="주소2" />
                <PlaceComponent place="장소3" address="주소3" />
                <PlaceComponent place="장소4" address="주소4" />
                <PlaceComponent place="장소5" address="주소5" />
            </S.WishList>

            <NavigationBar />
        </S.Container>
    );
};

export default WishDetailPage;
