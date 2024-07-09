import React from 'react';
import InfoList from './Basic Info helper';
import { useAuth } from '../../../../../Context/Authentication Context/Signup';

const BasicInfo = ({userInfo}) => {
  const {state} = useAuth();
  return (
    <div className='w-full h-full '>
     <InfoList title="Full Name" data={userInfo.name} Value={state.name} name="name" />
     <InfoList title="Username" Value={state.username} data={userInfo.username} name="username"/>
     <InfoList title="Mobile No." name="mobile" Value={state.mobile}  data={userInfo.mobile}/>
     <InfoList title="Email Addr." name="email" Value={state.email} data={userInfo.email}/>
     <InfoList title="Post Code" name="zipCode" Value={state.zipCode} data={userInfo.zipCode}/>
     <InfoList title="Address" name="address" Value={state.address} data={userInfo.address}/>
    </div>
  )
}

export default BasicInfo