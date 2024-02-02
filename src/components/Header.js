import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/image1.png"
const Header = ()=>{
   
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.email);
    const logout = ()=>{
        if(localStorage.email){
            localStorage.clear()
            setIsLoggedIn(false);
        }
        
    }
    return(
        <div className="bg-blue-500 flex justify-between sticky top-0 z-20">
            <div>
                <img className="w-2/4 mx-5 py-2" src={logo} />
            </div>
            <div className="text-white flex py-6">
                <Link to='/'><h1 className="p-2 ">Home</h1></Link>
                <Link to='/about'><h1 className="p-2">About Us</h1></Link>
                <h1 className="p-2">Service</h1>
                <h1 className="p-2">Contact</h1>
                {isLoggedIn ? (
          <h1 className="p-2 cursor-pointer" onClick={logout}>
            Logout
          </h1>
        ) : (
          <Link to="/login">
            <h1 className="p-2">Sign In</h1>
          </Link>
        )}
           <button className="bg-red-500 rounded-lg hover:bg-blue-400 p-2 mx-2">Book Appointment</button>
                
            </div>
        </div>
    )
}

export default Header;