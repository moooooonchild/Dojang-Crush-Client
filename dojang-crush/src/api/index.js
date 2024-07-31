import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true,
});

const token = localStorage.getItem("token");
console.log("현재 로컬스토리지 토큰", token);
/*
if (token) {
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(
        "현재 axios instance 헤더 토큰",
        client.defaults.headers.common["Authorization"]
    );
} else {
    console.log("토큰이 없습니다.");
}

*/

client.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : null;

export default client;
