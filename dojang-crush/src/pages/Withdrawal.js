import React, { useState } from "react";
import styled from "styled-components";
import TopBarWithBack from "../components/TopBarWithBack";
import { ModalComponent } from "../components/ModalComponent";
import { useNavigate } from "react-router-dom";

const WithdrawalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <WithdrawalWrapper>
            <form onSubmit={handleSubmit}>
                <TopBarWithBack text="회원 탈퇴" />
                <PWInput placeholder="비밀번호를 입력해주세요." required />
                <CheckBTN type="submit">탈퇴하기</CheckBTN>
            </form>
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Withdrawal"
                buttonText="확인"
                buttonAction={() => navigate("/register")}
            >
                정상적으로
                <br />
                탈퇴 되었습니다.
            </ModalComponent>
        </WithdrawalWrapper>
    );
};

export default WithdrawalPage;

const WithdrawalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const PWInput = styled.input`
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

const CheckBTN = styled.button`
    display: flex;
    justify-content: center;
    width: 90vw;
    margin-top: 3vh;
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
