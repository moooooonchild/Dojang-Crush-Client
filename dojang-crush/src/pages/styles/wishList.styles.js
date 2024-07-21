import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center; /* Title을 중앙에 배치 */
    align-items: center;
    position: relative;

    width: 100vw;
    margin: 8vw;
`;

export const Title = styled.div`
    font-size: 4rem;
    font-weight: bold;
`;

export const ToTheme = styled.div`
    position: absolute;
    right: 6%;
    top: 100%;

    font-size: 2.3rem;
    font-weight: bold;
`;

export const PlaceList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
    flex: 1;
    width: 100vw;
`;

export const WishList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    flex-wrap: wrap;

    overflow-y: auto;

    width: 100vw;
`;
