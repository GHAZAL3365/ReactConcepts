import RestaurantCard, { withAvailableRest } from "./RastaurantCard";
import { useState, useEffect, useContext } from "react";
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
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

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

  const ClosedRestaurantsCard = withAvailableRest(RestaurantCard);

  return (
    <>
      <div className="p-2 flex justify-between w-full mb-10 dark:bg-gray-800 dark:text-white">
        <div className=" w-2/6 flex items-center justify-between border-[1.5px] border-amber-500 rounded-md">
          <input
            type="text"
            className="outline-0 p-1.5 w-full"
            placeholder="Search Your Favorite Rastaurant"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-amber-500 text-white p-2  border-amber-500 hover:bg-amber-400 cursor-pointer "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="w-1/2  flex justify-end ">
          <button
            className="rounded-md px-3 py-2 border-[1.5px] border-amber-500 hover:bg-amber-500 hover:text-white text-sm cursor-pointer transition"
            onClick={handleClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center pb-30">
        {loading ? (
          <div className="flex">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        ) : (
          fillteredListOfRestaurants?.map((restaurant, index) =>
            restaurant?.info?.availability?.opened ? (
              <ClosedRestaurantsCard
                key={restaurant.info.id}
                id={restaurant.info.id}
                restData={restaurant?.info}
                navigateOnClick={() =>
                  navigate(`/restaurant-menu/${restaurant?.info?.id}`)
                }
              />
            ) : (
              <RestaurantCard
                key={restaurant.info.id}
                restData={restaurant?.info}
                navigateOnClick={() =>
                  navigate(`/restaurant-menu/${restaurant?.info?.id}`)
                }
              />
            )
          )
        )}
      </div>
    </>
  );
};

export default RestaurantList;
