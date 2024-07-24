import client from ".";

export const getAllPosts = async (groupId) => {
    try {
        const res = client.get(`/posts/${groupId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getPostDetail = async (postId) => {
    try {
        //FIXME - const res = client.get(`/posts/${postId}`);
        //console.log(res.data);
        //return(res.data);
        const res = {
            postId: 1,
            content: "오늘은 퍼비 볼링장에 다녀왔어요!~",
            theme: "#스포츠",
            placeTag: "#퍼비볼링장",
            createdDate: "2024-07-09 11:20:22",
            visitedDate: "2024-04-11 23:10:11",
            writer: {
                memberId: 1,
                name: "정유진",
                profileImageUrl:
                    "https://s3.ap-northeast-2.amazonaws.com/dd/pdd/image/d953fdec-b85f-4ce9-b7f5-7a",
            },
            groupId: 1,
            imageUrl: [
                "https://s3.ap-northeast-2.amazonaws.com/dd/pdd/image/d953fdec-b85f-4ce9-b7f5-7a",
                "https://s3.ap-northeast-2.amazonaws.com/dd/pdd/image/d953fdec-b85f-4ce9-b7f5-7a",
            ],
        };
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const deletePost = async (postId) => {
    try {
        const res = client.delete(`/posts/all/${postId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const postHeart = async (postId) => {
    try {
        const res = client.post(`/posts/${postId}/like`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const deleteHeart = async (postId) => {
    try {
        const res = client.delete(`/posts/${postId}/like`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
