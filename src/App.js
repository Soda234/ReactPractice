import React, { useRef, useState } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const[inputs, setInputs] = useState({
    username : '',
    emial: '',
  })

  const { username, email } = inputs

  const onChange = (e) => {
    const {name, value } = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const [users, setUsers] = useState([
    {
    id : 1,
    username :"shin",
    email : "shin@naver.com",
    active : true
},
{
    id : 2,
    username :"shin2",
    email : "shin2@naver.com",
    active : false
},
{
    id : 3,
    username :"shin3",
    email : "shin3@naver.com",
    active : false
}]
)

  const nextId = useRef(4)

  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    };
    /* setUsers([...users, user]) */ //이렇게 써도 무방
    setUsers(users.concat(user))
    setInputs({
      username : '',
      email : ''
     })
  }
  const onRemove = (id, deletenumber) => {
    console.log('id', users, id)
    setUsers(users.filter(user => user.id !== Number(id)))
    deletenumber('')
  }

  const onToggle = (id) => {
    setUsers(users.map(
      user => user.id === id ? {...user, active : !user.active} : user // id값을 받아와서 active 값을 바꿔주는것
    ))
  }

  return (
    <div>
  <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
  <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
