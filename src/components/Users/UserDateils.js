import {useLocation, useParams, useNavigate, Outlet, Link} from "react-router-dom";
import {useEffect, useState } from "react";

import {userServise} from "../../services/user.servise";



const UserDateils = () => {
    const {id} = useParams();
    const [user, setUSER] = useState(null);

    const {state} = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setUSER(state)
            return
        }
        userServise.getById(id).then(value => setUSER({...value}))
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

            {user && (<div>
                <div>Id: {user.id}</div>
                <div>Title: {user.email}</div>
                <div>BodyId: {user.name}</div>
                <Link to ={`/users/${id}/posts`}><button>getPost</button> </Link>
            </div>)

            }
            <Outlet/>
        </div>

    )

}

export default UserDateils;