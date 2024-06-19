import React from 'react'
import Breadcrum from './Breadcrum'
// import Categories from '../Categories'
// import { Route, Routes } from 'react-router-dom'
// import Dashboard from '../Dashboard'
// import Product from '../Products'
// import Admin from '../../../Admin/index.jsx'


const Admindisplay = () => {
  return (
    <div className='w-full overflow-auto bg-gray-100 h-[15vh]'>
        <Breadcrum />
        {/* <Dashboard /> */}
        {/* <Route name="Admin" element={<Admin />} path="/">
        <Route name="Dashboard" element={<Dashboard />} path="/Admin/" />
        <Route name="Categories" element={<Categories />} path="/Admin/Categories"/>
         <Route name="Product" element={<Product />} path="/Admin/Product" />
        </Route> 
        {/* <Routes>
        <Route name="Dashboard" element={<Dashboard />} path="/Admin" >
        <Route name="Categories" element={<Categories />} path="/Admin/Categories"></Route> */}
         {/* <Route name="Product" element={<Product />} path="/Product"></Route> */}
         {/* </Route> */}
       {/* <Route name="Contact" element={<Contact />} path="/Contact"></Route>  */}
        {/* </Routes> */}
    </div>
  )
}

export default Admindisplay