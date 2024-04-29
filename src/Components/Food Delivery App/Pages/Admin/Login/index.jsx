import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SignupFoodie from "./Components/Signup";
import LoginFoodie from "./Components/Login";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../../Context/context";

const Signform = () => {
  const [{user,pass,login,submit},setLogin] = useGlobalContext();
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const intialData = {
    fname: "",
    lname: "",
    uname: "",
    email: "",
    password: "",
  };
  const [{ fname, lname, uname, email, password }, setData] =
    useState(intialData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ fname, lname, uname, email, password });
    setDisplay(false);
    console.log("submit");
    toast("submit");
  };
  console.log("signup data", fname, uname, password);
  console.log("login data", user, pass, login);
  useEffect(() => {
    if (submit && user && pass && uname === user && pass === password) {
      setLogin({ login: true });
      toast("Login successful");
      console.log("login successfull");
    } else if (submit && uname !== user && pass !== password) {
      setLogin({ login: false });
      alert("incorrect usename && password");
    } else if (submit && user === "" && pass === "") {
       alert("plz enter something");
       setLogin({ user, pass, login: false });
    }
  }, [uname, password, user, pass, login, setLogin, submit]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(uname, fname);
  };
  const handleLogin = (e) => {
    if (user === uname && pass === password && user !== "" && pass !== "") {
      setLogin({ user, pass, submit: true, login: true });
    } else {
      setLogin({ user, pass, submit: true });
    }
  };
  const handleLogininp = (e) => {
    const { name, value } = e.target;
    setLogin((p) => ({ ...p, [name]: value }));
  };
  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex items-center  justify-center relative">
        <div className="bg-white w-3/4 h-5/6">
          {(display && (
            <SignupFoodie
              submit={handleSubmit}
              display={setDisplay}
              input={handleInput}
              data={[fname, lname, email, uname, password]}
            />
          )) ||
            (login ? (
              navigate("/")
            ) : (
              <LoginFoodie
                login={handleLogin}
                display={setDisplay}
                loginInp={handleLogininp}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Signform;
