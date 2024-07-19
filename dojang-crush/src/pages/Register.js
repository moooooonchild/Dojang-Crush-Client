import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../assets/logo/LOGO.svg";
import { ReactComponent as LogoText } from "../assets/logo/도장깨기.svg";

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <RegisterContainer>
            <LogoContainer>
                <Logo />
                <Logotext />
            </LogoContainer>
            <SNSLoginContainer>
                <SNSLoginTxt>SNS으로 로그인하기</SNSLoginTxt>
                <KAKAOLoginBTN>
                    <KAKAOLogo /> 카카오 로그인
                </KAKAOLoginBTN>
            </SNSLoginContainer>
        </RegisterContainer>
    );
};

export default RegisterPage;

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14vh;
`;

//로고
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6vh;
    align-items: center;
    gap: 3vh;
`;

const Logo = styled(LogoSVG)`
    width: 15vh;
    height: auto;
`;

const Logotext = styled(LogoText)`
    height: 3.8vh;
    width: auto;
`;

const SNSLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 10vh;
    font-size: 0.8rem;
`;

const SNSLoginTxt = styled.div`
    font-size: 2rem;
    margin-bottom: 1vh;
    font-weight: bolder;
    color: #000000;
`;

const KAKAOLoginBTN = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 4.8vh;
    border: none;
    border-radius: 4px;
    background-color: #ffdd00;
    font-size: 3rem;
    font-weight: bold;
    &:hover {
        background-color: #e6c200;
    }
`;

const KAKAOLogo = styled(RiKakaoTalkFill)`
    position: absolute;
    left: 3vw;
    margin-right: 10px;
    font-size: 3rem;
`;
