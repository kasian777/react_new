import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Comment from "./Comment";
import {commentsService} from "../../services/comments.service";

const Comments = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsService.getById(id).then((value => setComments([...value])))
    }, [id])
    return (
        <div>
            <div>
                {comments.map(comment => <Comment key={comment.id}
                                                  comment={comment}/>)}
            </div>
        </div>
    )
}

export default Comments;