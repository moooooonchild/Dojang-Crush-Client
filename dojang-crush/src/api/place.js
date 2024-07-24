import client from ".";

export const getPlaces = async (themeId) => {
    try {
        //const encodedThemeId = encodeURIComponent(themeId);
        //const res = client.get(`/place/${encodedThemeId}`);
        //console.log(res.data);
        //return(res.data);
        const res = {
            places: [
                {
                    placeId: 1,
                    theme: "힐링",
                    placeName: "경복궁",
                    address: "서울 종로구 사직로 161 (우)03045",
                    mapId: 18619553,
                },
                {
                    placeId: 2,
                    theme: "힐링",
                    placeName: "북촌한옥마을",
                    address: "서울 종로구 북촌로 53",
                    mapId: 781129546,
                },
                {
                    placeId: 3,
                    theme: "힐링",
                    placeName: "서울스카이",
                    address:
                        "서울 송파구 올림픽로 300 롯데월드타워 B1~B2층, 117~123층 (우)05551",
                    mapId: 680691609,
                },
                {
                    placeId: 6,
                    theme: "힐링",
                    placeName: "별마당 도서관",
                    address:
                        "서울 강남구 삼성동 159-9 스타필드 코엑스몰 지하1층",
                    mapId: 2104663194,
                },
                {
                    placeId: 12,
                    theme: "힐링",
                    placeName: "코엑스 아쿠아리움",
                    address: "서울 강남구 영동대로 513 지하 1층 (우)06164",
                    mapId: 12860036,
                },
                {
                    placeId: 13,
                    theme: "힐링",
                    placeName: "정독도서관",
                    address: "서울 종로구 북촌로5길 48 (우)03055",
                    mapId: 13028509,
                },
                {
                    placeId: 32,
                    theme: "힐링",
                    placeName: "더숲초소책방",
                    address: "서울 종로구 인왕산로 172 (우)03033",
                    mapId: 1693563906,
                },
                {
                    placeId: 34,
                    theme: "힐링",
                    placeName: "인왕산 숲속쉼터",
                    address: "서울 종로구 청운동 산 4-36",
                    mapId: 1853028181,
                },
                {
                    placeId: 54,
                    theme: "힐링",
                    placeName: "희작",
                    address: "서울 종로구 백석동길 155 (우)03020",
                    mapId: 1426336200,
                },
                {
                    placeId: 55,
                    theme: "힐링",
                    placeName: "스파 세이지힐",
                    address: "서울 용산구 독서당로34길 6 (우)04420",
                    mapId: 1865543137,
                },
            ],
        };
        return res;
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
        const encodedThemeId = encodeURIComponent(themeId);
        const res = client.get(`/place/liked/${encodedThemeId}`);
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

export const postHeart = async (data) => {
    //NOTE - url 백 작업 후 다시 확인
    try {
        const res = client.post(`/wishlist`, data);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deleteHeart = async (memberId) => {
    //NOTE - url 백 작업 후 다시 확인
    try {
        const res = client.delete(`/wishlist`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
