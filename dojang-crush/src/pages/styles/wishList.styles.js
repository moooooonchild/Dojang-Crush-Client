import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
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
    font-size: 1.5rem;
    font-weight: bold;
`;

export const ToTheme = styled.div`
    position: absolute;
    right: 7%;
    top: 100%;

    font-size: 1rem;
    font-weight: bold;
`;

export const PlaceList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 9.5vh;
    flex: 1;
`;

export const WishList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    flex-wrap: wrap;

    padding-bottom: 9.5vh;

    width: 100vw;
`;
