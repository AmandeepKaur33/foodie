import React from 'react'
import Sidebar from './Sidebar'
import Admindisplay from './Admin display'
// import Dashboard from './Categories'
// import Dashboard from './Dashboard'

const Panel = () => {
  return (
    <div className='w-full flex h-[calc(100vh-80px)]'>
        <Sidebar />
        {/* <Dashboard /> */}
        <Admindisplay />
    </div>
  )
}

export default Panel