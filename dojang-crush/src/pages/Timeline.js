import NavigationBar from '../components/NavigationBar';
import { TitleComponent } from '../components/common/header/TitleComponent';
import { CalendarIcon } from '../components/calendar/Icons';
import { PostComponent } from '../components/timeline/PostComponent';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../api/post';

const TimelinePage = () => {
    const navigate = useNavigate();

    const [postList, setPostList] = useState([]);

    //route to post detail page
    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    useEffect(() => {
        const fetchAllPosts = async () => {
            let pageNum = 1;
            let allPosts = [];
            let morePosts = true;

            while (morePosts) {
                const res = await getAllPosts(pageNum);
                if (res && res.postList && res.postList.length > 0) {
                    allPosts = [...allPosts, ...res.postList];
                    pageNum += 1;
                } else {
                    morePosts = false;
                }
            }

            setPostList(allPosts);
        };

        fetchAllPosts();
    }, []);
    return (
        <>
            <TitleComponent
                title="Timeline"
                isBackBtn={false}
                RightIcon={CalendarIcon}
                RightIconPath={'/calendar'}
            />
            {postList.map((post) => (
                <PostComponent
                    key={post.postId}
                    postInfo={post}
                    writerInfo={post.writerDto}
                    onPostClick={handlePostClick}
                />
            ))}

            <NavigationBar />
        </>
    );
};

export default TimelinePage;
