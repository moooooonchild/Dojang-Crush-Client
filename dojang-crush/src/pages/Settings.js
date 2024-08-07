import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import TopBarWithBack from '../components/TopBarWithBack';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as PersonUI } from '../assets/ui/person.svg';
import { ReactComponent as EditIcon } from '../assets/ui/editicon.svg';
import { XModalComponent } from '../components/ModalComponent';
import { getMemberInfo } from '../api/member';
import { getGroupMember } from '../api/group';

const SettingPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (window.Kakao) {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
                console.log('카카오 SDK 초기화 완료');
            }
        } else {
            console.error('카카오 SDK를 불러올 수 없습니다.');
        }
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const [userInfo, setUserInfo] = useState(null);
    const [isLeader, setIsLeader] = useState(false);
    const [groupId, setGroupId] = useState(null);
    const [groupLeader, setGroupLeader] = useState(null);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const userInfo = await getMemberInfo();

                setUserInfo(userInfo);
                setGroupId(userInfo.group.groupId);
                console.log('그룹 아이디: ', groupId);
                console.log('사용자 정보:', userInfo);
            } catch (err) {
                console.error('사용자 정보를 가져오는 데 실패했습니다:', err);
            }
        };
        getUserInfo();
    }, []);

    useEffect(() => {
        const fetchGroupMembers = async () => {
            try {
                const data = await getGroupMember(groupId);
                console.log('그룹 데이터:', data);
                //그룹리더
                const leader = data.member.find((member) => member.leader);
                setGroupLeader(leader);

                if (leader && leader.userId === userInfo.userId) {
                    setIsLeader(true);
                } else setIsLeader(true);
            } catch (error) {
                console.error('그룹원 조회에 실패했습니다', error);
            }
        };
        fetchGroupMembers();
    }, [groupId, userInfo]);

    //카카오 로그아웃
    const kakaoLogout = () => {
        if (window.Kakao) {
            window.Kakao.Auth.logout(() => {
                alert('로그아웃 되었습니다');
                navigate('/register');
            });
        } else {
            console.error('카카오 SDK 불러오기 오류');
        }
    };

    return (
        <SettingPageWrapper>
            <TopBarWithBack text="Settings" />
            <ProfileImageWrapper>
                {userInfo && userInfo.profileImageUrl ? (
                    <ProfileImage
                        src={userInfo.profileImageUrl}
                        alt="Group Member"
                    />
                ) : (
                    <PersonSVG />
                )}
            </ProfileImageWrapper>
            {/*<ProfileImgEdit onClick={triggerFileInput}>
                프로필 사진 변경
            </ProfileImgEdit>*/}
            <FileInput
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleProfileImageChange}
                style={{ display: 'none' }}
            />
            <UserNameWrapper>
                {userInfo ? (
                    <UserName>
                        {userInfo.name}
                        {/* <UserNameEditBTN
                            onClick={() => navigate('/changename')}
                        >
                            <UserNameEdit />
                        </UserNameEditBTN>*/}
                    </UserName>
                ) : (
                    <UserName>Loading...</UserName>
                )}
            </UserNameWrapper>
            <SettingBTNContainer>
                <ChangeIDPWBTN onClick={() => navigate('/changeidpw')}>
                    아이디/비번 변경
                </ChangeIDPWBTN>
                {isLeader ? (
                    <ChangeGroupNameBTN
                        onClick={() => navigate('/changegroupname')}
                    >
                        그룹명 변경
                    </ChangeGroupNameBTN>
                ) : (
                    <></>
                )}

                <CopyInvitationCodeBTN onClick={openModal}>
                    그룹 초대 코드 복사하기
                </CopyInvitationCodeBTN>
                <WithdrawalBTN onClick={kakaoLogout}>로그아웃</WithdrawalBTN>
                <WithdrawalBTN onClick={() => navigate('/withdrawal')}>
                    회원 탈퇴
                </WithdrawalBTN>
            </SettingBTNContainer>
            <XModalComponent
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Invite Code"
            ></XModalComponent>
        </SettingPageWrapper>
    );
};

export default SettingPage;

const SettingPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileImageWrapper = styled.div`
    width: 50vw;
    height: 50vw;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10%;
`;

const PersonSVG = styled(PersonUI)`
    width: 50vw;
    height: auto;
`;

const ProfileImgEdit = styled.button`
    margin-top: 2vh;
    padding: 1.5vw;
    background-color: #e8d6cf;
    border: none;
    border-radius: 40px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #ffefe9;
    }
`;

const FileInput = styled.input`
    display: none;
`;

const UserNameWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2.5vh;
`;

const UserName = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    font-weight: bold;
`;

const UserNameEditBTN = styled.button`
    background-color: inherit;
    border: none;
    margin-top: 0.2vh;
    margin-left: 1vw;
    position: absolute;
    cursor: pointer;
`;

const UserNameEdit = styled(EditIcon)`
    width: 4vw;
    height: auto;
`;

const SettingBTNContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4vh;
    gap: 3vh;
`;

const ChangeIDPWBTN = styled.button`
    display: flex;
    justify-content: center;
    width: 90vw;
    padding: 1vh 0vh;
    border: none;
    border-radius: 4px;
    background-color: #dba290;
    color: #612d1c;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        background-color: #c48a7a;
    }
`;

const ChangeGroupNameBTN = styled.button`
    display: flex;
    justify-content: center;
    width: 90vw;
    padding: 1vh 0vh;
    border: none;
    border-radius: 4px;
    background-color: #dba290;
    color: #612d1c;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        background-color: #c48a7a;
    }
`;

const CopyInvitationCodeBTN = styled.button`
    display: flex;
    justify-content: center;
    width: 90vw;
    padding: 1vh 0vh;
    border: none;
    border-radius: 4px;
    background-color: #dba290;
    color: #612d1c;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        background-color: #c48a7a;
    }
`;

const WithdrawalBTN = styled.button`
    display: flex;
    justify-content: center;
    width: 90vw;
    padding: 1vh 0vh;
    border: none;
    border-radius: 4px;
    background-color: #dba290;
    color: #612d1c;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        background-color: #c48a7a;
    }
`;
