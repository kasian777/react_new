import css from "./User.module.css"
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id} = user;
    return(
        <div className={css.userflex}>

            <div>{user.id})  {user.name}< Link to={id.toString()} state={user}>  <button>userDetails</button> </Link></div>
        </div>
    );
};
export default User;