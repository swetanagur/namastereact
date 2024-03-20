import { useState, useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

   // if no dependancy array, use effect called after every render
   // if dependancy array is empty = [] => useeffect will be called on initial render (only once)
   // if dependancy array is [btnName] then it will be only be called when [btnName] changes/updated
    useEffect(() => {

    }, []);

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={ LOGO_URL }></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=> { 
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </ul>
        </div>

    </div>
    )
}

export default Header;