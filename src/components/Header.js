import { useState, useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useStatusOnline from "../../utils/useStatusOnline";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useStatusOnline();

   // if no dependancy array, use effect called after every render
   // if dependancy array is empty = [] => useeffect will be called on initial render (only once)
   // if dependancy array is [btnName] then it will be only be called when [btnName] changes/updated
    useEffect(() => {

    }, []);

    return (
    <div className="flex justify-between items-center border shadow-lg m-2 bg-green-50 ">
        <div className="logo-container">
            <img className="w-32" src={ LOGO_URL }></img>
        </div>
        <div className="nav-items">
            <ul className="flex justify-evenly">
                <li className="p-4">
                    Online Status : {onlineStatus ? "✅" : "🔴"}

                </li>
                <li className="p-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-4">
                    <Link to="/about">About</Link>
                </li>
                <li className="p-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="p-4">Cart</li>
                <button className="login-btn p-4" onClick={()=> { 
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </ul>
        </div>

    </div>
    )
}

export default Header;