import css from "./Post.module.css"
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id} = post;
  return(
      <div className={css.postflex}>

          <div>{post.id})  {post.title}< Link to={id.toString()} state={post}>  <button>PostDetails</button> </Link></div>
      </div>
  );
};
export default Post;