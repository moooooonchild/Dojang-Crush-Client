import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CommentModal from "../components/CommentModal";

import backIcon from "../assets/ui/back.svg";
import calendarIcon from "../assets/ui/calendar.svg";
import defaultProfile from "../assets/ui/defaultProfile.png";
import defaultImage from "../assets/ui/defaultImage.png";
import { useState } from "react";

const PostDetailPage = () => {
    const nav = useNavigate();
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

    const onClickBackButton = () => {
        nav(-1);
    };

    const commentModalHandler = () => {
        setIsCommentModalOpen(!isCommentModalOpen);
    };

    return (
        <Container>
            <CommentModal
                isOpen={isCommentModalOpen}
                modalHandler={commentModalHandler}
            />
            <Header>
                <BackButton src={backIcon} onClick={onClickBackButton} />
                <Title>Timeline</Title>
                <CalendarButton
                    src={calendarIcon}
                    onClick={onClickBackButton} //TODO - 캘린더 창 이동으로 수정해야함
                />
            </Header>
            <PostArea>
                <ProfileArea>
                    <ProfileImg src={defaultProfile} />
                    <InfoArea>
                        <Name>이화연</Name>
                        <Tag>#테마, #장소</Tag>
                    </InfoArea>
                </ProfileArea>
                <PostImg src={defaultImage} />
                <PostText>
                    I though we had a place, just our place, our home place, my
                    headspace Was you and I always, but that phase has been
                    phased in our place I see it on your face, a small trace, a
                    blank slate, we been erased But if we're way too faded to
                    drive, you can stay one more night We said we'd both love
                    higher than we knew we could go But still the hardest part
                    is knowing when to let go You wanted to go higher, higher,
                    higher Burn too bright, now the fire's gone, watch it all
                    fall down, Babylon
                </PostText>
                <RowLine />
                <PostTime>1분 전</PostTime>
                <CommentArea>
                    <Comment>
                        <NickName>해피캣</NickName>
                        <Content>해피해피해피~</Content>
                    </Comment>
                    <Comment>
                        <NickName>해피캣</NickName>
                        <Content>해피해피해피~</Content>
                    </Comment>
                    <Comment>
                        <NickName>해피캣</NickName>
                        <Content>해피해피해피~</Content>
                    </Comment>

                    <CommentWrite onClick={commentModalHandler}>
                        <CommentProfileImg src={defaultProfile} />
                        <TextInput placeholder="댓글 달기" />
                    </CommentWrite>
                </CommentArea>
            </PostArea>
        </Container>
    );
};

export default PostDetailPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const Header = styled.div`
    display: flex;
    justify-content: center; /* Title을 중앙에 배치 */
    align-items: center;

    position: relative;

    width: 100vw;

    margin: 4vw 0;
`;

const Title = styled.div`
    font-size: 4rem;
    font-weight: bold;
`;

const BackButton = styled.img`
    position: absolute;
    left: 8%;
    top: 50%;
    transform: translateY(-50%);

    width: 4vw;
`;

const CalendarButton = styled.img`
    position: absolute;
    right: 8%;
    top: 50%;
    transform: translateY(-50%);

    width: 4vw;
`;

const PostArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`;

const ProfileArea = styled.div`
    display: flex;
    justify-content: left;

    width: 100vw;
    margin-bottom: 4vw;
    padding: 0 6vw;
`;

const ProfileImg = styled.img`
    margin-right: 4vw;
    width: 20.2vw;
`;

const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 20.2vw;
`;

const Name = styled.div`
    font-size: 3rem;
    font-weight: bold;

    margin-right: 2vw;
`;

const Tag = styled.div`
    font-size: 2.5rem;
`;

const PostImg = styled.img`
    width: 88vw;
`;

const PostText = styled.div`
    padding: 4vw 6vw;
    font-size: 2rem;
`;

const RowLine = styled.div`
    width: 88vw;
    border-bottom: 1px solid black;
    margin-bottom: 1vw;
`;

const PostTime = styled.div`
    width: 88vw;
    margin-bottom: 4vw;
    font-size: 1rem;
    text-align: right;
`;

const CommentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

const Comment = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;

    width: 88vw;

    margin-bottom: 1.5vw;
`;

const NickName = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    margin-right: 2vw;
`;

const Content = styled.div`
    font-size: 2.5rem;
`;

const CommentWrite = styled.div`
    display: flex;
    width: 88vw;
    margin-top: 1vw;
    margin-bottom: 4vw;
`;

const CommentProfileImg = styled.img`
    width: 6vw;
    margin-right: 2vw;
`;

const TextInput = styled.input`
    font-size: 2rem;

    border: none;
    background-color: inherit;
`;
