import * as S from "./styles/commentModal.styles";
import { useEffect, useRef, useState } from "react";

import profileImg from "../assets/ui/defaultProfile.png";
import { getComments, postComments } from "../api/comment";

const CommentModal = ({ isOpen, modalHandler, postId }) => {
    const [commentList, setCommentList] = useState(null);
    const [myComments, setMyComments] = useState("");
    const containerRef = useRef(null);
    const initialHeightRef = useRef(window.innerHeight);

    useEffect(() => {
        //댓글 불러오기
        getComments(postId)
            .then((res) => setCommentList(res))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        //모달 띄웠을 때 스크롤 비활성화
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        //REVIEW - 키보드 올라왔을때 모달 위치 조정 - 확인해야됨
        const handleResize = () => {
            if (window.innerHeight < initialHeightRef.current) {
                // 키보드가 올라올 때
                const vhDiff = initialHeightRef.current - window.innerHeight;
                const vhValue = (vhDiff / window.innerHeight) * 100; // vh 단위로 계산

                containerRef.current.style.bottom = `${vhValue}vh`;
            } else {
                // 키보드가 내려갈 때
                containerRef.current.style.bottom = "0";
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const onChangesMyComments = (e) => {
        const { value } = e.target;
        setMyComments(value);
    };

    const onSubmitMyComments = async (e) => {
        if (myComments.trim() === "") {
            alert("내용을 입력해주세요.");
        } else {
            const data = {
                content: myComments,
                parentId: null, //NOTE - 추후 대댓글 기능 추가
            };
            await postComments(postId, data);
            //window.location.reload();
        }
    };

    return (
        <S.Background
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={modalHandler}
        >
            <S.Container
                ref={containerRef}
                onClick={(e) => e.stopPropagation()}
            >
                {commentList && (
                    <div>
                        {commentList.map((c, index) => {
                            return (
                                <S.Comment key={index}>
                                    <S.ProfImg
                                        src={
                                            c.writer.profileImageUrl ||
                                            profileImg
                                        }
                                    />
                                    <S.CommentArea>
                                        <S.Name>{`${c.writer.name}`}</S.Name>
                                        <S.CommentTime>
                                            {c.createdDate}
                                        </S.CommentTime>
                                        <S.Text>{c.content}</S.Text>
                                    </S.CommentArea>
                                </S.Comment>
                            );
                        })}
                    </div>
                )}
                <S.CommentWrite>
                    <S.TextArea
                        type="text"
                        value={myComments}
                        onChange={onChangesMyComments}
                    />
                    <S.SendBtn onClick={onSubmitMyComments} />
                </S.CommentWrite>{" "}
            </S.Container>
        </S.Background>
    );
};

export default CommentModal;
