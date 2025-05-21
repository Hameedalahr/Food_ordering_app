import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { IMG_CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const menuCard =useRestaurantMenu(resId);
    const [showItem,setShowItem]=useState(0);
    
    const category=menuCard?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));
    console.log(category)

    if(menuCard===null)return <Shimmer/>;
    const {name, costForTwo,cloudinaryImageId,avgRatingString,locality}=menuCard?.cards[2]?.card?.card?.info;
    return(
        <div className="menu">
            <div className="reshead">
                <div className="resmenu">
                    <h1 className="heading">{name}</h1>
                    <h3 className="heading-price">₹{costForTwo/100} Cost For Two</h3>
                    <p className="heading-rating">{avgRatingString}★</p>
                    <p>{locality}</p>
                </div>
                <div className="resimg-container">
                    <div className="resimg">
                        <img src={IMG_CDN_URL+ cloudinaryImageId}></img>
                    </div>
                </div>
            </div>
            <div>
                {
                    category.map((categories,index)=>(
                        <RestaurantCategory 
                        key={categories?.categoryId || `category-${index}`} 
                        data={categories?.card?.card} 
                        dropDown={index===showItem ? true : false} 
                        showBar={()=>setShowItem(index)}/>
                    ))  
                }
            </div>
        </div>
    );
};
export default RestaurantMenu;