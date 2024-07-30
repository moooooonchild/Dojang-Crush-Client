import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../api/post";

const PostDeleteModal = ({ isOpen, modalHandler }) => {
    const nav = useNavigate();
    const postId = useRef();
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

    const onClickDeleteBtn = () => {
        deletePost(postId)
            .then(alert("게시글 삭제 완료"))
            .then(nav(-1))
            .catch((err) => console.log(err));
    };

    return (
        <Background
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={modalHandler}
        >
            <Container onClick={(e) => e.stopPropagation()}>
                <Text>
                    게시물을
                    <br />
                    삭제하시겠습니까?
                </Text>
                <DeleteBtn onClick={onClickDeleteBtn}>삭제하기</DeleteBtn>
            </Container>
        </Background>
    );
};

export default PostDeleteModal;

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
    justify-content: space-around;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    padding: 4vw;

    width: 66.6vw;
    height: 18.5vh;

    border-radius: 1vw;
    background-color: white;
`;

const Text = styled.div`
    font-size: 2rem;
    text-align: center;
`;

const DeleteBtn = styled.button`
    width: 22vw;
    height: 5vh;

    background-color: inherit;
    border-color: #612d1c;
    font-size: 2rem;
`;
