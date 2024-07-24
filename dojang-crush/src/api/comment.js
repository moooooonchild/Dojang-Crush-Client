import client from ".";

export const postComments = async (postId, data) => {
    try {
        const res = await client.post(`/comments/${postId}`, data);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

export const getComments = async (postId) => {
    try {
        //FIXME - const res = await client.get(`/comments/${postId}`);
        //console.log(res);
        //return res.data;

        const res = {
            postId: 67,
            commentList: [
                {
                    commentId: 33,
                    postId: 67,
                    content: "여기서 우리 재밌게 놀았지~",
                    createdDate: "2024-07-09",
                    modifiedDate: "2024-07-10",
                    cDepth: 1,
                    parentCId: 23,
                    writer: {
                        memberId: 1,
                        groupId: 1,
                        profileImageUrl:
                            "https://s3.ap-northeast-2.amazonaws.com/dd/pdd/image/d953fdec-b85f-4ce9-b7f5-7a",
                    },
                },
                {
                    commentId: 23,
                    postId: 67,
                    content: "OO 볼링장 기억나?",
                    createdDate: "2024-07-09",
                    modifiedDate: "2024-07-10",
                    cDepth: 1,
                    parentCId: null,
                    writer: {
                        memberId: 1,
                        groupId: 1,
                        profileImageUrl:
                            "https://s3.ap-northeast-2.amazonaws.com/dd/pdd/image/d953fdec-b85f-4ce9-b7f5-7a",
                    },
                },
            ],
        };

        return res.commentList;
    } catch (err) {
        console.log(err);
    }
};

export const deleteComments = async (commentId) => {
    try {
        const res = await client.delete(`/comments/${commentId}`);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

export const patchComments = async (commentId, data) => {
    //NOTE - userId 필요??
    try {
        const res = await client.patch(`/comments/${commentId}`, data);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
