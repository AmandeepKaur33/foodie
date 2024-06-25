import React, { useContext } from "react";
import img from "../../../../../Images/assets/f2.png";
import { useAuth } from "../../../../../Context/Authentication Context/Signup";
import { LoginContext } from "../../../../../Context/Authentication Context/LoginContext";
// import { useGlobalContext } from '../../../../../../Context/context'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginFoodie = () => {
  const navigate = useNavigate();
  const { state, toggleForm } = useAuth();
  // const {loginState , handleChange ,handleLogin} = useContext(LoginContext)
  const { loginState, dispatch, handleChange } = useContext(LoginContext);

  // handleLogin(e, () => {
  //   console.log("calll");
  //   if (loginState?.isAuthenticated) {
  //       navigate("/");
  //   } else {
  //       alert("user is null");
  //   }
  // });
  console.log("loginState", loginState);
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginState?.uname === "Admin" && loginState?.pass === "34590") {
      dispatch({ type: "ADMIN_LOAD" });
      navigate("/admin");
      dispatch({ type: "INPUT_CLEAR" });
      toast("admin");
    } else {
      state?.user.map((i) => {
        if (loginState?.uname && loginState?.pass) {
          if (
            i?.username === loginState?.uname &&
            i?.password === loginState?.pass
          ) {
            const userCredentials = {
              username: loginState?.uname,
              password: loginState?.pass,
              CId: i?.id,
            };
            console.log("userCredentials", userCredentials);
            dispatch({ type: "LOGIN", payload: userCredentials });
            localStorage.setItem("LoginData", JSON.stringify(loginState?.user));
            alert("login successful");
            navigate("/");
            dispatch({ type: "INPUT_CLEAR" });
          }
          
        } else {
          alert("Invalid Details");
        }
      });
    }
    // const user = { email, password }; // In a real app, you would verify credentials here
  };
  // await Promise.all(handleLogin(e)).then(()=> {
  //   if (loginState?.isAuthenticated) {
  //           navigate("/");
  //       } else {
  //           alert("user is null");
  //       }
  // })

  return (
    <div className="w-4/5 h-4/5  bg-blue-500 shadow-2xl flex">
      <div className="w-1/2 h-full flex flex-col items-center gap-20 justify-end  text-white pt-4">
        <div className="text-center flex items-center flex-col">
          <img src={img} alt="img" className="w-20 " />
          <h1 className="font-bold text-4xl">Welcome To Foodie</h1>
          <p className="text-yellow-400">
            Order your tasty meal after logging to your accout
          </p>
        </div>
        <div className="w-full h-2/5 pt-12 px-8 rounded-ss-full rounded-se-full text-center bg-white text-blue-500">
          <p className="text-center text-lg">
            If you are new here and don't have any accout, then create an
            account first{" "}
            <button
              className="bg-blue-500 text-white px-3 "
              onClick={toggleForm}
            >
              Signup Here
            </button>
          </p>
        </div>
      </div>
      <form
        action=""
        onSubmit={handleLogin}
        className="w-1/2 h-full flex flex-col items-center gap-5 justify-center bg-white"
      >
        <h1 className="text-3xl font-bold text-blue-500">Login Here!!</h1>
        <input
          type="text"
          placeholder="Enter your username"
          name="uname"
          className="w-4/5 border border-blue-500 px-3 py-1  focus:outline-2 outline-blue-500 focus:rounded-2xl"
          value={loginState.uname}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="pass"
          className="w-4/5 border border-blue-500 px-3 py-1  focus:outline-2 outline-blue-500 focus:rounded-2xl"
          value={loginState.pass}
          onChange={handleChange}
        />
        <button className=" px-8 py-2 rounded-3xl w-40 text-white  bg-blue-500 text-xl">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginFoodie;
