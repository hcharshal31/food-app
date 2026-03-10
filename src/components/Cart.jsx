import { useSelector } from "react-redux";
import React from "react";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return(
        <div>
            {
                cartItems.map((item, index) => {
                    return (<div key={item?.id} className="h-50 border border-white rounded-xl bg-gray-400 p-4 mb-5">
                                    <div className="w-full h-1/2"><img src={item?.imgSrc} /></div>
                                    <div>
                                        <h4>{item?.name}</h4>
                                        <p>{item?.price}</p>
                                        <button onClick={()=>{handleAdd(item)}}>Add</button>
                                    </div>
                                </div>)
                })
            }
        </div>
    )
}

export default Cart;