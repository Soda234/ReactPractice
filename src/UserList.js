import React from 'react'
import { useState } from 'react/cjs/react.development'



function User({ user, onRemove, onToggle }){
    return (
        <div>
            {user["id"]}
             <b style={{color : user["active"] ? 'green' : 'black'}} onClick={() => onToggle(user["id"])}>  {user["username"]} </b>
             <span>{user["email"]} </span>            
        </div>
    )
}

function UserList({ users , onRemove, onToggle}) {
    const [value, deletenumber] = useState('')
    const onChange = (e) => {
        deletenumber(e.target.value)
        
       }

    return(
        <div>{
        users.map(user => (<User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle}/>))
    }
    <input value={value} onChange={onChange}/>
    <button onClick={() => onRemove(value, deletenumber)}>삭제</button>
    </div>
    )
}

export default UserList;