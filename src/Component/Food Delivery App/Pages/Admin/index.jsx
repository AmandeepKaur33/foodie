import React from 'react'
import Adminheader from './Header'
import Panel from './Admin Content'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='w-full'>
        <Adminheader />
        <Panel />
        <Outlet />
        
    </div>
  )
}

export default Admin