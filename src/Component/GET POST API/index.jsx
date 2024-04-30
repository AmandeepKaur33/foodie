import axios from "axios";
import React, { useEffect, useState } from "react";

const GetPost = () => {
  const [post, setPost] = useState({
    first_name: '', last_name: '', email: '', file: ''
  })
  const [text, setText] = useState([]);
  // const [{first_name,last_name,email},setData] = useState({
  //   first_name: "aman", last_name: "", email: ""
  // })
  
  // const [{first,last,email}, setPayload] = useState()
  
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      // console.log([res.data.first_name]);
      console.log(res.data.data);
      setText(res.data.data);
    });
    // axios.post("https://reqres.in/api/users",{first_name: first_name, last_name: last_name, email: email}).then((res) => {
    //   // console.log([res.data.first_name]);
    //   console.log(res);
    // });
  },[]);
  const handleInput = (e) => {
    setPost({...post, [e.target.name]: e.target.value})
  }
  // console.log(text);
  return (
    <div className="w-full h-screen flex  items-center bg-gray-800">
      <div className="w-3/4 h-5/6 flex flex-col items-center overflow-auto gap-3 mx-auto bg-white">
      <form
       onSubmit={(e)=>{
        e.preventDefault();
        // setData(first_name,last_name,email)
        axios.post("https://reqres.in/api/users",{first_name: post.first_name, last_name: post.last_name, email: post.email, avatar: post.file}).then((res) => {
          // console.log([res.data.first_name]);
          console.log("post",res);
        })
        .catch(err => console.log(err))
      }}
         className="mt-2 w-full flex gap-1 px-3">
        <input type="text" className="w-72 px-1 border border-gray-700" name="first_name" onChange={handleInput} placeholder="first name" />
        <input type="text" className="w-72 px-1 border border-gray-700" name="last_name" onChange={handleInput} placeholder="last name" />
        <input type="email" className="w-72 px-1 border border-gray-700" name="email" onChange={handleInput} placeholder="email address" />
        <input type="file" className="w-72 px-1 border border-gray-700" name="file" onChange={handleInput} />
        <button className="px-6 py-1 bg-indigo-500 text-white">Submit</button>
      </form>
        {text.map((item) => (
          <div key={item.id} className="w-11/12 mx-auto flex items-center h-16 justify-between -2 border-b border-b-gray-300">
            <img src={item.avatar} alt={item.first_name} width={50} />
            <h1>{item.first_name}</h1>
            <h2>{item.last_name}</h2>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetPost;
