import React, { useState } from "react";
import styled from "styled-components";
import TopBarWithBack from "../components/TopBarWithBack";
import ModalComponent from "../components/ModalComponent";

const ChangeIDPWPage = () => {
    const [userID, setUserID] = useState("");
    const [userPW, setUserPW] = useState("");
    const [userPWConfirm, setUserPWConfirm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChangeID = (e) => setUserID(e.target.value);
    const handleChangePW = (e) => setUserPW(e.target.value);
    const handleChangePWConfirm = (e) => setUserPWConfirm(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPW !== userPWConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
        } else if (userID.length > 15 || userPW.length > 15)
            alert("아이디/비밀번호는 최대 15자 이하이어야 합니다.");
        else if (userID.length < 8 || userPW.length < 8)
            alert("아이디/비밀번호는는 최소 8자 이상이어야 합니다.");
        else {
            setIsModalOpen(true);
        }
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <ChangeNameWrapper>
            <TopBarWithBack text="아이디/비번 변경" />
            <form onSubmit={handleSubmit}>
                <ChangeIDPWContainer>
                    <ChangeIDInput
                        name="userID"
                        placeholder="아이디 (영문,숫자 조합 8~15자)"
                        onChange={handleChangeID}
                        required
                    />
                    <ChangePWInput
                        name="userPW"
                        placeholder="비밀번호 (영문,숫자 조합 8~16자)"
                        onChange={handleChangePW}
                        required
                    />
                    <ChangePWInput
                        name="userPW"
                        placeholder="비밀번호 확인"
                        onChange={handleChangePWConfirm}
                        required
                    />
                    <CheckBTN>변경하기</CheckBTN>
                </ChangeIDPWContainer>
            </form>
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Change ID/PW"
            >
                정상적으로 <br /> 변경되었습니다.
            </ModalComponent>
        </ChangeNameWrapper>
    );
};

export default ChangeIDPWPage;

const ChangeNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ChangeIDPWContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    gap: 3vh;
`;

const ChangeIDInput = styled.input`
    display: flex;
    justify-content: center;
    width: 90vw;

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

const ChangePWInput = styled.input`
    display: flex;
    justify-content: center;
    width: 90vw;

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

const CheckBTN = styled.button`
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
