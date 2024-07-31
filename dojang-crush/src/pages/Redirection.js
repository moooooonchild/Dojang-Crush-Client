import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Redirection = () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_SERVER_URL;

        const fetchToken = async () => {
            try {
                const response = await axios.get(`${apiUrl}/oauth2/authorize`, {
                    params: { code }, // 쿼리 파라미터로 코드 전달
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                console.log('응답 데이터:', response.data);

                if (response.data && response.data.data) {
                    const token = response.data.data;
                    console.log('응답 데이터:', response.data);
                    localStorage.setItem('token', token);
                    console.log('로그인 성공, 토큰 저장:', token);

                    // 로그인이 성공하면 /signup 페이지로 리다이렉트
                    navigate('/signup');
                    return;
                } else {
                    throw new Error('잘못된 응답 형식');
                }
            } catch (error) {
                console.error('로그인 실패:', error);
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
