
import React, {useEffect, useState} from 'react';

import Form from "./components/Form/Form";
import {userService} from "./services/user.servise";
import Users from "./components/Users";

const App = () => {
  const [users, setUsers] = useState();
  const [filterusers, setFilterUsers] = useState();


  useEffect(() => {
    userService.getAll().then(value => {
      setUsers([...value])
      setFilterUsers([...value])
    })
  }, [])

  const getFilter = (data) => {
    let filterarr = [...users]
    if(data.name){
      filterarr = filterarr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
    }
    if(data.username){
      filterarr = filterarr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
    }
    if(data.email){
      filterarr = filterarr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
    }
    setFilterUsers(filterarr)
  }

  return (
      <div>
        <Form getFilter={getFilter}/>
        <Users users ={filterusers}/>
      </div>
  );
};

export default App;