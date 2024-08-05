import styled from 'styled-components';

export const Container = styled.button`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 90vw;
    height: 23vh;
    margin-bottom: 4vw;
    padding: 1vh 4vw;

    border: none;
    background-color: #dba290;

    text-decoration: none;

    flex-shrink: 0;
`;

export const PlaceImg = styled.img`
    width: 82vw;
    height: 13vh;

    object-fit: cover;
`;

export const Name = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: #612d1c;
`;

export const Address = styled.div`
    white-space: nowrap;
    overflow-x: scroll;

    width: 75vw;
    font-size: 0.9rem;
    text-align: left;
    color: #612d1c;
`;

export const Users = styled.div`
    display: flex;
    overflow-x: scroll;
    justify-content: flex-end;
    position: absolute;
    top: 69%;
    right: 4%;

    width: 37vw;
    height: 3vh;

    overflow-y: hidden;

    div {
        display: flex;
        align-items: center;
        padding: 0.5vw 1.5vw;
        font-size: 0.7rem;
        font-weight: bold;
        color: #612d1c;
        background-color: white;
        border-radius: 1rem;
    }
`;

export const HeartButton = styled.button`
    position: absolute;
    top: 84%;
    right: 0%;

    width: 8vw;

    border: none;
    background: none;

    img {
        width: 95%;
    }
`;
