import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Loader from "./Loader";

const FoodItem = ({ searchData }) => {
  const dispatch = useDispatch();

  function handleAdd(item) {
    dispatch(addItem(item));
    console.log(item);
  }

  if (!searchData) return <Loader />;

  return (
    <div className="flex justify-center pb-10">
      <div className="grid justify-center lg:grid-cols-4 gap-x-10 gap-y-7.5 w-9/10 md:grid-cols-3 sm:grid-cols-1">
        {searchData?.map((item, index) => {
          return (
            <div
              key={item?.id}
              className="h-50 bg-white relative rounded-xl shadow-md 
                transform transition-all duration-300 ease-in-out 
                hover:scale-110 hover:-translate-y-1 hover:shadow-2xl 
                cursor-pointer"
            >
              <div className="w-full h-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG1zLcjrGZwQO_F5Hw5U98JFtqLq2cEC_gw&s"
                  alt={item.name}
                  className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
                />
              </div>
              <div className="p-4 pt-2">
                <h4 className="font-bold">
                  {item?.name?.length > 12
                    ? item?.name.slice(0, 13) + "..."
                    : item?.name}
                </h4>
                <p>${item?.price}</p>
                <button
                  className="bg-red-500 text-white rounded-lg px-4 py-1 mt-2 hover:bg-red-600 absolute bottom-1.5 right-1.5"
                  onClick={() => handleAdd(item)}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodItem;
