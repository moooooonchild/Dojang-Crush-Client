import * as S from './styles/postDetail.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CommentModal from '../components/CommentModal';
import PostEditModal from '../components/PostEditModal';
import PostDeleteModal from '../components/PostDeleteModal';
import ImageSlider from '../components/ImageSliderComponent';

import backIcon from '../assets/ui/back.svg';
import calendarIcon from '../assets/ui/calendar.svg';
import defaultProfile from '../assets/ui/defaultProfile.png';
import defaultImage from '../assets/ui/defaultImage.png';

import { getPostDetail } from '../api/post';
import { getComments } from '../api/comment';
import { getMemberInfo } from '../api/member';

const PostDetailPage = () => {
    const postId = useParams().id;
    const nav = useNavigate();

    const [commentList, setCommentList] = useState(null);
    const [postDetail, setPostDetail] = useState(null);
    const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [myId, setMyId] = useState(null);

    useEffect(() => {
        getPostDetail(postId)
            .then((res) => setPostDetail(res))
            .then(console.log(postDetail))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        getComments(postId)
            .then((res) => setCommentList(res))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        getMemberInfo()
            .then((res) => setMyId(res.userId))
            .catch((err) => console.log(err));
    }, []);

    const commentModalHandler = () => {
        setIsCommentModalOpen(!isCommentModalOpen);
    };

    const moreModalHandler = (event) => {
        event.stopPropagation();
        setIsMoreModalOpen(!isMoreModalOpen);
    };

    const deleteModalHandler = (event) => {
        moreModalHandler(event);
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    return (
        <S.Container>
            {postDetail && commentList && (
                <>
                    <PostEditModal
                        isOpen={isMoreModalOpen}
                        modalHandler={moreModalHandler}
                        deleteModalHandler={deleteModalHandler}
                        postDetail={postDetail}
                    />
                    <PostDeleteModal
                        isOpen={isDeleteModalOpen}
                        modalHandler={deleteModalHandler}
                    />
                    <CommentModal
                        isOpen={isCommentModalOpen}
                        modalHandler={commentModalHandler}
                        postId={postId}
                        myId={myId}
                    />

                    <S.Header>
                        <S.BackButton src={backIcon} onClick={() => nav(-1)} />
                        <S.Title>Timeline</S.Title>
                        <S.CalendarButton
                            src={calendarIcon}
                            onClick={() => nav(-1)} //TODO - 캘린더 창 이동으로 수정해야함
                        />
                    </S.Header>
                    <S.PostArea>
                        <S.ProfileArea>
                            <S.ProfileImg
                                src={
                                    postDetail.writerDto.profileImageUrl ||
                                    defaultProfile
                                }
                            />
                            <S.InfoArea>
                                <S.Name>{postDetail.writerDto.name}</S.Name>
                                <S.Tag>{`#${postDetail.theme} #${postDetail.placeTag}`}</S.Tag>
                            </S.InfoArea>
                            {myId === postDetail.writerDto.memberId && (
                                <S.MoreBtn onClick={moreModalHandler} />
                            )}
                        </S.ProfileArea>
                        <ImageSlider images={postDetail.imageUrl} />
                        <S.PostText>{postDetail.content}</S.PostText>
                        <S.PostTime>{postDetail.createdDate}</S.PostTime>
                        <S.CommentArea onClick={commentModalHandler}>
                            <S.RowLine />

                            {commentList.length > 1 ? (
                                <>
                                    <S.Comment>
                                        <S.NickName>{`${commentList[0].writer.name}`}</S.NickName>
                                        <S.Content>
                                            {commentList[0].content}
                                        </S.Content>
                                    </S.Comment>
                                    <S.Comment>
                                        <S.NickName>{`${commentList[1].writer.name}`}</S.NickName>
                                        <S.Content>
                                            {commentList[1].content}
                                        </S.Content>
                                    </S.Comment>
                                </>
                            ) : null}

                            <S.CommentWrite>
                                <S.CommentProfileImg src={defaultProfile} />
                                <S.TextInput placeholder="댓글 달기" />
                            </S.CommentWrite>
                        </S.CommentArea>
                    </S.PostArea>
                </>
            )}
        </S.Container>
    );
};

export default PostDetailPage;
