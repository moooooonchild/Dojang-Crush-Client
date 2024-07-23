import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    padding: 4vw;

    width: 66.6vw;
    height: 37.5vh;

    border-radius: 1vw;
    background-color: white;
`;

export const XButton = styled.img`
    width: 5vw;
`;

export const BtnArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    flex: 1;
`;

export const EditBtn = styled.button`
    background-color: inherit;
    border: none;

    font-size: 3rem;
    font-weight: bold;
`;

export const DeleteBtn = styled.button`
    background-color: inherit;
    border: none;

    font-size: 3rem;
    font-weight: bold;
`;
