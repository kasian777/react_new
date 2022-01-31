import {useLocation, useParams, useNavigate, Outlet, Link} from "react-router-dom";
import {useEffect, useState } from "react";
import {postService} from "../../services/post.service";
import Comments from "../../components/Comments/Comment";



const SingelPostPaage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    const {state} = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])

    const toHome=() =>{
        navigate('/')
    }
    const back = () => {
      navigate(-1)
    }
    return (
        <div>
            <button onClick={toHome}>Home</button>
            <button onClick={back}>Back</button>

            {post && (<div>
                <div>Id: {post.id}</div>
                <div>UserId: {post.userId}</div>
                <div>Title: {post.title}</div>
                <div>BodyId: {post.body}</div>
                    <Link to ={`/posts/${id}/comments`}><button>GetComments</button> </Link>
            </div>)

            }
            <Outlet/>
        </div>

    )

}

export default SingelPostPaage;