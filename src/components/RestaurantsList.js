import foodListData from "../utills/mockData";
import RestaurantCard from "./RastaurantCard";

const RestaurantList = () => {
  return (
    <div className="rest-container">
      {foodListData.map((foodItem, index) => (
        <RestaurantCard key={index} foodListData={foodItem} />
      ))}
      
    </div>
  );
};

export default RestaurantList;