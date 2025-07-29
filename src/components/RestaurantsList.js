import foodListData from "../utills/mockData";
import RestaurantCard from "./RastaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANT_API_URL } from "../utills/constants";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";

const RestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [fillteredListOfRestaurants, setFillteredListOfRestaurants] = useState(
    []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    const fillteredListOfRestaurants = listOfRestaurants.filter(
      (rest) => rest.info.avgRating >= 4.4
    );
    
    setFillteredListOfRestaurants(fillteredListOfRestaurants);
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_API_URL);
      const json = await response.json();

      const restaurants =
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      setListOfRestaurants(restaurants);
      setFillteredListOfRestaurants(restaurants);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
      restaurant?.info.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFillteredListOfRestaurants(filteredRestaurants);
    setSearchQuery("");
  };

  return (
    <>
      <div className="filter-search-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search Your Favorite Rastaurant"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={handleClick}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="rest-container">
        {loading ? (
          <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </>
        ) : (
          fillteredListOfRestaurants.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.info.id}
              restData={restaurant.info}
              navigateOnClick  = {() =>  navigate(`/restaurant-menu/${restaurant.info.id}`)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default RestaurantList;
