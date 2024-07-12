import React, { useContext, useState } from "react";
import { LoginContext } from "../../../Context/Authentication Context/LoginContext";
import { useAuth } from "../../../Context/Authentication Context/Signup";
import BasicInfo from "./Profile Components/Basic Info";
import History from "./Profile Components/Purchashed History/History Helper";

const Profile = () => {
  const { loginState } = useContext(LoginContext);
  const [historyDisplayToggle, setHistoryDisplayToggle] = useState(false)
  const { state , edit, setEdit, handleUpdate,handleSubmit} = useAuth();
  const userInfo = {
    name: "",
    username: "",
    img: "",
    email: "",
    address: "",
    mobile: "",
    zipCode: "",
    id: ""
  };
  state?.user?.map((item) => {
    if (item?.id === loginState?.user?.CId) {
      userInfo.id = item?.id;
      userInfo.name = item?.name;
      userInfo.username = item?.username;
      userInfo.img = item?.img;
      userInfo.email = item?.email;
      userInfo.address = item?.address;
      userInfo.mobile = item?.mobile;
      userInfo.zipCode = item?.zipCode
    }
    // console.log("item",item);
  });
  console.log(state, "state");
  return (
    <div className="w-full flex flex-col  gap-6  overflow-auto bg-white px-6 py-12 my-1 mx-auto ">
      <div>
        <h1 className="text-4xl font-serif font-semibold">User Information</h1>
      </div>
      <div className="w-full  border">
        <div className="w-full h-[234px] flex flex-col justify-between mt-3 gap-4 px-8 border-b">
        <div className="flex gap-4">
          <div className="w-48 h-44 border">
            <img src={userInfo.img} alt="" className="p-1 h-full w-full" />
          </div>
          <div className="text-blue-500 font-medium flex flex-col  text-lg mt-4 h-full ">
            <h1 className="font-bold text-2xl">{userInfo.name}</h1>
            <h3>{userInfo.username}</h3>
            <h3>{userInfo.email}</h3>
            {!historyDisplayToggle &&
            edit ? <i onClick={()=>handleSubmit(loginState?.user?.CId)} className="fa-solid fa-check text-center py-1 text-[#FC6180] mt-5  w-10 rounded-2xl border-[#FC6180] border"></i> :
            <i onClick={()=>{
              setEdit(true)
              handleUpdate(userInfo.id)
            }} className="fa-solid fa-pencil text-center py-1 text-[#FC6180] mt-5  w-10 rounded-2xl border-[#FC6180] border"></i>
}
          </div>
        </div>
        <div className="flex text-blue-500">
            <div onClick={()=>setHistoryDisplayToggle(false)} className={`px-4 cursor-pointer py-1 [43px]  font-medium ${!historyDisplayToggle && ' border-x border-t bg-white '}`}>Basic Info</div>
            <div onClick={()=>setHistoryDisplayToggle(true)} className={`px-4 cursor-pointer h-[43px]  py-1 font-medium  ${historyDisplayToggle && ' border-x border-t bg-white'}`}>Purchased History</div>
        </div>
        </div>
        <div className="w-full h-[calc(100%-40%)]">
          {historyDisplayToggle ? <History/> : <BasicInfo userInfo={userInfo} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
