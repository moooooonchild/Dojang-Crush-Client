import * as S from './ModalContent.style';
import {
    GameIcon,
    HealingIcon,
    MusicIcon,
    NatureIcon,
    SpecialIcon,
    SportsIcon,
    FoodIcon,
    CafeIcon,
    ExhibitionIcon,
    ShoppingIcon,
} from './Icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const themeIcons = {
    스포츠: <SportsIcon key="sports" />,
    음악: <MusicIcon key="music" />,
    이색: <SpecialIcon key="special" />,
    힐링: <HealingIcon key="healing" />,
    게임: <GameIcon key="game" />,
    자연: <NatureIcon key="nature" />,
    맛집: <FoodIcon key="food" />,
    카페: <CafeIcon key="cafe" />,
    전시: <ExhibitionIcon key="exhibition" />,
    쇼핑: <ShoppingIcon key="shopping" />,
};

export const ModalContent = ({ posts }) => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const onPostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsVisible(true);
    //     }, 100);

    //     return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    // }, []);

    // if (!isVisible) {
    //     return null;
    // }

    return (
        <S.Container>
            {posts.map((post) => (
                <S.ItemContainer
                    key={post.postId}
                    onClick={() => onPostClick(post.postId)}
                >
                    {themeIcons[post.theme]}
                    {`${post.placeTag}`}
                </S.ItemContainer>
            ))}
        </S.Container>
    );
};
