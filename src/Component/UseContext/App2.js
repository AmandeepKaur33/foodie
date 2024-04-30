import React, { useState } from 'react'
import Parent from './Pages/Parent'
import { AppContext } from '../../Context'


const App2 = () => {
  const [data,setData] = useState("Aman")
  // const handleData = (value) =>{
  //   setData(value)
  // }
  return (
    <div>
      <AppContext.Provider value={data}>
        <Parent/>
        </AppContext.Provider>
    </div>
  )
}

export default App2