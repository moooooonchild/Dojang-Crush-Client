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
