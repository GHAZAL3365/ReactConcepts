
import { useEffect, useState } from "react";
import "./RestaurantMenuList.css";
import MenuCard from "../components/MenuCard";
import { useParams } from "react-router-dom";
import { FOOD_MENU_API } from "../utills/constants";
import MenuShimmer from "../components/MenuShimmer";






const RestaurantMenuList = () => {
  const [resInfo, setResInfo] = useState({
    id: "",
    name: "",
    rating: "",
    totalRatingsString: "",
    costForTwoMessage: "",
    avgRatingString: "",
    sla: {},
  });

  const [menuList, setMenuList] = useState([]);

  const {resId} = useParams();
 

  // rerender due to React.StrictMode in index.js
  // This will call useEffect twice in development mode to help identify side effects
  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    const response = await fetch(
     FOOD_MENU_API + resId
    );

    const json = await response.json();
   

    const {
      id,
      name,
      rating,
      totalRatingsString,
      avgRatingString,
      costForTwoMessage,
      sla,
    } = json?.data?.cards[2]?.card?.card?.info;

    setResInfo({
      id,
      name,
      rating,
      totalRatingsString,
      costForTwoMessage,
      sla,
      avgRatingString,
    });

   

    const menuListData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    const filteredMenuList = menuListData.map((menu) => {
      const info = menu.card.info;

      return {
        id: info.id,
        name: info.name,
        imageId: info.imageId,
        description: info.description,
        price: info.price,
        rating: info?.ratings?.aggregatedRating.rating,
        ratingCount: info?.ratings?.aggregatedRating?.ratingCountV2,
      };
    });
    setMenuList(filteredMenuList);

  
  
  };
 

if(menuList.length === 0 )  return <MenuShimmer />

  return (
    
    (

       
      <div className="menu-container">
        <div className="rest-info">
          <h2 className="rest-title">{resInfo.name}</h2>
          <div>
            <p>
              <span>
                {resInfo.avgRatingString}({resInfo.totalRatingsString})
              </span>{" "}
              <span>{resInfo.costForTwoMessage}</span>
            </p>
          </div>

          <p>{resInfo.sla.slaString}</p>
        </div>

       {menuList.map((menu, index) => (<MenuCard key={menu.id} menu = {menu} />))}
      </div>
    )
  );
};

export default RestaurantMenuList;
