import client from '.';

export const getMemberInfo = async () => {
    try {
        const res = await client.get(`/members`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        //console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const deleteMember = async () => {
    try {
        const response = await client.delete('/members');
        return response.data;
    } catch (error) {
        console.error('회원탈퇴 실패', error);
        throw new Error('회원탈퇴에 실패했습니다.');
    }
};
