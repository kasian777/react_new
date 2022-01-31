import React from "react";
import {Link} from "react-router-dom";

import css from "./User.module.css"

const User = ({user}) => {
    const {id} = user;
    return(
        <div className={css.userflex}>

            <div>{user.id})  {user.name}</div>
            <Link to={id.toString()} state={user}><button>userDetails</button></Link>
                <Link to={`${id}/albums`}>
                    <button>albums</button></Link>
        </div>
    );
};
export default User;