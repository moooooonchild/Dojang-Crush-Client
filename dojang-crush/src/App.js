import { Routes, Route, NavLink } from "react-router-dom";
import TimelinePage from "./pages/Timeline";
import BucketListPage from "./pages/BucketList";
import UploadPage from "./pages/Upload";
import WishListPage from "./pages/WishList";
import GroupPage from "./pages/Group";
import RegisterPage from "./pages/Register";

function App() {
    return (
        <div>
            <div>
                <NavLink to="/">Timeline</NavLink>
                <NavLink to="/bucketlist">BucketList</NavLink>
                <NavLink to="/upload">Upload</NavLink>
                <NavLink to="/wishlist">Wishlist</NavLink>
                <NavLink to="/group">Group</NavLink>
            </div>
            <Routes>
                <Route path="/" element={TimelinePage}></Route>
                <Route path="/bucketlist" element={BucketListPage}></Route>
                <Route path="/upload" element={UploadPage}></Route>
                <Route path="/wishlist" element={WishListPage}></Route>
                <Route path="/group" element={GroupPage}></Route>
                <Route path="/register" element={RegisterPage}></Route>
            </Routes>
        </div>
    );
}

export default App;
