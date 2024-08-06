import * as S from "./styles/navigationBar.styles";

import timelineIcon from "../assets/navigation/timeline.svg";
import bucklistIcon from "../assets/navigation/bucketlist.svg";
import uploadIcon from "../assets/navigation/upload.svg";
import wishlistIcon from "../assets/navigation/wishlist.svg";
import groupIcon from "../assets/navigation/group.svg";

const NavigationBar = () => {
    return (
        <S.NavBar>
            <S.NavItem to="/">
                <img src={timelineIcon} />
                <span>Timeline</span>
            </S.NavItem>
            <S.NavItem to="/bucketlist">
                <img src={bucklistIcon} />
                BucketList
            </S.NavItem>
            <S.NavItem to="/upload">
                <img src={uploadIcon} />
                Upload
            </S.NavItem>

            <S.NavItem to="/wishlist">
                <img src={wishlistIcon} />
                Wishlist
            </S.NavItem>

            <S.NavItem to="/group">
                <img src={groupIcon} />
                Group
            </S.NavItem>
        </S.NavBar>
    );
};

export default NavigationBar;
