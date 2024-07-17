import React, { useState } from "react";
import styled from "styled-components";
import TopBarWithBack from "../components/TopBarWithBack";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PersonUI } from "../assets/ui/person.svg";
import { ReactComponent as EditIcon } from "../assets/ui/editicon.svg";
import ModalComponent from "../components/ModalComponent";

const SettingPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <SettingPageWrapper>
            <TopBarWithBack text="Settings" />
            <GroupMember />
            <ProfileImgEdit>프로필 사진 변경</ProfileImgEdit>
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
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Invite Code"
            ></ModalComponent>
        </SettingPageWrapper>
    );
};

export default SettingPage;

const SettingPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GroupMember = styled(PersonUI)`
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
