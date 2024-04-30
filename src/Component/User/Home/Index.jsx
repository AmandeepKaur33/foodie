import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav>
            <NavLink to={"/"} >Home</NavLink>
            <NavLink to={"/user/aman/deep"} >User</NavLink>
        </nav>
    </div>
  )
}

export default Home