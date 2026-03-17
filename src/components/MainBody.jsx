import React, { useEffect, useState } from "react";
import Header from "./Header";
import banner from "../assets/banner.png";
import FoodItem from "./FoodItem";
import Loader from "./Loader";
import useMenu from "../api/hooks/queries/useMenu";
import Error from "./Error";

const MainBody = () => {
  // const [mainData, setMainData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const {data, isLoading, error} = useMenu();

  // const fetchData = async () => {
  //   const data = await getData();
  //   setMainData(data);
  //   setSearchData(data);
  // };

  useEffect(() => {
    if(data){
      setSearchData(data);
    }
  }, [data]);

  if(isLoading) return <Loader />;

  if(error) return <Error />

  return (
    <div className="h-screen relative overflow-y-scroll hide-scrollbar pt-10">
      <Header
        setSearchData={setSearchData}
        mainData={data}
      />
      <img className="w-full pb-8 pt-10" src={banner} />
      <FoodItem searchData={searchData} />
    </div>
  );
};

export default MainBody;
