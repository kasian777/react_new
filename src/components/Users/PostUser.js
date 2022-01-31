const PostUser = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <div>
                <div>ID : {id}</div>
                <div>title : {title}</div>
                <div>BODY : {body}</div>
            </div>
        </div>
    );

};
export default PostUser;