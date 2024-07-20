import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import xButton from "../assets/ui/xButton.svg";

const PostEditModal = ({ isOpen, modalHandler, deleteModalHandler }) => {
    const nav = useNavigate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <Background
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={modalHandler}
        >
            <Container onClick={(e) => e.stopPropagation()}>
                <XButton src={xButton} onClick={modalHandler} />
                <BtnArea>
                    <EditBtn
                        onClick={() => {
                            nav(`/upload`);
                        }}
                    >
                        수정하기
                    </EditBtn>
                    <DeleteBtn onClick={deleteModalHandler}>삭제하기</DeleteBtn>
                </BtnArea>
            </Container>
        </Background>
    );
};

export default PostEditModal;

const Background = styled.div`
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

const Container = styled.div`
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

const XButton = styled.img`
    width: 5vw;
`;

const BtnArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    flex: 1;
`;

const EditBtn = styled.button`
    background-color: inherit;
    border: none;

    font-size: 3rem;
    font-weight: bold;
`;

const DeleteBtn = styled.button`
    background-color: inherit;
    border: none;

    font-size: 3rem;
    font-weight: bold;
`;
