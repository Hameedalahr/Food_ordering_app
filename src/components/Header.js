import {LOGO_URL} from "../utils/constants";
import {useState,useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [loginBtn,setLoginBtn]=useState("Login")
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items)
    return(
        <div className="header">
                <div className="logo-container">
                    <img alt="Logo-Image" className="logo" src={LOGO_URL}></img>
                    <Link to="/"><h1>Food Delivery</h1></Link>
                </div>
                <div className="nav-items">
                    <ul>
                        
                        <Link to="/"><li >Home</li></Link>
                        <Link  to="/about"><li >About</li></Link>
                        <Link to="/contact"><li >Contact Us</li></Link>
                        
                        <Link to="/cart"><div className="cart"><li >
                            <i className="fa-solid fa-cart-shopping " style={{ color: "#ff0000",fontSize:30 }}></i>
                           
                        </li><li className="cart-length">{cartItems.length}</li>
                        </div>
                        </Link>
                        
                        <button className="login-btn" onClick={()=>{
                            loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
                        }}>{loginBtn}</button>
                        <li >{onlineStatus?"🟢":"🔴"}</li>
                        
                    </ul>
                </div>
        </div>
    )
}

export default Header;