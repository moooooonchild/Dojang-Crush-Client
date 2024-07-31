import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Redirection = () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_SERVER_URL;

        const fetchToken = async () => {
            let response = null;
            try {
                console.log('요청 URL:', `${apiUrl}/oauth2/authorize`);
                console.log('요청 파라미터:', { code });
                const response = await axios.get(`${apiUrl}/oauth2/authorize`, {
                    params: { code }, // 쿼리 파라미터로 코드 전달
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('응답 데이터:', response.data);
            } catch (error) {
                console.error('로그인 실패:', error);

                // 400 오류에 대한 추가 처리
                if (error.response && error.response.status === 400) {
                    alert('잘못된 요청입니다. 다시 시도해주세요.');
                } else {
                    alert('로그인에 실패했습니다. 다시 시도해주세요.');
                }
                return;
            }

            if (response && response.status === 200 && response.data) {
                const token = response.data; // 토큰 추출
                const pureToken = token.replace('Bearer ', '');
                localStorage.setItem('token', pureToken);
                console.log('로그인 성공, 토큰 저장:', pureToken);

                // 로그인이 성공하면 /signup 페이지로 리다이렉트
                navigate('/signup');
            } else {
                console.error('잘못된 응답 형식');
                alert('로그인에 실패했습니다. 다시 시도해주세요.');
            }
        };

        if (code) {
            fetchToken();
        } else {
            console.error('OAuth 인가 코드가 없습니다.');
            alert('로그인에 실패했습니다. 인가 코드가 없습니다.');
        }
    }, [code, navigate]);
    return <div>로그인 중입니다.</div>;
};
export default Redirection;
