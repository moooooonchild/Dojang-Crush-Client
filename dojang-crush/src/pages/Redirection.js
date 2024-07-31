import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Redirection = () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_SERVER_URL;
        console.log("API URL:", apiUrl);
        axios
            .get(`${apiUrl}/oauth2/authorize?code=${code}`)
            .then((response) => {
                console.log(response.data);

                // 로그인이 성공하면 /signup 페이지로 리다이렉트
                navigate("/signup");
            })
            .catch((error) => {
                console.error("로그인 실패:", error);
            });
    }, [code, navigate]);
    return <div>로그인 중입니다.</div>;
};
export default Redirection;
