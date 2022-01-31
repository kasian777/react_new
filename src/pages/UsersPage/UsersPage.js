import {useState, useEffect} from "react";
import {userServise} from "../../services/user.servise";
import User from "../../components/Users/User";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        userServise.getAll().then(value => setUsers([...value]))
    },[])
    return (
        <div style={{display:"flex"}}>
          <div> <h1>Users</h1>
            {users.map(user=><User key = {user.id} user={user}/>)}</div>
            <div><Outlet/></div>
</div>
    );

}
export default UsersPage;