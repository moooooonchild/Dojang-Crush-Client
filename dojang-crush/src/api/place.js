import client from ".";

export const getPlaces = async (themeId) => {
    //작동 ok
    try {
        const encodedThemeId = encodeURIComponent(themeId);
        const res = await client.get(`/place/${encodedThemeId}`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getLikedPlaces = async () => {
    try {
        const res = await client.get(`/place/liked`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getLikedPlacesForTheme = async (themeId) => {
    try {
        const encodedThemeId = encodeURIComponent(themeId);
        const res = await client.get(`/place/liked/${encodedThemeId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getAllPlaces = async () => {
    try {
        const res = await client.get(`/place`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const postHeart = async (data) => {
    //NOTE - url 백 작업 후 다시 확인
    try {
        const res = await client.post(`/wishlist`, data);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deleteHeart = async (memberId) => {
    //NOTE - url 백 작업 후 다시 확인
    try {
        const res = await client.delete(`/wishlist`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
