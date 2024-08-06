import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow-x: hidden;
    overflow-y: scroll;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between; /* Title을 중앙에 배치 */
    align-items: center;

    position: relative;

    width: 100vw;

    margin: 8vw 0;
    padding: 0 8vw;
`;

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const BackButton = styled.img`
    width: 4vw;
`;

export const EmptyItem = styled.div`
    width: 4vw;
`;

export const PlaceList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    padding-bottom: 9.5vh;

    flex: 1;
    width: 100vw;
`;
