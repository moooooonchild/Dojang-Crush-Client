import React, { useState, useRef } from "react";
import styled from "styled-components";
import TopBarWithBack from "../components/TopBarWithBack";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PersonUI } from "../assets/ui/person.svg";
import { ReactComponent as EditIcon } from "../assets/ui/editicon.svg";
import { XModalComponent } from "../components/ModalComponent";
const SettingPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

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

    return (
        <SettingPageWrapper>
            <TopBarWithBack text="Settings" />
            <ProfileImageWrapper>
                {profileImage ? (
                    <ProfileImage src={profileImage} alt="Group Member" />
                ) : (
                    <PersonSVG />
                )}
            </ProfileImageWrapper>
            <ProfileImgEdit onClick={triggerFileInput}>
                프로필 사진 변경
            </ProfileImgEdit>
            <FileInput
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleProfileImageChange}
                style={{ display: "none" }}
            />
            <UserNameWrapper>
                <UserName>
                    이름
                    <UserNameEditBTN onClick={() => navigate("/changename")}>
                        <UserNameEdit />
                    </UserNameEditBTN>
                </UserName>
            </UserNameWrapper>
            <SettingBTNContainer>
                <ChangeIDPWBTN onClick={() => navigate("/changeidpw")}>
                    아이디/비번 변경
                </ChangeIDPWBTN>
                <ChangeGroupNameBTN
                    onClick={() => navigate("/changegroupname")}
                >
                    그룹명 변경
                </ChangeGroupNameBTN>
                <CopyInvitationCodeBTN onClick={openModal}>
                    그룹 초대 코드 복사하기
                </CopyInvitationCodeBTN>
                <WithdrawalBTN onClick={() => navigate("/withdrawal")}>
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
    background-color: #e8d6cf;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: 2.5rem;
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
    font-size: 3.5rem;
    font-weight: bold;
`;

const UserNameEditBTN = styled.button`
    background-color: inherit;
    border: none;
    margin-top: 0.8vh;
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
    font-size: 2.5rem;
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
    font-size: 2.5rem;
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
    font-size: 2.5rem;
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
    font-size: 2.5rem;
    font-weight: bold;
    &:hover {
        background-color: #c48a7a;
    }
`;
