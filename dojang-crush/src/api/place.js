import client from ".";

export const getPlaces = async (themeId) => {
    try {
        const res = client.get(`/place/${themeId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getLikedPlaces = async () => {
    try {
        const res = client.get(`/place/liked`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getLikedPlacesForTheme = async (themeId) => {
    try {
        const res = client.get(`/place/liked/${themeId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getAllPlaces = async () => {
    try {
        const res = client.get(`/place`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
