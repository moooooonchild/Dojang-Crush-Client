import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SharingSVG } from '../assets/ui/share.svg';

const TopBarUpload = ({ text, onClickUpload }) => {
    const navigate = useNavigate();
    return (
        <TopBarWrapper>
            <BackBTN onClick={() => navigate(-1)} />
            <TopBarText>{`${text}`}</TopBarText>
            <TopBarSharingBTN onClick={onClickUpload}>
                <SharingIcon />
            </TopBarSharingBTN>
        </TopBarWrapper>
    );
};
export default TopBarUpload;

const TopBarWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 1000;
    margin-top: 5vh;
    margin-bottom: 4vh;
    width: 90vw;
    padding: 1vh 0vw;
`;
const BackBTN = styled(IoMdArrowRoundBack)`
    margin-left: 3vw;
    font-size: 4rem;
    color: #7b4f3d;
    cursor: pointer;
`;

const TopBarText = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60vw;
    font-size: 4rem;
    font-weight: bold;
`;

const TopBarSharingBTN = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 3vw;
    border: none;
    background-color: inherit;
`;

const SharingIcon = styled(SharingSVG)`
    width: 4vw;
    height: auto;
`;
