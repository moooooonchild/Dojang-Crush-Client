import client from ".";

export const getAllPosts = async (groupId) => {
    try {
        const res = await client.get(`/posts/${groupId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getPostDetail = async (postId) => {
    //작동 ok
    try {
        const res = await client.get(`/posts/${postId}`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const deletePost = async (postId) => {
    try {
        const res = await client.delete(`/posts/all/${postId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const postHeart = async (postId) => {
    try {
        const res = await client.post(`/posts/${postId}/like`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deleteHeart = async (postId) => {
    try {
        const res = await client.delete(`/posts/${postId}/like`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
