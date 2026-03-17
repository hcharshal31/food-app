import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../utils/cartSlice";
import EmptyCart from "../assets/empty-cart-illustration-svg-download-png-8779492.webp";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  let [total, setTotal] = useState(0);

  useEffect(()=>{
    let cartValue = cartItems.reduce((accumulator, item) =>{
      return accumulator += item.price * item.count;
    },0)
    setTotal(cartValue);
  }, [cartItems])
  

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className="text-white h-full flex flex-col justify-center">
      <h1 className="text-center mb-8 mt-5">Your Happy Basket</h1>
      {cartItems.length === 0 && (
        <div className="flex items-center flex-col">
          <img className="w-sm" src={EmptyCart} alt="Empty Cart" />
          <p className="font-bold text-3xl text-center mt-8">
            Your next meal is waiting to be added.
            <br />
            <em className="font-normal">
              Take a look at our
              <Link
                className="text-red-400 hover:text-red-300 hover:underline"
                to="/"
              >
                {" "}
                menu{" "}
              </Link>
              and find your next favorite meal.
            </em>
          </p>
        </div>
      )}
      {cartItems.length > 0 && <div className="flex flex-col items-center overflow-y-scroll hide-scrollbar">
        {cartItems.map((item, index) => {
          return (
            <div
              key={item?.id}
              className="w-1/2 h-50 bg-white rounded-xl bg-gray-400 p-4 mb-5f flex justify-start gap-5 mb-5 relative text-black"
            >
              <div className="w-1/3 h-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG1zLcjrGZwQO_F5Hw5U98JFtqLq2cEC_gw&s" alt={item?.name} />
              </div>
              <div>
                <h4 className="font-bold">{item?.name}</h4>
                <p>{item?.price}<br/>
                <span>Have {item.count} {item.name} for ${item.price * item.count}</span>
                </p>
                <button
                  className="bg-red-500 text-white rounded-lg px-4 py-1 mt-2 hover:bg-red-600 absolute top-1 left-2 shadow-[10px_10px_15px_rgba(0,0,0,0.8)]"
                  onClick={() => {
                    handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
              <p className="font-semibold absolute top-2 right-2">Count {item?.count}</p>
            </div>
          );
        })}
        
        {cartItems.length > 0 && (
          <div className="flex justify-between w-1/2 h-15 items-center">
            <h3 className="font-bold text-2xl">Total - ${total}</h3>
          <button
            className="bg-red-500 text-white rounded-lg px-4 py-1 mt-2 hover:bg-red-600"
          >
            Pay and Place Order
          </button>
          </div>
        )}

{cartItems.length > 0 && (
          <section className="flex justify-start w-1/2">
            <button
              className="bg-red-500 text-white rounded-lg px-4 py-1 mt-7.5 hover:bg-red-600"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </section>
        )}
      </div>}
    </section>
  );
};

export default Cart;
