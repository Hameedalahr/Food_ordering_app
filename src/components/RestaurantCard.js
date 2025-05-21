import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) =>{  
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resData?.info;
    return(
        
        <div className="card">
            <div className="image-container">
                <img alt="Biryani image" className="biryani-img" src={IMG_CDN_URL+cloudinaryImageId}></img>
            </div>
            <div className="card-info">
                <h2>{name}</h2>
                <h4>{cuisines}</h4>
                <h4>{avgRating}</h4>
                <h2 className="price">{costForTwo}</h2>
            </div>
        </div>
    )
}



export default RestaurantCard;