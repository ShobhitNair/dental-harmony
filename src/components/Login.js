/* global firebase */
import {auth,provider} from "./firebaseConfig"
import { signInWithPopup } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import GoogleButton from 'react-google-button'
const Login = () => {
  const [value,setValue] =useState('')
  const navigate = useNavigate()
const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email )
    })
}
   useEffect(()=>{
      setValue(localStorage.getItem('email'))
   },[])

      return(
        <div className="bg-blue-500 flex justify-center my-44 mx-auto w-2/4 p-32">
          {value ? navigate('/') :
        <GoogleButton onClick={handleClick}/>
}
      
        </div>
        
      )
}

export default Login;