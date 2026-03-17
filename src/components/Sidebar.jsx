import React from "react";
import "../App.css";
import logo from "../assets/—Pngtree—javanese character with blangkon holding_8999487 1.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="w-full h-full border-r border-white bg-black text-white p-5 overflow-y-auto hide-scrollbar">
            <div className="flex justify-between items-center flex-col pt-10">
                <img src={logo} alt="Logo" />
                <h2 className="name text-2xl font-bold text-center">Famous Chicken Lapeta</h2>
                <p id="slogan" className="text-red-500 text-xl pt-2.5">Eat Repeat</p>
            </div>
            <hr className="my-5" />
            <div className="mt-4">
                <h2 className="font-bold text-2xl text-center pb-4">Quick Links</h2>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/orders">Your Order</Link></li>
                    <li><Link to="/wallet">Wallet</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li>Menu/secondScreen</li>
                </ol>
            </div>
            <hr className="my-5" />
            <div className="mt-4">
            <h2 className="font-bold text-2xl text-center pb-4">About Us</h2>
                <ol >
                    <li>Our Blog</li>
                    <li>Upcoming Dishes</li>
                    <li>Our Story</li>
                    <li>Social Media Links</li>
                </ol>
            </div>
        </div>
    )
}

export default Sidebar;