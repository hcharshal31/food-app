import React, { useRef, useState } from "react";
// import data from "../utils/menuData.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = ({ searchData, setMainData }) => {
    const searchRef = useRef();

    const cartItems = useSelector((store) => store.cart.items);

    const searchFoodItem = (e) => {
        e.preventDefault();
        const newData = searchData.filter((item) => item.name.toLowerCase().includes(searchRef.current.value.toLowerCase()));
        setMainData(newData);
    }

    const showSideBar = () => {
        
    }


    return(
        <div className="w-full h-25 p-8 flex items-center justify-between bg-black">
            <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} size="2xl" onClick={showSideBar} />

            <form className="w-1/2">
                <input ref={searchRef} className="bg-gray-600 w-4/6 h-10 p-2 text-white rounded-lg" type="text" placeholder="Search food item..." />
                <button className="bg-red-500 w-25 h-10 text-lg text-white border-0 rounded-lg ml-5 font-semibold" onClick={searchFoodItem}>Search</button>
            </form>
            <div className="flex gap-5">
                <button className="bg-red-500 w-25 h-10 text-lg text-white border-0 rounded-lg font-bold">Sign Up</button>
                <button className="bg-red-500 w-25 h-10 text-lg text-white border-0 rounded-lg font-semibold">Login</button>
                <Link to="/cart" className="w-25 h-10 text-lg text-black border-0 rounded-lg bg-white block text-center leading-10 font-semibold">Cart {cartItems.length}</Link>
            </div>
        </div>
    )
}

export default Header;