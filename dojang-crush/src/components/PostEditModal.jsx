import * as S from "./styles/postEditModal.styles";
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
        <S.Background
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={modalHandler}
        >
            <S.Container onClick={(e) => e.stopPropagation()}>
                <S.XButton src={xButton} onClick={modalHandler} />
                <S.BtnArea>
                    <S.EditBtn
                        onClick={() => {
                            nav(`/upload`);
                        }}
                    >
                        수정하기
                    </S.EditBtn>
                    <S.DeleteBtn onClick={deleteModalHandler}>
                        삭제하기
                    </S.DeleteBtn>
                </S.BtnArea>
            </S.Container>
        </S.Background>
    );
};

export default PostEditModal;
