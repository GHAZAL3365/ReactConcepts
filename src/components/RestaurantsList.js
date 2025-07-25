import foodListData from "../utills/mockData";
import RestaurantCard from "./RastaurantCard";
import { useState,useEffect } from "react";
import { RESTAURANT_API_URL } from "../utills/constants";
import Shimmer from "./Shimmer";

const RestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants]  = useState([]);
  const [fillteredListOfRestaurants, setFillteredListOfRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
 

  const handleClick = () => {
    const fillteredListOfRestaurants = listOfRestaurants.filter((rest) => rest.avgRating >=4.4);
    // console.log(fillteredFoodItems.length, "items are filtered", listOfRestaurants.length);
    setFillteredListOfRestaurants(fillteredListOfRestaurants);
  }

useEffect( () => {
  fetchData();
  console.log("useEffect called");
  
}, []);

const fetchData = async () => {
  const response = await fetch(RESTAURANT_API_URL);
  const json = await response.json();
 
const restaurants = json.data.cards.filter(card => card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')
  .map(card => card.card.card.info);
  console.log(restaurants, "restaurants data");
   setListOfRestaurants(restaurants);
   setFillteredListOfRestaurants(restaurants);

}

const handleSearch = () => {
  const filteredRestaurants = listOfRestaurants.filter((restaurant) => (restaurant?.name?.toLowerCase().includes(searchQuery.toLowerCase())));
  setFillteredListOfRestaurants(filteredRestaurants) 
  
  ;
  setSearchQuery("");
  
}

  return (
   <>
    <div className="filter-search-container">
      <div className="search">
        <input type="text" placeholder="Search Your Favorite Rastaurant" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <div className="filter">
      <button className="filter-btn" onClick={handleClick}>Top Rated Restaurants</button>
    </div>
    </div>
    <div className="rest-container">
     
     {listOfRestaurants.length === 0 ? 
      <>
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      </> :
     ( fillteredListOfRestaurants.map((foodItem, index) => (
        <RestaurantCard key={foodItem.id} foodListData={foodItem} />
      )))
      }
      
    </div>
   </>
  );
};

export default RestaurantList;