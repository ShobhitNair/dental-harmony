import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ()=>{
   
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.email);
    const logout = ()=>{
        if(localStorage.email){
            localStorage.clear()
            setIsLoggedIn(false);
        }
        
    }
    return(
        <div className="bg-blue-500 flex justify-between">
            <div>
                <img className="w-20 ml-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOrOKEwDpuYOgxwWJlM9JyLrOobf6neRdJw&usqp=CAU" />
            </div>
            <div className="text-white flex py-6">
                <Link to='/'><h1 className="px-2">Home</h1></Link>
                <Link to='/about'><h1 className="px-2">About Us</h1></Link>
                <h1 className="px-2">Service</h1>
                <h1 className="px-2">Contact</h1>
                {isLoggedIn ? (
          <h1 className="px-2 cursor-pointer" onClick={logout}>
            Logout
          </h1>
        ) : (
          <Link to="/login">
            <h1 className="px-2">Sign In</h1>
          </Link>
        )}
           
                
            </div>
        </div>
    )
}

export default Header;