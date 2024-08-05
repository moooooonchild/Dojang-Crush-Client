import client from '.';

export const postPost = async (data, images) => {
    try {
        const formData = new FormData();
        formData.append('content', data.content);
        formData.append('placeId', data.placeId);
        formData.append('groupId', data.groupId);
        formData.append('visitedDate', data.visitedDate);
        images.forEach((image) => {
            if (image instanceof File && image.size > 0)
                formData.append(`images`, image);
        });

        console.log(...formData);
        const res = await client.post(`/posts`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const patchPost = async (postId, data) => {
    try {
        const formData = new FormData();
        formData.append('content', data.content);
        formData.append('placeId', data.placeId);
        formData.append('groupId', data.groupId);
        formData.append('visitedDate', data.visitedDate);
        const res = await client.patch(`/posts/${postId}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

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
        const res = await client.delete(`/posts/${postId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
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
