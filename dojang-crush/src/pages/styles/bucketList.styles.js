import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
`;

export const Title = styled.div`
    margin: 8vw;
    font-size: 4rem;
    font-weight: bold;
`;

export const BucketList = styled.div`
    display: flex;
    justify-content: space-evenly;
    //overflow-y: auto;

    width: 100vw;

    flex: 1;
    flex-wrap: wrap;
`;
