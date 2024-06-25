import React, { useContext } from "react";
import loginImg from "../../../Images/assets/login svg.png";
import { LoginContext } from "../../../Context/Authentication Context/LoginContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/Authentication Context/Signup";

const Login = () => {
    const {loginState, dispatch,handleChange} = useContext(LoginContext);
    const {state} = useAuth();
    const navigate = useNavigate()
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
            //   alert("Invalid Details");
            }
          });
        }
        // const user = { email, password }; // In a real app, you would verify credentials here
      };
  return (
    <div className="w-full flex flex-col  gap-6 h-[80vh] overflow-auto bg-white px-20 py-12 my-1 mx-auto ">
      <h1 className="text-5xl font-bold text-stone-800">Login</h1>
      <div className="w-full h-4/5 border border-gray-300 flex">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src={loginImg} alt="" className="w-full h-full" />
        </div>

        <form onClick={handleLogin} className="w-1/2 h-full flex flex-col items-center gap-7 justify-center bg-white">
          <input
            type="text"
            name="uname"
            placeholder="Enter Username"
            className="w-4/5 px-3 py-1 border border-gray-600"
            value={loginState.uname}
            onChange={handleChange}
          />
          <input
            type="password"
            name="pass"
            placeholder="Enter Password"
            className="w-4/5 px-3 py-1 border border-gray-600"
            value={loginState.pass}
            onChange={handleChange}
          />
          <div className="flex items-center pl-14 gap-5 w-full">
            <button
              className=" px-1 rounded-3xl w-24 text-white  bg-green-500 text-lg"
            >
              Login
            </button>
            <div className="">
              New User?{" "}
              <span className="cursor-pointer font-semibold rounded-2xl text-teal-500 underline" onClick={()=> navigate("/Signup")}>
                Registered here...
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
