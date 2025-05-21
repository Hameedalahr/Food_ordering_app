import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemCategory = ({ categoryData, isCartItem = false }) => {
    const dispatch = useDispatch();

    const addHandler = () => {
        const itemData = {
            id: categoryData?.card?.info?.id || categoryData?.id,
            name: categoryData?.card?.info?.name || categoryData?.name,
            description: categoryData?.card?.info?.description || categoryData?.description,
            price: categoryData?.card?.info?.price || categoryData?.price,
            defaultPrice: categoryData?.card?.info?.defaultPrice || categoryData?.defaultPrice,
            imageId: categoryData?.card?.info?.imageId || categoryData?.imageId
        };
        dispatch(addItem(itemData));
    };

    const removeHandler = () => {
        dispatch(removeItem(categoryData?.id || categoryData?.card?.info?.id));
    };

    return (
        <div className="item-category">
            <div className="item-categories">
                <div className="items-info">
                    <h3>{categoryData?.card?.info?.name || categoryData?.name}</h3>
                    <p className="item-info-description">
                        {categoryData?.card?.info?.description || categoryData?.description}
                    </p>
                    <p className="item-info-price">
                        ₹{(categoryData?.card?.info?.price || categoryData?.price) / 100 || 
                          (categoryData?.card?.info?.defaultPrice || categoryData?.defaultPrice) / 100}
                    </p>
                </div>
                <div className="item-right">
                    <div className="item-img-container">
                        <img 
                            className="item-img" 
                            src={IMG_CDN_URL + (categoryData?.card?.info?.imageId || categoryData?.imageId)} 
                            alt={categoryData?.card?.info?.name || categoryData?.name}
                        />
                    </div>
                    {isCartItem ? (
                        <button className="remove-btn" onClick={removeHandler}>
                            Remove -
                        </button>
                    ) : (
                        <button className="add-btn" onClick={addHandler}>
                            Add +
                        </button>
                    )}
                </div>
            </div>
            {!isCartItem && (
                <>
                    <hr />
                    <br />
                </>
            )}
        </div>
    );
};

export default ItemCategory;