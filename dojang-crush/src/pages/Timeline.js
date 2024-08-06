import NavigationBar from '../components/NavigationBar';
import { TitleComponent } from '../components/common/header/TitleComponent';
import { CalendarIcon } from '../components/calendar/Icons';
import { PostComponent } from '../components/timeline/PostComponent';
import { useNavigate } from 'react-router-dom';

const TimelinePage = () => {
    const navigate = useNavigate();

    //route to post detail page
    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <>
            <TitleComponent
                title="Timeline"
                isBackBtn={false}
                RightIcon={CalendarIcon}
                RightIconPath={'/calendar'}
            />
            <PostComponent onPostClick={handlePostClick} />
            <PostComponent onPostClick={handlePostClick} />
            <PostComponent onPostClick={handlePostClick} />

            <NavigationBar />
        </>
    );
};

export default TimelinePage;
