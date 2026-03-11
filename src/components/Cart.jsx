import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../utils/cartSlice";
import EmptyCart from "../assets/empty-cart-illustration-svg-download-png-8779492.webp";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeItem(index));
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
      <div className="flex flex-col items-center overflow-scroll">
        {cartItems.map((item, index) => {
          return (
            <div
              key={item?.id}
              className="w-1/2 h-50 border border-white rounded-xl bg-gray-400 p-4 mb-5"
            >
              <div className="w-full h-1/2">
                <img src={item?.imgSrc} />
              </div>
              <div>
                <h4>{item?.name}</h4>
                <p>{item?.price}</p>
                <button
                  className="bg-red-500 text-white rounded-lg px-4 py-1 mt-2 hover:bg-red-600"
                  onClick={() => {
                    handleRemove(index);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        {cartItems.length > 0 && (
          <button
            className="bg-red-500 text-white rounded-lg px-4 py-1 mt-2 hover:bg-red-600"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
    </section>
  );
};

export default Cart;
