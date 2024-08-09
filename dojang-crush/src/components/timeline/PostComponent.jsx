import { useEffect, useState } from 'react';
import * as S from './PostComponent.style';
import * as I from '../styles/imageSlider.styles';
import { getAllPosts, deleteHeart, postHeart } from '../../api/post';
import useTimeSince from '../../hooks/useTimeSince';
import ImageSlider from '../ImageSliderComponent';
import styled from 'styled-components';
import Slider from 'react-slick';

const dummy_detail = {
    content: '사진이 제발 떠줬으면 조켄네..',
    theme: '음악',
    placeTag: '현대카드 뮤직 라이브러리',
    createdDate: '2024-08-05T15:08:36.724671',
    visitedDate: '2024-08-02',
    writerDto: {
        memberId: 6,
        name: '박서연',
        profileImageUrl:
            'http://k.kakaocdn.net/dn/blpeUv/btsFs3Xj3rn/0E4Xg586Cl8nkiRuvLkkM0/img_640x640.jpg',
        email: null,
    },
    groupId: 3,
    postLike: false,
    countLike: 0,
    imageUrl: [
        'https://sws-dojangcrush-bucket.s3.ap-northeast-2.amazonaws.com/스크린샷 2024-07-23 223740.png',
        'https://sws-dojangcrush-bucket.s3.ap-northeast-2.amazonaws.com/스크린샷 2024-07-24 213442.png',
        'https://sws-dojangcrush-bucket.s3.ap-northeast-2.amazonaws.com/스크린샷 2024-07-31 234730.png',
    ],
    recentCommentDto: null,
    postId: 21,
};

const ProfileLine = ({ writer, timeSince }) => {
    if (!writer) return null;
    const { name, profileImageUrl } = writer;
    return (
        <>
            <S.ProfileContainer>
                <S.ProfileImageContainer src={profileImageUrl} />
                <S.ProfileName>{name}</S.ProfileName>
                <S.UploadTime>{timeSince}</S.UploadTime>
            </S.ProfileContainer>
        </>
    );
};

const Images = () => {
    return <></>;
};

const HashtagLine = () => {};

export const PostComponent = ({
    setPostId,
    onPostClick,
    postInfo,
    writerInfo,
}) => {
    // 변경될 값

    // status
    // const [writerInfo, setWriterInfo] = useState();
    // const [postInfo, setPostInfo] = useState([]);
    // test value
    const [liked, setLiked] = useState(false);

    const timeSince = useTimeSince(postInfo.createdDate);

    const handlePostClickInternal = () => {
        if (postInfo.postId) {
            onPostClick(postInfo.postId);
        }
    };

    const ImageSlider = ({ images }) => {
        const settings = {
            dots: true,
            infinite: images.length > 1,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: true,
            centerMode: true,
        };

        return (
            <SliderWrapper>
                <CustomSlider {...settings}>
                    {images.map((img, index) => {
                        return (
                            <Slide key={index}>
                                <SlideImage src={img} />
                            </Slide>
                        );
                    })}
                </CustomSlider>
            </SliderWrapper>
        );
    };

    const handleLiked = () => console.log('test');

    return (
        <>
            <S.PostContainer onClick={handlePostClickInternal}>
                <ProfileLine writer={writerInfo} timeSince={timeSince} />
                <S.ImageContainer>
                    {/* <S.Image
                        src={postInfo.imageUrl ? postInfo.imageUrl[0] : ''}
                    /> */}
                    <ImageSlider images={postInfo.imageUrl} />
                </S.ImageContainer>
                <S.HashTagContainer>
                    <S.HastTagText>{`#${postInfo.theme}`}</S.HastTagText>
                    <S.HastTagText>{`#${postInfo.placeTag}`}</S.HastTagText>
                    {/* <S.LikeIconContainer onClick={handleLiked}>
                        {liked ? <S.FillLikeIcon /> : <S.EmptyLikeIcon />}
                    </S.LikeIconContainer> */}
                </S.HashTagContainer>
            </S.PostContainer>
        </>
    );
};

export const SliderWrapper = styled.div`
    width: 100%;
    /* padding-bottom: 3vw; */
`;

export const CustomSlider = styled(Slider)`
    .slick-dots li button:before {
        font-size: 0.7rem;
    }
`;

export const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vw;
    border: solid 1px whitesmoke;
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
