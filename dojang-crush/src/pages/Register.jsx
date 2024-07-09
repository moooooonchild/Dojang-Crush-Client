import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../assets/logo/LOGO.svg";
import { ReactComponent as LogoText } from "../assets/logo/도장깨기.svg";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #F8E8E4;
        margin: 0;
    }
`;

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
    align-items: center;
    gap: 3vh;
    margin-bottom: 6vh;
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
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: start;

    font-size: 0.8rem;
`;
const SNSLoginTxt = styled.div`
    color: #000000;
    margin-bottom: 1vh;
`;

const KAKAOLoginBTN = styled.button`
    width: 80vw;
    display: flex;
    background-color: #ffdd00;
    justify-content: center;
    align-items: center;
    height: 4.8vh;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    &:hover {
        background-color: #e6c200;
    }
`;

const KAKAOLogo = styled(RiKakaoTalkFill)`
    font-size: 1.5rem;
    margin-right: 10px;
`;

const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <RegisterContainer>
            <GlobalStyle />
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
