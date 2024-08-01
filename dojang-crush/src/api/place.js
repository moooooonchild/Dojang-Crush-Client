import client from '.';

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

        //return res.data.places.some((place) => place.placeId === placeId);
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
    try {
        const res = await client.post(`/wishlist`, data);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deleteHeart = async (data) => {
    try {
        const res = await client.delete(`/wishlist`, { data });
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getGroupHeart = async (placeId, groupId) => {
    try {
        const res = await client.get(`/wishlist/${placeId}/${groupId}`);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
