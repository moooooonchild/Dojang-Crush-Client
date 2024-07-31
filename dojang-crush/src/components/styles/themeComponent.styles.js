import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)`
    display: flex;
    align-self: center;
    position: relative;

    width: 40vw;
    margin-bottom: 6vw;

    background-color: #dba290;

    text-decoration: none;
    aspect-ratio: 1;
    flex-shrink: 0;
`;

export const Icon = styled.img`
    position: absolute;
    width: 8vw;
    margin: 2vw;
`;

export const Theme = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    font-size: 4rem;
    text-align: center;
    color: #612d1c;
    font-weight: bold;
`;
