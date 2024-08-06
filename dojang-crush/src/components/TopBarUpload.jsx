import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import backIcon from '../assets/ui/back.svg';
import { ReactComponent as SharingSVG } from '../assets/ui/share.svg';

const TopBarUpload = ({ text, onClickUpload }) => {
    const navigate = useNavigate();
    return (
        <TopBarWrapper>
            <BackBTN src={backIcon} onClick={() => navigate(-1)} />
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
    justify-content: space-between;
    z-index: 1000;
    margin: 8vw;
    padding: 0 6vw;
    width: 100vw;
`;
const BackBTN = styled.img`
    //margin-left: 3vw;
    width: 4vw;
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
    font-size: 1.5rem;
    font-weight: bold;
`;

const TopBarSharingBTN = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-left: auto;
    //margin-right: 4vw;
    border: none;
    background-color: inherit;
`;

const SharingIcon = styled(SharingSVG)`
    width: 4vw;
    height: auto;
`;
