import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SettingSVG } from '../assets/ui/settingemoji.svg';

const TopBarWithSetting = ({ text }) => {
    const navigate = useNavigate();
    return (
        <TopBarWrapper>
            <TopBarText>{`${text}`}</TopBarText>
            <SettingBTN onClick={() => navigate('/settings')} />
        </TopBarWrapper>
    );
};
export default TopBarWithSetting;

const TopBarWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 1000;
    width: 90vw;
    margin-top: 5vh;
    margin-bottom: 4vh;
    padding: 1vh 5vw;
`;
const SettingBTN = styled(SettingSVG)`
    height: 5vw;
    width: auto;
    margin-left: auto;
    color: #7b4f3d;
    cursor: pointer;
`;

const TopBarText = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    font-weight: bold;
`;
