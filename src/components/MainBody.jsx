import React, { useEffect, useState } from "react";
import Header from "./Header";
import banner from "../assets/banner.png"
import FoodItem from "./FoodItem";
import getData from "../axios/api";
import Loader from "./Loader";

const MainBody = () => {
    
    const [mainData, setMainData] = useState([])
    const [searchData, setSearchData]= useState([]);

    const fetchData = async () => {
        const data = await getData();
        setMainData(data);
        setSearchData(data);
    }

    useEffect(
        () =>{
            fetchData();
        },[]
    )

    return(
        <div className="h-screen overflow-y-scroll hide-scrollbar">
            <Header searchData={searchData} setMainData={setMainData} mainData={mainData} />
            <img className="w-full pb-8 pt-10" src={banner} />
            <FoodItem mainData={mainData} />
        </div>
    )
}

export default MainBody;