import client from '.';

export const postComments = async (postId, data) => {
    try {
        const res = await client.post(`/comments/${postId}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

export const getComments = async (postId) => {
    // 작동 ok
    try {
        const res = await client.get(`/comments/${postId}`);
        console.log(res);
        return res.data.commentList;
    } catch (err) {
        console.log(err);
    }
};

export const deleteComments = async (commentId) => {
    try {
        const res = await client.delete(`/comments/${commentId}`);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

export const patchComments = async (commentId, data) => {
    //NOTE - userId 필요??
    try {
        const res = await client.patch(`/comments/${commentId}`, data);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
