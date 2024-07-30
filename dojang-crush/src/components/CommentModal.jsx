import * as S from './styles/commentModal.styles';
import { useEffect, useRef } from 'react';

import profileImg from '../assets/ui/defaultProfile.png';

const CommentModal = ({ isOpen, modalHandler }) => {
    const containerRef = useRef(null);
    const initialHeightRef = useRef(window.innerHeight);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
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
                containerRef.current.style.bottom = '0';
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <S.Background
            style={{ display: isOpen ? 'flex' : 'none' }}
            onClick={modalHandler}
        >
            <S.Container
                ref={containerRef}
                onClick={(e) => e.stopPropagation()}
            >
                <S.Comment>
                    <S.ProfImg src={profileImg} />
                    <S.CommentArea>
                        <S.Name>Userid</S.Name>
                        <S.CommentTime>1분 전</S.CommentTime>
                        <S.Text>
                            나의 밤이 또 가기 전에 내게 말을 걸어줘 이 머문
                            손길에 이제 나를 가득 담고서 너의 밤이 어떤 의미를
                            갖는지도 내게 말해줘 그 말의 무게를 내가 느낄 수가
                            있도록
                        </S.Text>
                    </S.CommentArea>
                </S.Comment>
                <S.Comment>
                    <S.ProfImg src={profileImg} />
                    <S.CommentArea>
                        <S.Name>Userid</S.Name>
                        <S.CommentTime>1분 전</S.CommentTime>
                        <S.Text>
                            나의 밤이 또 가기 전에 내게 말을 걸어줘 이 머문
                            손길에 이제 나를 가득 담고서 너의 밤이 어떤 의미를
                            갖는지도 내게 말해줘 그 말의 무게를 내가 느낄 수가
                            있도록
                        </S.Text>
                    </S.CommentArea>
                </S.Comment>
                <S.Comment>
                    <S.ProfImg src={profileImg} />
                    <S.CommentArea>
                        <S.Name>Userid</S.Name>
                        <S.CommentTime>1분 전</S.CommentTime>
                        <S.Text>
                            나의 밤이 또 가기 전에 내게 말을 걸어줘 이 머문
                            손길에 이제 나를 가득 담고서 너의 밤이 어떤 의미를
                            갖는지도 내게 말해줘 그 말의 무게를 내가 느낄 수가
                            있도록
                        </S.Text>
                    </S.CommentArea>
                </S.Comment>
                <S.CommentWrite>
                    <S.TextArea />
                    <S.SendBtn />
                </S.CommentWrite>
            </S.Container>
        </S.Background>
    );
};

export default CommentModal;
