import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostPge = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div style={{display:"flex"}}>
            <div>
            <h1>Post</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );

}
export default PostPge;