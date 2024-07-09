import React, { useContext, useEffect, useState } from "react";
import loginImg from "../../../Images/assets/foodTable.png";
import { LoginContext } from "../../../Context/Authentication Context/LoginContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/Authentication Context/Signup";

const Login = () => {
  const { loginState, dispatch, handleChange } = useContext(LoginContext);
  const [validationErrors, setValidationErrors] = useState({
    Username: "",
    Password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const { state } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_LOGIN", submit: true });
    if (isSubmit) {
      if (loginState?.uname === "Admin" && loginState?.pass === "34590") {
        dispatch({ type: "ADMIN_LOAD" });
        navigate("/admin");
        dispatch({ type: "INPUT_CLEAR" });
        toast("admin");
      } else {
        const foundUser = state?.user?.find(
          (i) =>
            i.username === loginState?.uname && i?.password === loginState?.pass
        );

        if (foundUser) {
          const userCredentials = {
            username: loginState?.uname,
            password: loginState?.pass,
            CId: foundUser?.id,
          };

          dispatch({ type: "LOGIN", payload: userCredentials });
          localStorage.setItem("LoginData", JSON.stringify(loginState?.user));
          toast.success("login successful");
          navigate("/");
          dispatch({ type: "INPUT_CLEAR" });
          setIsSubmit(true);
        } else {
          toast.dark("Invalid Details");
        }
      }
    }
  };
  useEffect(() => {
    validate(loginState);
  }, [loginState]);

  const validate = (loginState) => {
    if (!loginState?.uname) {
      setValidationErrors((prev) => ({
        ...prev,
        Username: "* Username is required",
      }));
      setIsSubmit(false);
    } else {
      setValidationErrors((prev) => ({ ...prev, Username: "" }));
      setIsSubmit(true);
    }
    if (!loginState?.pass) {
      setValidationErrors((prev) => ({
        ...prev,
        Password: "* Password is required",
      }));
      setIsSubmit(false);
    } else {
      setValidationErrors((prev) => ({ ...prev, Password: "" }));
      setIsSubmit(true);
    }
  };
  return (
    <div className="w-full flex flex-col justify-center  gap-6 h-[80vh] overflow-auto bg-white px-20 py-12 my-1 mx-auto ">
      {/* <h1 className="text-5xl font-bold text-gray-600">Login</h1> */}
      <div className="w-full h-[98%] border border-gray-300 flex">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src={loginImg} alt="" className="w-full h-full" />
        </div>

        <form className="w-1/2 h-full flex flex-col items-center gap-7 justify-center bg-white">
          <div className="relative w-4/5  mb-3">
            <input
              type="text"
              name="uname"
              placeholder="Enter Username"
              className="w-full  px-3 py-2 border border-gray-600"
              required
              value={loginState.uname}
              onChange={handleChange}
            />
            <p className="text-red-700 absolute inset-x-0 text-start">
              {loginState.submit && validationErrors?.Username}
            </p>
          </div>
          <div className="relative w-4/5 mb-3">
            <input
              type="password"
              name="pass"
              required
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-600"
              value={loginState.pass}
              onChange={handleChange}
            />
            <p className="text-red-700 absolute inset-x-0">
              {loginState.submit && validationErrors?.Password}
            </p>
          </div>
          <div className="flex items-center pl-14 gap-5 w-full">
            <button
              onClick={handleLogin}
              className=" px-1 rounded-3xl w-24 text-white  bg-green-500 text-lg"
            >
              Login
            </button>
            <div className="">
              New User?{" "}
              <span
                className="cursor-pointer font-semibold rounded-2xl text-teal-500 underline"
                onClick={() => navigate("/Signup")}
              >
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
