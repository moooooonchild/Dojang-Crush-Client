import styled from "styled-components";

export const Container = styled.button`
    position: relative;

    width: 90vw;
    height: 23vh;
    margin-bottom: 4vw;

    border: none;
    background-color: #dba290;

    text-decoration: none;

    flex-shrink: 0;
`;

export const PlaceImg = styled.img`
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);

    width: 82.1vw;
    height: 13vh;

    object-fit: cover;
`;

export const Name = styled.div`
    position: absolute;
    top: 69%;
    left: 4%;

    font-size: 2rem;
    font-weight: bold;
    color: #612d1c;
`;

export const Address = styled.div`
    position: absolute;
    top: 82%;
    left: 4%;

    font-size: 2rem;
    font-weight: bold;
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
    height: 2.1vh;

    div {
        font-size: 2rem;
        font-weight: bold;
        color: #612d1c;
    }
`;

export const HeartButton = styled.button`
    position: absolute;
    top: 90%;
    right: 0%;

    width: 5.5vw;

    border: none;
    background: none;

    img {
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }
`;