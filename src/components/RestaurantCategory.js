import { useState } from "react";
import ItemCategory from "./ItemCategory";
const RestaurantCategory=({data,dropDown,showBar})=>{
    // const [dropDown,setDropDown]=useState(false);
    console.log(data)
    const clickHeader=()=>{
        showBar(); 
    }
    return(
        <div className="Restaurant-category">
            <div className="category-header" onClick={clickHeader}>
                <h2>{data.title} ({data.itemCards.length})</h2>
                <i className="fa-solid fa-arrow-down" style={{color:" #000000"}}></i>
           </div>
           <div>    
            {   dropDown&&
                data.itemCards.map((items)=>(
                    <ItemCategory key={items.card.info.id}  categoryData={items}/>
                ))
                
            }
           </div>
            <br></br>
           <hr></hr>
        </div>
    )   
}
export default RestaurantCategory;