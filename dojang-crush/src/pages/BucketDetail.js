import * as S from "./styles/bucketDetail.styles";
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
        <S.Container>
            <S.Header>
                <S.BackButton src={backIcon} onClick={onClickBackButton} />
                <S.Title>Recommended</S.Title>
            </S.Header>
            <S.PlaceList>
                <PlaceComponent place="장소1" address="주소1" />
                <PlaceComponent place="장소2" address="주소2" />
                <PlaceComponent place="장소3" address="주소3" />
                <PlaceComponent place="장소4" address="주소4" />
                <PlaceComponent place="장소5" address="주소5" />
            </S.PlaceList>

            <NavigationBar />
        </S.Container>
    );
};

export default BucketDetailPage;
