import { useDispatch, useSelector } from "react-redux";
import ItemCategory from "./ItemCategory";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
    const clearCartHandler=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="cart-container">
            <h1>Cart ({cartItems.length} items)</h1>
            <button className="clearcart-btn"onClick={clearCartHandler}>DELETE <i className="fa-solid fa-trash" style={{color: "#ff0000" }}></i></button>
            {cartItems.length === 0 ? (
                <div className="cart-img-loader">
                    <img className="cart-img"src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"></img>
                    <p>Your Cart is Empty</p>
                </div>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <ItemCategory 
                            key={item.id} 
                            categoryData={item} 
                            isCartItem={true} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;