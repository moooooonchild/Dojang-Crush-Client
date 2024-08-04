import NavigationBar from '../components/NavigationBar';
import ThemeComponent from '../components/ThemeComponent';
import * as S from './styles/bucketList.styles';

import sportsIcon from '../assets/theme/sports.svg';
import gameIcon from '../assets/theme/game.svg';
import healingIcon from '../assets/theme/healing.svg';
import natureIcon from '../assets/theme/nature.svg';
import musicIcon from '../assets/theme/music.svg';
import uniqueIcon from '../assets/theme/unique.svg';
import foodIcon from '../assets/theme/food.svg';
import cafeIcon from '../assets/theme/cafe.svg';
import exhibitionIcon from '../assets/theme/exhibition.svg';
import shoppingIcon from '../assets/theme/shopping.svg';

import { TitleComponent } from '../components/common/header/TitleComponent';

const BucketListPage = () => {
    return (
        <S.Container>
            <S.Title>Bucket List</S.Title>
            <S.BucketList>
                <ThemeComponent
                    themeKor="스포츠"
                    themeEng="sports"
                    icon={sportsIcon}
                />
                <ThemeComponent
                    themeKor="게임"
                    themeEng="game"
                    icon={gameIcon}
                />
                <ThemeComponent
                    themeKor="힐링"
                    themeEng="healing"
                    icon={healingIcon}
                />
                <ThemeComponent
                    themeKor="자연"
                    themeEng="nature"
                    icon={natureIcon}
                />
                <ThemeComponent
                    themeKor="음악"
                    themeEng="music"
                    icon={musicIcon}
                />
                <ThemeComponent
                    themeKor="이색"
                    themeEng="unique"
                    icon={uniqueIcon}
                />
                <ThemeComponent
                    themeKor="맛집"
                    themeEng="food"
                    icon={foodIcon}
                />
                <ThemeComponent
                    themeKor="카페"
                    themeEng="cafe"
                    icon={cafeIcon}
                />
                <ThemeComponent
                    themeKor="전시"
                    themeEng="exhibition"
                    icon={exhibitionIcon}
                />
                <ThemeComponent
                    themeKor="쇼핑"
                    themeEng="shopping"
                    icon={shoppingIcon}
                />
            </S.BucketList>

            <NavigationBar />
        </S.Container>
    );
};

export default BucketListPage;
