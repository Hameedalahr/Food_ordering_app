import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import "../index.css"
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";
// Not '../components/Header'
const AppLayout = () => {
    const [userName,setUserName]=useState();
    useEffect(()=>{
        const data={
            name:"Abdul Hameed"
        }
        setUserName(data.name);
    },[])
    return(
        <div className="app">  
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
                
                    <Header/>
                    <Outlet/>
                    <Footer/>
            </UserContext.Provider>
        </Provider>
        </div>
    )
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/About",
                element:<About />,
            },
            {
                path:"/Contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>,
    },
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

