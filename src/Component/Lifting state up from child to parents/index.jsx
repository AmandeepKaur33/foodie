import React from 'react'
import Child from './Childs'

const LiftingUp = () => {
    function receiveData(data){
        console.log(data);
    }
  return (
    <div>
        <Child getData={receiveData}/>
    </div>
  )
}

export default LiftingUp