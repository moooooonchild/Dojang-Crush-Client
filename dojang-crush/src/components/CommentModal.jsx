import * as S from './styles/commentModal.styles';
import { useEffect, useRef, useState } from 'react';

import profileImg from '../assets/ui/defaultProfile.png';

import { getComments, postComments, deleteComments } from '../api/comment';
import useTimeSince from '../hooks/useTimeSince';

const CommentModal = ({ isOpen, modalHandler, postId, myId }) => {
    const [commentList, setCommentList] = useState(null);
    const [myComments, setMyComments] = useState('');
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
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight < initialHeightRef.current) {
                // 키보드가 올라올 때
                const vhDiff = initialHeightRef.current - window.innerHeight;
                const vhValue = (vhDiff / window.innerHeight) * 100; // vh 단위로 계산

                containerRef.current.style.bottom = `${vhValue}vh`;
            } else {
                // 키보드가 내려갈 때
                containerRef.current.style.bottom = '0';
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onChangesMyComments = (e) => {
        const { value } = e.target;
        setMyComments(value);
    };

    const onSubmitMyComments = async (e) => {
        if (myComments.trim() === '') {
            alert('내용을 입력해주세요.');
        } else {
            const data = {
                content: myComments,
                parentId: null,
            };
            await postComments(postId, data);
            window.location.reload();
        }
    };

    const onClickDeleteBtn = async (commentId) => {
        deleteComments(commentId).then(window.location.reload());
    };

    const CommentItem = ({ comment, myId, onClickDeleteBtn }) => {
        const timeSince = useTimeSince(comment.createdDate);

        return (
            <S.Comment>
                <S.ProfImg src={comment.writer.profileImageUrl || profileImg} />
                <S.CommentArea>
                    <S.Name>{`${comment.writer.name}`}</S.Name>
                    <S.CommentTime>{timeSince}</S.CommentTime>
                    <S.Text>{comment.content}</S.Text>
                </S.CommentArea>
                {myId === comment.writer.memberId && (
                    <S.DeleteBtn
                        onClick={() => onClickDeleteBtn(comment.commentId)}
                    ></S.DeleteBtn>
                )}
            </S.Comment>
        );
    };

    return (
        <S.Background
            style={{ display: isOpen ? 'flex' : 'none' }}
            onClick={modalHandler}
        >
            <S.Container
                ref={containerRef}
                onClick={(e) => e.stopPropagation()}
            >
                {commentList && (
                    <div style={{ width: '100%' }}>
                        {commentList.map((comment, index) => (
                            <CommentItem
                                key={index}
                                comment={comment}
                                myId={myId}
                                onClickDeleteBtn={onClickDeleteBtn}
                            />
                        ))}
                    </div>
                )}
                <S.CommentWrite>
                    <S.TextArea
                        type="text"
                        value={myComments}
                        onChange={onChangesMyComments}
                    />
                    <S.SendBtn onClick={onSubmitMyComments} />
                </S.CommentWrite>
            </S.Container>
        </S.Background>
    );
};

export default CommentModal;
