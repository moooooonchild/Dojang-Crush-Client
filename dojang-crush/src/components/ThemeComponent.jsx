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
    align-self: center;

    position: relative;

    width: 40vw;

    background-color: #dba290;

    text-decoration: none;
    aspect-ratio: 1;
    flex-shrink: 0;
`;

const Icon = styled.img`
    position: absolute;
    width: 8vw;
    margin: 2vw;
`;

const Theme = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 4rem;
    text-align: center;
    color: #612d1c;
    font-weight: bold;
`;
