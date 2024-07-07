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
    width: 40%;
    aspect-ratio: 1;
    background-color: #dba290;

    margin-bottom: 5%;

    text-decoration: none;
`;

const Icon = styled.img`
    width: 18.5%;
    margin: 5%;
    position: relative;
`;

const Theme = styled.div`
    font-size: 350%;

    text-align: center;
    color: #612d1c;
    font-weight: bold;

    align-self: center;
`;
