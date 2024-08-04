import client from '.';
import { getPlaces, getGroupHeart } from './place';
import { getGroupInfo } from './group';

export const getHeartListForTheme = async (themeId) => {
    try {
        const places = await getPlaces(themeId).then((res) => {
            return res.places;
        }); //테마 장소 리스트 받아옴

        const filterPlaces = async (place) => {
            const res = await getGroupHeart(place.placeId);

            return res.length > 0;
        }; //해당 장소에 하트찍은 멤버 있는지 확인

        const filterResults = await Promise.all(
            places.map(async (place) => ({
                place,
                isHeart: await filterPlaces(place),
            }))
        ); //장소에 하트 찍었는지 안찍었는지 확인

        const filteredList = filterResults
            .filter((item) => item.isHeart)
            .map((item) => item.place);
        //하트찍은 장소만 리턴

        return filteredList;
    } catch (err) {
        console.log(err);
    }
};

export const getNameFromId = async (id) => {
    try {
        const members = await getGroupInfo();
        const item = members.find((e) => e.memberId === id);
        return item ? item.name : null;
    } catch (err) {
        console.err(err);
    }
};
