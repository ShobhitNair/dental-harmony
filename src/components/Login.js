/* global firebase */
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import logo from "../img/image1.png";
const Login = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div className="bg-blue-500 flex flex-col justify-center rounded-md my-32 mx-auto w-2/4 p-32">
      <div>
        <img className="w-3/4 mx-auto mb-8" src={logo}></img>
      </div>
      <div className="mx-auto p-2">
      {value ? navigate("/") : <GoogleButton onClick={handleClick} />}
      </div>
      
    </div>
  );
};

export default Login;
