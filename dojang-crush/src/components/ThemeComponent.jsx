import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BucketComponent = ({ themeKor, themeEng, icon }) => {
    return (
        <Container to={`./${themeEng}`}>
            <Icon src={icon} />
            <Theme>#{themeKor}</Theme>
        </Container>
    );
};

export default BucketComponent;

const Container = styled(NavLink)`
    width: 40vw;
    aspect-ratio: 1;
    background-color: #dba290;

    text-decoration: none;

    align-self: center;
    flex-shrink: 0;

    position: relative;
`;

const Icon = styled.img`
    width: 8vw;
    margin: 2vw;
    position: absolute;
`;

const Theme = styled.div`
    font-size: 4rem;

    text-align: center;
    color: #612d1c;
    font-weight: bold;

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
