import client from '.';
import axios from 'axios';
import { getMemberInfo } from './member';

export const getPlaces = async (themeId) => {
    //작동 ok
    try {
        const encodedThemeId = encodeURIComponent(themeId);
        const res = await client.get(`/place/${encodedThemeId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getLikedPlaces = async (placeId) => {
    try {
        const res = await client.get(`/place/liked`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        return res.data.places.some((place) => place.placeId === placeId);
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
        const res = await client.post(`/wishlist`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deleteHeart = async (data) => {
    try {
        const res = await client.delete(`/wishlist`, {
            data: data,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getGroupHeart = async (placeId) => {
    try {
        const memberInfo = await getMemberInfo();

        const groupId = memberInfo.group.groupId;
        const res = await client.get(`/wishlist/${placeId}/${groupId}`);

        if (res.data.memberId === '') {
            return [];
        }
        const resArray = res.data.memberId
            .trim()
            .split(' ')
            .map(Number)
            .filter((num) => !isNaN(num));

        return resArray;
    } catch (err) {
        console.log(err);
    }
};
