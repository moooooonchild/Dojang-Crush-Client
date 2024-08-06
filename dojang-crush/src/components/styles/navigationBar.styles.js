import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.div`
    display: flex;
    justify-content: space-around;

    width: 100vw;
    height: 9.5vh;

    margin-top: auto;
    padding: 0 5vw;

    position: fixed;
    bottom: 0;
    z-index: 1;

    background-color: #ffeee9;
`;

export const NavItem = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 15.2vw;

    text-decoration: none;
    font-size: 0.9rem;
    color: #612d1c;

    img {
        width: 6.4vw;
        height: auto;
    }
`;
