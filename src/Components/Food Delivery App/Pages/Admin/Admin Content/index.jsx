import React from 'react'
import Sidebar from './Sidebar'
import Admindisplay from './Admin display'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import Categories from './Categories'
import Product from './Products'
import Users from './Users'
// import Dashboard from './Categories'
// import Dashboard from './Dashboard'

const Panel = () => {
  return (
    <div className='w-full flex h-[96vh]'>
        <Sidebar />
       <div className='w-full h-full'>
        <Admindisplay />
        <Routes>
          <Route element={<Dashboard/>} path='/admin'></Route>
          <Route element={<Categories/>} path='/categories'/>
          <Route element={<Product/>} path='/products'/>
          <Route element={<Users/>} path='/users'/> 
          
         </Routes>
        {/* <Routes>
            <Route name="admin" element={<Dashboard/>} path="/">
            <Route element={<Categories/>} path="categories"/>
            <Route element={<Product/>} path="products"/>

            </Route>
            </Routes> */}
       </div>
    </div>
  )
}

export default Panel