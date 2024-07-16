import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

const SignupPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

//최상단 바
const TopBar = styled.div`
    margin-top: 5vh;
    margin-bottom: 4vh;
    display: flex;
    align-items: center;
    height: 4vh;
    width: 90vw;
`;
const BackBTN = styled(IoMdArrowRoundBack)`
    font-size: 2rem;
    margin-left: 1vw;
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

// 선택 및 입력 부분
const FillContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// 선택
const ChoiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90vw;

    gap: 2vw;
`;

const MakeGroup = styled.button`
    height: 50px;
    width: 44vw;
    border: none;
    border-radius: 4px;
    background-color: ${(props) =>
        props.isGroupMember ? "#e8c1b8" : "#dba290"};
    color: ${(props) => (props.isGroupMember ? "#ffffff" : "#000000")};
    cursor: pointer;
    &:hover {
        background-color: ${(props) =>
            props.isGroupMember ? "#c38776" : "none"};
    }
`;

const StartGroupMember = styled.button`
    height: 50px;
    width: 44vw;
    border: none;
    border-radius: 4px;
    background-color: ${(props) =>
        props.isGroupMember ? "#dba290" : "#e8c1b8"};
    color: ${(props) => (props.isGroupMember ? "#000000" : "#ffffff")};
    cursor: pointer;
    &:hover {
        background-color: ${(props) =>
            props.isGroupMember ? "none" : "#c38776"};
    }
`;
// 입력
const MakeGroupWrapper = styled.div``;

const Notification = styled.div`
    width: 90vw;
    margin-top: 1.5vh;

    white-space: pre-line;
`;

const EnterInformation = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    width: 90vw;
`;

const Nameinput = styled.input`
    height: 30px;

    border: solid 1.5px #dee2e6;
    border-radius: 4px;
    &::placeholder {
        color: #dee2e6;
    }
`;

const IDinput = styled.input`
    height: 30px;

    border: solid 1.5px #dee2e6;
    border-radius: 4px;
    &::placeholder {
        color: #dee2e6;
    }
`;

const PWinput = styled.input`
    height: 30px;
    border: solid 1.5px #dee2e6;
    border-radius: 4px;
    &::placeholder {
        color: #dee2e6;
    }
`;

const PWCheckinput = styled.input`
    height: 30px;
    border: solid 1.5px #dee2e6;
    border-radius: 4px;
    &::placeholder {
        color: #dee2e6;
    }
`;

const GroupName = styled.input`
    height: 30px;
    border: solid 1.5px #dee2e6;
    border-radius: 4px;
    &::placeholder {
        color: #dee2e6;
    }
`;

//체크박스
const ConfirmationContainer = styled.div`
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    gap: 1vh;
`;
const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 0.9rem;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    margin-right: 10px;
    margin-top: 5px;
`;

//회원가입
const SignupBTNWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const SignupBTN = styled.button`
    border: none;
    background-color: #9e8c85;
    color: #ffffff;
    width: 90vw;
    height: 35px;
    border-radius: 4px;

    margin-top: 2vh;
    &:hover {
        background-color: #8b7a73;
    }
`;

const SignupPage = () => {
    const navigate = useNavigate();
    const [isGroupMember, setIsGroupMember] = useState(false);
    return (
        <SignupPageWrapper>
            <Global />
            <TopBar>
                <BackBTN onClick={() => navigate("/register")} />
                <TopBarText>회원가입</TopBarText>
            </TopBar>
            <FillContainer>
                <ChoiceContainer>
                    <MakeGroup
                        isGroupMember={isGroupMember}
                        onClick={() => setIsGroupMember(false)}
                    >
                        새 그룹 생성
                    </MakeGroup>
                    <StartGroupMember
                        isGroupMember={isGroupMember}
                        onClick={() => setIsGroupMember(true)}
                    >
                        그룹원 되기
                    </StartGroupMember>
                </ChoiceContainer>
                {isGroupMember ? (
                    <EnterInformation>
                        <Nameinput placeholder="&nbsp;이름" />
                        <IDinput placeholder="&nbsp; 아이디 (영문,숫자 조합 8~15자)" />
                        <PWinput
                            placeholder="&nbsp; 비밀번호 (영문,숫자 조합 8~16자)"
                            type="password"
                        />
                        <PWCheckinput
                            placeholder="&nbsp; 비밀번호 확인"
                            type="password"
                        />
                        <GroupName placeholder="&nbsp; 그룹 코드를 붙여 넣으세요" />
                    </EnterInformation>
                ) : (
                    <MakeGroupWrapper>
                        <Notification>
                            {`* 1인 당 그룹 1개 생성 또는 참여 가능하며, 
          그룹 당 최대 수용 가능한 그룹원은 4명 입니다.`}
                        </Notification>
                        <EnterInformation>
                            <Nameinput placeholder="&nbsp;이름" />
                            <IDinput placeholder="&nbsp; 아이디 (영문,숫자 조합 8~15자)" />
                            <PWinput
                                placeholder="&nbsp; 비밀번호 (영문,숫자 조합 8~16자)"
                                type="password"
                            />
                            <PWCheckinput
                                placeholder="&nbsp; 비밀번호 확인"
                                type="password"
                            />
                            <GroupName placeholder="&nbsp; 그룹명을 작성해주세요" />
                        </EnterInformation>
                    </MakeGroupWrapper>
                )}

                <ConfirmationContainer>
                    <CheckboxLabel>
                        <Checkbox />
                        (필수) 서비스 이용약관에 동의
                    </CheckboxLabel>
                    <CheckboxLabel>
                        <Checkbox />
                        (필수) 개인정보 수집이용에 동의
                    </CheckboxLabel>
                </ConfirmationContainer>
            </FillContainer>
            <SignupBTNWrapper>
                <SignupBTN>회원가입</SignupBTN>
            </SignupBTNWrapper>
        </SignupPageWrapper>
    );
};

export default SignupPage;
