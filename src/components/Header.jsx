import React, { useRef, useState } from "react";
// import data from "../utils/menuData.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ setSearchData, mainData }) => {
  const searchRef = useRef();

  const cartItems = useSelector((store) => store.cart.items);

  const searchFoodItem = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value.trim().toLowerCase();
    if (!searchValue) {
      setSearchData(mainData);
      return;
    }
    const newData = mainData.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setSearchData(newData);
  };

  const showSideBar = () => {};

  return (
    <div className="w-full h-20 px-8 flex items-center justify-between bg-gray-900 fixed top-0 left-0 z-50 border-b border-b-white">
      <FontAwesomeIcon
        icon={faBars}
        style={{ color: "white" }}
        size="2xl"
        onClick={showSideBar}
      />

      <form className="flex-1 mx-6 flex" onSubmit={searchFoodItem}>
        <input
          ref={searchRef}
          className="bg-white w-4/6 h-10 p-2 text-gray-950 rounded-lg"
          type="text"
          placeholder="Search food item..."
        />
        <button
          type="submit"
          className="bg-red-500 w-25 h-10 text-lg text-white border-0 rounded-lg ml-5 font-semibold"
        >
          Search
        </button>
      </form>
      <div className="flex gap-5">
        <button className="bg-red-500 w-25 h-10 text-lg text-white border-0 rounded-lg font-bold">
          Sign Up
        </button>
        <button className="bg-red-500 w-25 h-10 text-lg text-white border-0 rounded-lg font-semibold">
          Login
        </button>
        <Link to="/cart" className="w-10 h-10 relative">
          <FaShoppingCart className="text-white w-10 h-10 leading-10" />{" "}
          <span className="absolute left-4 top-1.5 text-black text-sm font-semibold z-10">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
