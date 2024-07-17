import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { ReactComponent as CloseButtonSVG } from "../assets/ui/CloseButton.svg";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const ModalComponent = ({ isOpen, onRequestClose, contentLabel, children }) => {
    const navigate = useNavigate();
    const [inviteCode, setInviteCode] = useState("초대 코드");
    const handleCopyClick = () => {
        navigator.clipboard
            .writeText(inviteCode)
            .then(() => {
                alert("초대 코드가 복사되었습니다!");
                onRequestClose();
            })
            .catch((err) => {
                alert("복사에 실패했습니다.");
                console.error("복사 에러:", err);
            });
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                },
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "2rem",
                    borderRadius: "8px",
                },
            }}
        >
            {contentLabel === "Invite Code" ? (
                <InviteModalWrapper>
                    <CloseButtonWrapper>
                        <CloseButtonImage onClick={onRequestClose}>
                            X
                        </CloseButtonImage>
                    </CloseButtonWrapper>
                    <InviteCodeButtons>
                        <InviteCode>{inviteCode}</InviteCode>
                        <CopyButton onClick={handleCopyClick}>
                            복사하기
                        </CopyButton>
                    </InviteCodeButtons>
                </InviteModalWrapper>
            ) : (
                <ModalWrapper>
                    <ModalText>{children}</ModalText>
                    {contentLabel === "Sign Up" ? (
                        <CloseButton onClick={onRequestClose}>
                            뒤로가기
                        </CloseButton>
                    ) : contentLabel === "Withdrawal" ? (
                        <CloseButton onClick={() => navigate("/register")}>
                            완료
                        </CloseButton>
                    ) : (
                        <CloseButton onClick={() => navigate(-1)}>
                            완료
                        </CloseButton>
                    )}
                </ModalWrapper>
            )}
        </Modal>
    );
};

export default ModalComponent;

const InviteModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: 20vh;
    height: 22vh;
`;

const CloseButtonWrapper = styled.div`
    width: 100%;
    top: -2vh;
`;

const CloseButtonImage = styled(CloseButtonSVG)`
    cursor: pointer;
    width: 3vh;
    height: auto;
`;

const InviteCodeButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1vh;
`;

const InviteCode = styled.div`
    display: flex;
    justify-content: center;
    width: 18vh;
    padding: 1vh;
    border-radius: 5px;
    background: var(--612D1C, #612d1c);
    font-size: 2.5rem;
    color: #ffffff;
`;

const CopyButton = styled.button`
    width: 18vh;
    padding: 1vh;
    border: none;
    border-radius: 5px;
    background-color: inherit;
    font-size: 2.5rem;
    font-weight: bold;
    color: #612d1c;
`;

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vh;
    padding: 1vw;
    border-radius: 0px;
    gap: 2vh;
`;

const ModalText = styled.div`
    text-align: center;
    font-size: 1.5rem;
    white-space: pre-wrap;
    color: #612d1c;
`;

const CloseButton = styled.button`
    width: 15vw;
    padding: 2vw;
    font-size: 1.5rem;
    background-color: inherit;
    border: 1px solid #612d1c;
`;
