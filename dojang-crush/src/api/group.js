import client from '.';
import { getMemberInfo } from './member';

export const getGroupInfo = async () => {
    try {
        const memberInfo = await getMemberInfo();

        const groupId = memberInfo.group.groupId;
        const res = await client.get(`/group/${groupId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        return res.data.member;
    } catch (err) {
        console.log(err);
    }
};
