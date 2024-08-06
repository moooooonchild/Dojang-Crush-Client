import axios from 'axios';
import client from '.';

const apiUrl = process.env.REACT_APP_SERVER_URL;

export const makeGroupapi = async (name) => {
    const data = { groupName: name };
    try {
        console.log(
            '현재 axios 인스턴스의 Authorization 헤더:',
            client.defaults.headers.common['Authorization']
        );

        const response = await client.post(`/group`, data);

        return response.data;
    } catch (error) {
        console.error(error.response?.data || error.message);
        throw new Error('그룹 생성에 실패했습니다.');
    }
};

export const addGroupMember = async (groupcode) => {
    try {
        const response = await client.patch(`/group`, {
            groupCode: groupcode,
        });
        return response.data;
    } catch (error) {
        throw new Error('그룹원 추가에 실패했습니다');
    }
};

export const getGroupMember = async (groupId) => {
    try {
        const response = await axios.get(`${apiUrl}/group/${groupId}`);
        return response.data;
    } catch (error) {
        throw new Error('그룹원 조회에 실패했습니다.');
    }
};

export const getMember = async () => {
    try {
        const response = await client.get(`${apiUrl}/members`);
        return response.data;
    } catch (error) {
        throw new Error('ㅇㅇㅇ');
    }
};

export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};
