
const Comment = ({comment}) => {
    const {id, name, email,body} = comment;
    return (
        <div>
            <div>
                <div>ID : {id}</div>
                <div>NAME : {name}</div>
                <div>EMAIL : {email}</div>
                <div>BODY : {body}</div>
            </div>
        </div>
    );

};
export default Comment;