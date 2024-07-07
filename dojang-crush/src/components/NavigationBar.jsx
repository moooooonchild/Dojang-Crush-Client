import styled from "styled-components";
import { NavLink } from "react-router-dom";

import timelineIcon from "../assets/timeline.svg";
import bucklistIcon from "../assets/bucketlist.svg";
import uploadIcon from "../assets/upload.svg";
import wishlistIcon from "../assets/wishlist.svg";
import groupIcon from "../assets/group.svg";

const NavigationBar = () => {
    return (
        <NavBar>
            <NavItem to="/">
                <img src={timelineIcon} />
                <span>Timeline</span>
            </NavItem>
            <NavItem to="/bucketlist">
                <img src={bucklistIcon} />
                BucketList
            </NavItem>
            <NavItem to="/upload">
                <img src={uploadIcon} />
                Upload
            </NavItem>

            <NavItem to="/wishlist">
                <img src={wishlistIcon} />
                Wishlist
            </NavItem>

            <NavItem to="/group">
                <img src={groupIcon} />
                Group
            </NavItem>
        </NavBar>
    );
};

const NavBar = styled.div`
    width: 100%;
    height: 9.5%;
    display: flex;
    justify-content: space-around;
    margin-top: auto;
    padding: 0 5%;
`;

const NavItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    width: 15.2%;

    img {
        width: 42%;
        height: auto;
    }

    font-size: 180%;
    color: #612d1c;
`;

export default NavigationBar;
