import * as S from "./styles/postDetail.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CommentModal from "../components/CommentModal";
import PostEditModal from "../components/PostEditModal";
import PostDeleteModal from "../components/PostDeleteModal";
import ImageSlider from "../components/ImageSliderComponent";

import backIcon from "../assets/ui/back.svg";
import calendarIcon from "../assets/ui/calendar.svg";
import defaultProfile from "../assets/ui/defaultProfile.png";
import defaultImage from "../assets/ui/defaultImage.png";

const PostDetailPage = () => {
    const nav = useNavigate();
    const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const onClickBackButton = () => {
        nav(-1);
    };

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

    const images = [defaultImage, defaultImage, defaultImage, defaultImage];
    //TODO - 임시 이미지 배열로 api 연결 후 삭제

    return (
        <S.Container>
            <PostEditModal
                isOpen={isMoreModalOpen}
                modalHandler={moreModalHandler}
                deleteModalHandler={deleteModalHandler}
            />
            <PostDeleteModal
                isOpen={isDeleteModalOpen}
                modalHandler={deleteModalHandler}
            />
            <CommentModal
                isOpen={isCommentModalOpen}
                modalHandler={commentModalHandler}
            />

            <S.Header>
                <S.BackButton src={backIcon} onClick={onClickBackButton} />
                <S.Title>Timeline</S.Title>
                <S.CalendarButton
                    src={calendarIcon}
                    onClick={onClickBackButton} //TODO - 캘린더 창 이동으로 수정해야함
                />
            </S.Header>
            <S.PostArea>
                <S.ProfileArea>
                    <S.ProfileImg src={defaultProfile} />
                    <S.InfoArea>
                        <S.Name>이화연</S.Name>
                        <S.Tag>#테마, #장소</S.Tag>
                    </S.InfoArea>
                    <S.MoreBtn onClick={moreModalHandler} />
                </S.ProfileArea>
                <ImageSlider images={images} />
                <S.PostText>
                    I though we had a place, just our place, our home place, my
                    headspace Was you and I always, but that phase has been
                    phased in our place I see it on your face, a small trace, a
                    blank slate, we been erased But if we're way too faded to
                    drive, you can stay one more night We said we'd both love
                    higher than we knew we could go But still the hardest part
                    is knowing when to let go You wanted to go higher, higher,
                    higher Burn too bright, now the fire's gone, watch it all
                    fall down, Babylon
                </S.PostText>
                <S.RowLine />
                <S.PostTime>1분 전</S.PostTime>
                <S.CommentArea>
                    <S.Comment>
                        <S.NickName>해피캣</S.NickName>
                        <S.Content>해피해피해피~</S.Content>
                    </S.Comment>
                    <S.Comment>
                        <S.NickName>해피캣</S.NickName>
                        <S.Content>해피해피해피~</S.Content>
                    </S.Comment>
                    <S.Comment>
                        <S.NickName>해피캣</S.NickName>
                        <S.Content>해피해피해피~</S.Content>
                    </S.Comment>

                    <S.CommentWrite onClick={commentModalHandler}>
                        <S.CommentProfileImg src={defaultProfile} />
                        <S.TextInput placeholder="댓글 달기" />
                    </S.CommentWrite>
                </S.CommentArea>
            </S.PostArea>
        </S.Container>
    );
};

export default PostDetailPage;
