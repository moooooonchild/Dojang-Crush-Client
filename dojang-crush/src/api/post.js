import client from ".";

export const getAllPosts = async (groupId) => {
    try {
        const res = client.get(`/posts/${groupId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deletePosts = async (postId) => {
    try {
        const res = client.delete(`/posts/all/${postId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const postHeart = async (postId) => {
    try {
        const res = client.post(`/posts/${postId}/like`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deleteHeart = async (postId) => {
    try {
        const res = client.delete(`/posts/${postId}/like`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
