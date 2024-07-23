import axios from "axios";

const apiUrl = process.env.REACT_APP_SERVER_URL;

export const makeGroupapi = async (name, groupImageUrl) => {
    try {
        const response = await axios.post(`${apiUrl}/group`, {
            name: name,
            groupImageUrl: groupImageUrl,
        });

        return response.data;
    } catch (error) {
        throw new Error("그룹 생성에 실패했습니다.");
    }
};

export const addGroupMember = async (groupcode) => {
    try {
        const response = await axios.patch(`${apiUrl}/group`, {
            groupcode: groupcode,
        });
        return response.data;
    } catch (error) {
        throw new Error("그룹원 추가에 실패했습니다");
    }
};

export const getGroupMember = async (groupId) => {
    try {
        const response = await axios.get(`${apiUrl}/group/${groupId}`);
        return response.data;
    } catch (error) {
        throw new Error("그룹원 조회에 실패했습니다.");
    }
};
