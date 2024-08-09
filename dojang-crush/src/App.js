import { Routes, Route } from 'react-router-dom';

import TimelinePage from './pages/Timeline';
import BucketListPage from './pages/BucketList';
import UploadPage from './pages/Upload';
import WishListPage from './pages/WishList';
import GroupPage from './pages/Group';
import RegisterPage from './pages/Register';
import BucketDetailPage from './pages/BucketDetail';
import WishDetailPage from './pages/WishDetail';
import SignupPage from './pages/Signup';
import PostDetailPage from './pages/PostDetail';
import SettingPage from './pages/Settings';
import ChangeNamePage from './pages/ChangeName';
import ChangeIDPWPage from './pages/ChangeIDPW';
import ChangeGroupNamePage from './pages/ChangeGroupName';
import WithdrawalPage from './pages/Withdrawal';
import CalendarPage from './pages/Calendar';
import Redirection from './pages/Redirection';

function App() {
    const currentPath = window.location.pathname;
    if (currentPath !== '/register' || currentPath !== '/oauth/callback') {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('로그인이 필요합니다.');
            window.location.href = '/register';
        }
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<TimelinePage />}></Route>
                <Route path="/post/:id" element={<PostDetailPage />}></Route>
                <Route path="/bucketlist" element={<BucketListPage />}></Route>
                <Route
                    path="/bucketlist/:theme"
                    element={<BucketDetailPage />}
                ></Route>
                <Route path="/upload" element={<UploadPage />}></Route>
                <Route path="/wishlist" element={<WishListPage />}></Route>
                <Route
                    path="/wishlist/:theme"
                    element={<WishDetailPage />}
                ></Route>
                <Route path="/group" element={<GroupPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
                <Route path="/settings" element={<SettingPage />}></Route>
                <Route path="/changename" element={<ChangeNamePage />}></Route>
                <Route path="/changeidpw" element={<ChangeIDPWPage />}></Route>
                <Route path="/withdrawal" element={<WithdrawalPage />}></Route>
                <Route
                    path="/changegroupname"
                    element={<ChangeGroupNamePage />}
                ></Route>
                <Route path="/oauth/callback" element={<Redirection />}></Route>
                <Route path="/calendar" element={<CalendarPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
