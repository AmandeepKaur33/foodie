import React from 'react';
import './index.css';
import TodoList from './Component/Todo';
// import UseEffect from './UseEffect';
// import Todo from './Component/Todo list';
// import Todo from './Todo';
// import TodoWithFilters from './Component/Query Params';
// import TodoFilters from './Component/Todo Api';
// import NewsApi from './Component/GET POST API/News api';
// import GetNews from './Component/GET POST API/News api';
// import Dropdown from './Component/Food Delivery App/Dropdown';
// import GetPost from './Component/GET POST API';
// import Postapi from './Component/Post Api';
// import AxiosPost from './Component/Post Api';
// import LiftingUp from './Component/Lifting state up from child to parents';
// import { Route, Routes } from 'react-router-dom';
// import User from './Component/User';
// import Home from './Component/User/Home/Index';
// import Reducer from './Component/Reducer hook';
// import Todo from './Component/Todo list';
// import Countrycity from './Component/React practice problems/Country city dropdown';
// import Signup from './Component/Sign in form/Sign up';
// import Signform from './Component/Sign in form/Sign';
// import Forms from './Component/Sign in form/Forms';
// import Admin from './Component/Food Delivery App/Pages/Admin';
// import axios from 'axios';
// import Foodie from './Component/Food Delivery';
// import Foodapp from './Component/Food Delivery App';
// import Todo from './Component/Todo list';
// import Store from './Component/Api store';
// const apilink = "https://jsonplaceholder.typicode.com/todos";
function App() {
  // const [post, setPost] = useState([]);
  // console.log(post);
  // useEffect(()=>{
  //   getData();
  // },[])
  // const getData = async()=>{
  //   const response=await fetch("https://jsonplaceholder.typicode.com/todos");
  //   console.log(response);
  //   const jsonData = await response.json();g
  //   console.log(jsonData);
  //   setPost(jsonData)
  // }
 
  // useEffect(()=>{
  //   const data = axios.get(apilink).then((response)=>{
  //     // console.log(response);
  //     // console.log(response.data);
  //     setPost(response.data);
  //   })
  // },[])
  return (
    <div>
      <TodoList />
      {/* <Postapi /> */}
      {/* <Foodapp /> */}
      {/* <NewsApi /> */}
      {/* <TodoWithFilters /> */}
      {/* <TodoFilters /> */}
      {/* <Todo /> */}
      {/* <UseEffect /> */}
      {/* <GetNews /> */}
      {/* <Dropdown /> */}
      {/* <GetPost /> */}
      {/* <AxiosPost /> */}
      {/* <LiftingUp /> */}
      {/* <Todo /> */}
      {/* <Admin /> */}
      {/* <Signin /> */}
      {/* <Forms /> */}
      {/* <Signform /> */}
      {/* <Todo /> */}
      {/* <h1>Axios with react</h1>
      {post.map((value)=>{
        return(
          <>
          <h2>{value.title}</h2>
          </>
        )
        
      })} */}
      {/* <Store /> */}
      {/* <Signup /> */}
      {/* <Todo /> */}
      {/* <Countrycity /> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:fname/:lname' element={<User />}/>
      </Routes> */}
      {/* <Reducer /> */}
    </div>
  );
}

export default App;
