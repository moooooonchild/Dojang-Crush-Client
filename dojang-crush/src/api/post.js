import client from ".";

export const getAllPosts = async (groupId) => {
    try {
        const res = client.get(`posts/all/${groupId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deletePost = async (postId) => {
    try {
        const res = client.delete(`posts/${postId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
