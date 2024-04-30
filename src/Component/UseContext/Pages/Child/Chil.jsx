import React, { useContext } from 'react'
import { AppContext } from '../../../../Context'

const Child = () => {
  const data = useContext(AppContext)
  return (
    <div>{data}</div>
  )
}

export default Child