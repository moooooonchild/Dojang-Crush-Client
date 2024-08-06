import styled from 'styled-components';
import editBtn from '../../assets/ui/menu-dots.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between; /* Title을 중앙에 배치 */
    align-items: center;
    width: 100vw;

    margin: 4vw 0;
    padding: 0 8vw;
`;

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const BackButton = styled.img`
    width: 4vw;
`;

export const CalendarButton = styled.img`
    width: 4vw;
`;

export const PostArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    width: 100%;
`;

export const ProfileArea = styled.div`
    display: flex;
    justify-content: left;

    width: 100vw;
    margin-bottom: 4vw;
    padding: 0 6vw;
`;

export const ProfileImg = styled.img`
    margin-right: 4vw;
    width: 20.2vw;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20.2vw;
`;

export const Name = styled.div`
    font-size: 1.3rem;
    font-weight: bold;

    margin-right: 2vw;
`;

export const Tag = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

export const MoreBtn = styled.button`
    width: 4.8vw;
    height: 4.8vw;

    margin-left: auto;

    border: none;
    background-color: inherit;
    background-image: url(${editBtn});
    background-size: cover;
`;

export const PostText = styled.div`
    width: 100%;
    padding: 4vw 6vw 1vw;
    font-size: 1rem;
`;

export const RowLine = styled.div`
    width: 88vw;
    border-bottom: 1px solid black;
    margin-bottom: 1vw;
`;

export const PostTime = styled.div`
    width: 88vw;
    margin-bottom: 4vw;
    font-size: 0.8rem;
    text-align: right;
`;

export const CommentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    position: absolute;
    bottom: 0;
`;

export const Comment = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;

    width: 88vw;

    margin-bottom: 1.5vw;
`;

export const NickName = styled.div`
    font-size: 1rem;
    font-weight: bold;
    margin-right: 2vw;
`;

export const Content = styled.div`
    font-size: 1rem;
`;

export const CommentWrite = styled.div`
    display: flex;
    width: 88vw;
    margin-top: 1vw;
    margin-bottom: 4vw;
`;

export const CommentProfileImg = styled.img`
    width: 6vw;
    margin-right: 2vw;
`;

export const TextInput = styled.input`
    font-size: 1rem;

    border: none;
    background-color: inherit;
`;
