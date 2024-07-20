import styled from "styled-components";
import TopBarWithBack from "../components/TopBarWithBack";
import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";

const ChangeNamePage = () => {
    const [name, setName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleChangeName = (e) => {
        e.preventDefault();
        if (name.trim()) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ChangeNameWrapper>
            <TopBarWithBack text="이름 변경" />
            <form onSubmit={handleChangeName}>
                <ChangeNameInput
                    value={name}
                    onChange={handleNameChange}
                    placeholder="이름"
                    required
                />
                <CheckBTN type="submit">변경하기</CheckBTN>
            </form>
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Change Name"
            >
                정상적으로
                <br />
                변경 되었습니다.
            </ModalComponent>
        </ChangeNameWrapper>
    );
};

export default ChangeNamePage;

const ChangeNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ChangeNameInput = styled.input`
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
