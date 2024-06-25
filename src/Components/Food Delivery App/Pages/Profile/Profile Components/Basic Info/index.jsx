import React from 'react'
import InfoList from './Basic Info helper'

const BasicInfo = ({userInfo}) => {
  return (
    <div className='w-full h-full '>
     <InfoList title="Full Name" value={userInfo.name} name="name"/>
     <InfoList title="Username" value={userInfo.username} name="username"/>
     <InfoList title="Mobile No." name="mobile" value={userInfo.mobile}/>
     <InfoList title="Email Addr." name="email" value={userInfo.email}/>
     <InfoList title="Post Code" name="zipCode" value={userInfo.zipCode}/>
     <InfoList title="Address" name="address" value={userInfo.address}/>
    </div>
  )
}

export default BasicInfo