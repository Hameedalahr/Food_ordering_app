import RestaurantCard,{withOpenCard} from "./RestaurantCard";
import resList from "../utils/mockData";
import {useContext, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import User from "./User";
 
const Body=() => {
    const [restaurantList,setRestaurantList]=useState([]);
    const [searchList,setSearchList]=useState("");
    const onlineStatus=useOnlineStatus();
    const {setUserName,loggedInUser}=useContext(UserContext)
    const[searchRestaurant,setSearchRestaurant]=useState(restaurantList);
    console.log(restaurantList)
    useEffect(()=>{
        fetchData();    
    },[]);
    const fetchData = async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setRestaurantList(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchRestaurant(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(onlineStatus===false){
        return <h1>Please check your internet!!</h1>
    }

     
   
    return (restaurantList.length===0) ? <Shimmer/>:(
        <div className="body">
            <div className="top-body">
                <div className="search">
                <input type="text" placeholder="Search for Restaurant" className="search-bar" value={searchList} onChange={(e)=>{
                    setSearchList(e.target.value);
                }}></input>
                <button className="searchlogo"><i className="fa-solid fa-magnifying-glass" style={{color:"rgb(255, 255, 255)",padding:"15px"}} onClick={()=>{
                    const filtered_search=restaurantList.filter((res)=>
                        res.info.name.toLowerCase().includes(searchList.toLowerCase())
                    );
                    setSearchRestaurant(filtered_search);
                }}></i></button>
                </div>
                <button className="top-btn" onClick={() =>{
                    const filteredList=restaurantList.filter(
                        (res) => res.info.avgRating>4.5
                    );
            setSearchRestaurant(filteredList);
            }}>Top Restaurants 🔥</button>
            <div className="login-search">
                <p className="login-search-title">UserName</p>
                    <input className="login-search-bar"
                        type="text"
                        value={loggedInUser} 
                        onChange={(e)=>setUserName(e.target.value)}>
                    </input>
            </div>
            </div>
            <div className="welcome-title">
                <h2>Welcome</h2> 
                <h1 className="user-name">{loggedInUser}!!</h1>
            </div>
            <div className="rest-container">
               {
                searchRestaurant.filter((res) => res?.info?.id).map((resName) => (
                    <Link key={resName.info.id} to={"/restaurant/"+ resName.info.id}>
                         <RestaurantCard  resData={resName} />
                    </Link>
                ))}
                
            </div>

        </div>
    )
}

export default Body;    