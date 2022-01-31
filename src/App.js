import {Routes, Route, Link} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostPage from "./pages/PostPage/PostPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoudPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import SingelPostPaage from "./pages/SingelPostPage/SingelPostPaage";
import Comments from "./components/Comments/Comments";
import UserDateils from "./components/Users/UserDateils";
import PostsUser from "./components/Users/UserPosts";
import Alboms from "./components/Alboms/Alboms";
import Photos from "./components/Alboms/UserAlbumsPhotos";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDateils/>}>
                            <Route path={'posts'} element={<PostsUser/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<Alboms/>}>
                            <Route path={':id/photos'} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<SingelPostPaage/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>

            </Routes>
        </div>
    )
        ;
}

export default App;
