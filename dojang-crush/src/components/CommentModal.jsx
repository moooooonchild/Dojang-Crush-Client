import styled from "styled-components";
import { useEffect, useRef } from "react";

import profileImg from "../assets/ui/defaultProfile.png";
import sendImg from "../assets/ui/send.svg";

const CommentModal = ({ isOpen, modalHandler }) => {
    const containerRef = useRef(null);
    const initialHeightRef = useRef(window.innerHeight);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight < initialHeightRef.current) {
                // 키보드가 올라올 때
                const vhDiff = initialHeightRef.current - window.innerHeight;
                const vhValue = (vhDiff / window.innerHeight) * 100; // vh 단위로 계산

                containerRef.current.style.bottom = `${vhValue}vh`;
            } else {
                // 키보드가 내려갈 때
                containerRef.current.style.bottom = "0";
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Background
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={modalHandler}
        >
            <Container ref={containerRef} onClick={(e) => e.stopPropagation()}>
                <Comment>
                    <ProfImg src={profileImg} />
                    <CommentArea>
                        <Name>Userid</Name>
                        <CommentTime>1분 전</CommentTime>
                        <Text>
                            나의 밤이 또 가기 전에 내게 말을 걸어줘 이 머문
                            손길에 이제 나를 가득 담고서 너의 밤이 어떤 의미를
                            갖는지도 내게 말해줘 그 말의 무게를 내가 느낄 수가
                            있도록
                        </Text>
                    </CommentArea>
                </Comment>
                <Comment>
                    <ProfImg src={profileImg} />
                    <CommentArea>
                        <Name>Userid</Name>
                        <CommentTime>1분 전</CommentTime>
                        <Text>
                            나의 밤이 또 가기 전에 내게 말을 걸어줘 이 머문
                            손길에 이제 나를 가득 담고서 너의 밤이 어떤 의미를
                            갖는지도 내게 말해줘 그 말의 무게를 내가 느낄 수가
                            있도록
                        </Text>
                    </CommentArea>
                </Comment>
                <Comment>
                    <ProfImg src={profileImg} />
                    <CommentArea>
                        <Name>Userid</Name>
                        <CommentTime>1분 전</CommentTime>
                        <Text>
                            나의 밤이 또 가기 전에 내게 말을 걸어줘 이 머문
                            손길에 이제 나를 가득 담고서 너의 밤이 어떤 의미를
                            갖는지도 내게 말해줘 그 말의 무게를 내가 느낄 수가
                            있도록
                        </Text>
                    </CommentArea>
                </Comment>
                <CommentWrite>
                    <TextArea />
                    <SendBtn />
                </CommentWrite>
            </Container>
        </Background>
    );
};

export default CommentModal;

const Background = styled.div`
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    position: absolute;
    bottom: 0;
    z-index: 2;

    padding: 4vw;
    padding-bottom: 0;

    width: 100vw;
    height: 50vh;
    background-color: white;
    border-radius: 6vw 6vw 0 0;
`;

const Comment = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2vw;
`;

const CommentArea = styled.div``;

const ProfImg = styled.img`
    width: 8vw;
    margin-right: 2vw;
    align-self: baseline;
`;

const Name = styled.span`
    font-size: 2rem;
    font-weight: bold;
    margin-right: 10vw;
`;

const CommentTime = styled.span`
    font-size: 2rem;
`;

const Text = styled.div`
    font-size: 2rem;
`;

const CommentWrite = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    bottom: 0;

    padding-top: 2vw;
    padding-bottom: 4vw;
    background-color: white;
`;

const TextArea = styled.textarea`
    width: 84vw;
    height: 8vw;

    border-radius: 1vw;

    padding-top: 1.5vw;
    font-size: 2.5rem;
`;

const SendBtn = styled.button`
    width: 5vw;
    height: 5vw;

    background-color: inherit;
    background-image: url(${sendImg});
    background-size: cover;
    border: none;
`;
