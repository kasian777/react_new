import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import PostUser from "./PostUser";
import {PostusersServise} from "../../services/postusers.servise";

const PostsUser = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        PostusersServise.getById(id).then((value => setPosts([...value])))
    }, [id])
    return (
        <div>
            <div>
                {posts.map(post => <PostUser key={post.id}
                                                  post={post}/>)}
            </div>
        </div>
    )
}

export default PostsUser;