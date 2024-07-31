import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../assets/logo/LOGO.svg';
import { ReactComponent as LogoText } from '../assets/logo/도장깨기.svg';
import client from '../api';
import axios from 'axios';
import Redirection from './Redirection';

const RegisterPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    const handleKakaoLogin = () => {
        const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
        window.location.href = kakaoLoginUrl;

        /* window.Kakao.Auth.login({
            success: function (authObj) {
                console.log("카카오 인증 객체: ", authObj);
                const kakaoToken = authObj.access_token;
                localStorage.setItem("token", kakaoToken);
                console.log(
                    "로컬 스토리지에 저장된 토큰: ",
                    localStorage.getItem("token")
                );
                client.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${kakaoToken}`;
                console.log(
                    "현재 axios instance 헤더 토큰",
                    client.defaults.headers.common["Authorization"]
                );

                const redirectUrl = process.env.REACT_APP_KAKAO_LOGIN;
                window.location.href = redirectUrl;

                // 로그인 성공 후 처리
                // 헤더 저장
                // get(members) -> GroupId === NULL ? link = /register : link = /home
                // navigate(`$(link)`); // 로그인 성공 후 리다이렉트할 경로
            },
            fail: function (err) {
                console.error(err);
            },
        });*/
    };

    return (
        <RegisterContainer>
            <LogoContainer>
                <Logo />
                <Logotext />
            </LogoContainer>
            <SNSLoginContainer>
                <SNSLoginTxt>SNS으로 로그인하기</SNSLoginTxt>
                <KAKAOLoginBTN onClick={handleKakaoLogin}>
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
