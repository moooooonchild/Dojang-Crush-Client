import client from ".";

export const postHeart = async (memberId) => {
    //NOTE - url 백 작업 후 다시 확인
    try {
        const res = client.post(`/wishlist`);
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
