import foodListData from "../utills/mockData";
import RestaurantCard from "./RastaurantCard";
import { useState } from "react";

const RestaurantList = () => {
  const [listOfFoodItems, setListOfFoodItems]  = useState(foodListData);


  const handleClick = () => {
    const fillteredFoodItems = listOfFoodItems.filter((foodItem) => foodItem.rating >=4);
    // console.log(fillteredFoodItems.length, "items are filtered", listOfFoodItems.length);
    setListOfFoodItems(fillteredFoodItems);
  }

  return (
   <>
    <div className="filter">
      <button className="filter-btn" onClick={handleClick}>Top Rated Food Items</button>
    </div>
    <div className="rest-container">
     
      {listOfFoodItems.map((foodItem, index) => (
        <RestaurantCard key={index} foodListData={foodItem} />
      ))}
      
    </div>
   </>
  );
};

export default RestaurantList;