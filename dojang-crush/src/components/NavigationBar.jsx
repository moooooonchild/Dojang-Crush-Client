import styled from "styled-components";
import { NavLink } from "react-router-dom";

import timelineIcon from "../assets/navigation/timeline.svg";
import bucklistIcon from "../assets/navigation/bucketlist.svg";
import uploadIcon from "../assets/navigation/upload.svg";
import wishlistIcon from "../assets/navigation/wishlist.svg";
import groupIcon from "../assets/navigation/group.svg";

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
    display: flex;
    justify-content: space-around;

    width: 100vw;
    height: 9.5vh;

    margin-top: auto;
    padding: 0 5vw;
`;

const NavItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 15.2vw;

    text-decoration: none;
    font-size: 2rem;
    color: #612d1c;

    img {
        width: 6.4vw;
        height: auto;
    }
`;

export default NavigationBar;
