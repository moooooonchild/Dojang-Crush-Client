import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import TopBarWithBack from '../components/TopBarWithBack';
import { ReactComponent as UploadButton } from '../assets/ui/photo_upload.svg';
import { makeGroupapi, addGroupMember, getMember } from '../api/group';
import { useNavigate } from 'react-router-dom';

const checkboxsvgString = `
<svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M13.7143 1.71429C14.0286 1.71429 14.2857 1.97143 14.2857 2.28571V13.7143C14.2857 14.0286 14.0286 14.2857 13.7143 14.2857H2.28571C1.97143 14.2857 1.71429 14.0286 1.71429 13.7143V2.28571C1.71429 1.97143 1.97143 1.71429 2.28571 1.71429H13.7143ZM2.28571 0C1.025 0 0 1.025 0 2.28571V13.7143C0 14.975 1.025 16 2.28571 16H13.7143C14.975 16 16 14.975 16 13.7143V2.28571C16 1.025 14.975 0 13.7143 0H2.28571Z" fill="black"/>
</svg>`;

const svgString = `
<svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M2.28571 1.71429C1.97143 1.71429 1.71429 1.97143 1.71429 2.28571V13.7143C1.71429 14.0286 1.97143 14.2857 2.28571 14.2857H13.7143C14.0286 14.2857 14.2857 14.0286 14.2857 13.7143V2.28571C14.2857 1.97143 14.0286 1.71429 13.7143 1.71429H2.28571ZM0 2.28571C0 1.025 1.025 0 2.28571 0H13.7143C14.975 0 16 1.025 16 2.28571V13.7143C16 14.975 14.975 16 13.7143 16H2.28571C1.025 16 0 14.975 0 13.7143V2.28571ZM12.0357 6.32143L7.46429 10.8929C7.12857 11.2286 6.58571 11.2286 6.25357 10.8929L3.96786 8.60714C3.63214 8.27143 3.63214 7.72857 3.96786 7.39643C4.30357 7.06429 4.84643 7.06071 5.17857 7.39643L6.85714 9.075L10.8214 5.10714C11.1571 4.77143 11.7 4.77143 12.0321 5.10714C12.3643 5.44286 12.3679 5.98571 12.0321 6.31786L12.0357 6.32143Z" fill="black"/>
</svg>
`;

const encodedCheckboxSvgString = `data:image/svg+xml;base64,${btoa(
    checkboxsvgString
)}`;
const encodedSvgString = `data:image/svg+xml;base64,${btoa(svgString)}`;

const SignupPage = () => {
    const [name, setName] = useState('');
    const [groupImageUrl, setGroupImageUrl] = useState('');
    const [groupcode, setGroupcode] = useState('');

    const handleGroupName = (e) => setName(e.target.value);
    const handleGroupImageUrl = (e) => setGroupImageUrl(e.target.value);
    const handleGroupcode = (e) => setGroupcode(e.target.value);
    const navigate = useNavigate();

    const [isGroupMember, setIsGroupMember] = useState(false);
    const [iscolor, setiscolor] = useState(false);
    const [groupImage, setGroupImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isGroupMember) {
            try {
                const data = await makeGroupapi(name, groupImageUrl);
                console.log(data);
                alert('그룹 생성이 완료되었습니다!');
                navigate('/');
            } catch (error) {
                console.error(error.message);
                alert('그룹 생성에 실패했습니다.');
            }
        } else {
            try {
                const data = await addGroupMember(groupcode);
                console.log(data);
                alert('그룹에 가입하였습니다!');
                navigate('/');
            } catch (error) {
                console.error(error.message);
                alert('그룹 가입에 실패했습니다');
            }
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setGroupImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <SignupPageWrapper>
            <button onClick={() => console.log(getMember())}>클릭</button>
            <TopBarWithBack text={' '} />
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                }}
                method="POST"
                onSubmit={handleSubmit}
            >
                <FillContainer>
                    <ChoiceContainer>
                        <MakeGroup
                            iscolor={isGroupMember}
                            onClick={() => setIsGroupMember(false)}
                        >
                            새 그룹 생성
                        </MakeGroup>
                        <StartGroupMember
                            iscolor={isGroupMember}
                            onClick={() => setIsGroupMember(true)}
                        >
                            그룹원 되기
                        </StartGroupMember>
                    </ChoiceContainer>

                    {isGroupMember ? (
                        <EnterInformation>
                            <GroupNameinput
                                placeholder="그룹 코드를 붙여 넣으세요"
                                required
                                onChange={handleGroupcode}
                            />
                        </EnterInformation>
                    ) : (
                        <MakeGroupWrapper>
                            <Notification>
                                {`* 1인 당 그룹 1개 생성 또는 참여 가능하며, 
          그룹 당 최대 수용 가능한 그룹원은 4명 입니다.`}
                            </Notification>
                            <EnterInformation>
                                <GroupNameinput
                                    placeholder="그룹명을 작성해주세요"
                                    required
                                    onChange={handleGroupName}
                                />
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
                    <SignupBTN type="submit">
                        {isGroupMember ? '그룹원 되기' : '그룹 생성하기'}
                    </SignupBTN>
                </SignupBTNWrapper>
            </form>
        </SignupPageWrapper>
    );
};

export default SignupPage;

const SignupPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 5vh;
    width: 44vw;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => (props.iscolor ? '#e8c1b8' : '#dba290')};
    font-size: 2rem;
    color: ${(props) => (props.iscolor ? '#ffffff' : '#000000')};
    cursor: pointer;
    &:hover {
        background-color: ${(props) => (props.iscolor ? '#c38776' : 'none')};
    }
`;

const StartGroupMember = styled.button`
    height: 5vh;
    width: 44vw;
    border: none;
    border-radius: 4px;
    background-color: ${(props) => (props.iscolor ? '#dba290' : '#e8c1b8')};
    font-size: 2rem;
    color: ${(props) => (props.iscolor ? '#000000' : '#ffffff')};
    cursor: pointer;
    &:hover {
        background-color: ${(props) => (props.iscolor ? 'none' : '#c38776')};
    }
`;
// 입력
const MakeGroupWrapper = styled.div``;

const Notification = styled.div`
    width: 90vw;
    margin-top: 2vh;
    margin-left: 1vw;
    font-size: 2rem;
    white-space: pre-line;
`;

const EnterInformation = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin-top: 2vh;
    gap: 1.5vh;
`;

const GroupNameinput = styled.input`
    display: flex;
    justify-content: center;
    width: 90vw;
    margin-top: 2vh;
    padding: 1vh 1vh;
    border: none;
    border-radius: 4px;

    font-size: 2.5rem;
    font-weight: bold;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    &::placeholder {
        color: #dee2e6;
    }
`;

// 그룹 이미지
const GroupImageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    margin-top: 2vh;
`;

const GroupImageAddText = styled.div`
    font-size: 2rem;
`;
const GroupImageAddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 11vh;
    height: 11vh;
    cursor: pointer;
    &:hover {
        background-color: #f3e4e1;
    }
`;

const GroupImgageUpload = styled(UploadButton)`
    width: 10vh;
    height: 10vh;
`;

const IMGBox = styled.input`
    display: none;
`;

const GroupImagePreview = styled.img`
    width: 11vh;
    height: 11vh;
    border-radius: 0.5rem;
    object-fit: cover;
`;

//체크박스
const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    gap: 1vh;
`;
const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 1vh;
    font-size: 2rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 2vh;
    height: 2vh;
    margin-right: 1vw;
    margin-top: 0.4vh;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${encodedCheckboxSvgString});

    &:checked {
        border-color: transparent;
        background-image: url(${encodedSvgString});
    }
`;

//회원가입
const SignupBTNWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 2vh;
`;
const SignupBTN = styled.button`
    display: flex;
    justify-content: center;
    width: 90vw;
    margin-top: 3vh;
    padding: 1vh 0vh;
    border: none;
    border-radius: 4px;
    background-color: #9e8c85;
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
    &:hover {
        background-color: #8b7a73;
    }
`;
