import client from '.';
import { getPlaces, getGroupHeart } from './place';

export const getHeartListForTheme = async (themeId) => {
    try {
        const places = await getPlaces(themeId).then((res) => {
            return res.places;
        });
        console.log('테마 장소 리스트', places);
        console.log(Array.isArray(places));

        const filterPlaces = async (place) => {
            const res = await getGroupHeart(place.placeId);
            console.log(place.placeId, res, res.length > 0);
            return res.length > 0;
        };

        const filterResults = await Promise.all(
            places.map(async (place) => ({
                place,
                isHeart: await filterPlaces(place),
            }))
        );

        const filteredList = filterResults
            .filter((item) => item.isHeart)
            .map((item) => item.place);
        console.log('필터링된 리스트', filteredList);
        return filteredList;
    } catch (err) {
        console.log(err);
    }
};
