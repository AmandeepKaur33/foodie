import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useNavigate();
    console.log(location);
  return (
    <div>
      <h1>User {fname} {lname}</h1>
      <p> my location is {location.pathname}</p>
      {location.pathname === `/user/aman/kaur` ?
      <button onClick={()=> history(-1)}>click me</button> : null
    }
    </div>
  )
}

export default User