import { useEffect, useState } from "react";
// import "./RestaurantMenuList.css";
import MenuCard from "../components/MenuCard";
import { useParams } from "react-router-dom";
import { FOOD_MENU_API } from "../utills/constants";
import MenuShimmer from "../components/MenuShimmer";


const RestaurantMenuList = () => {
  console.log("component rendered");
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

  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  // rerender due to React.StrictMode in index.js
  // This will call useEffect twice in development mode to help identify side effects

  // const json = useFetchData(resId);
  // console.log(json);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(FOOD_MENU_API + resId);

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
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const filteredMenuList = menuListData.filter(
        (category) =>
          category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setMenuList(filteredMenuList);

      // const filteredMenuList = menuListData.map((menu) => {
      //   const info = menu.card.info;

      //   return {
      //     id: info.id,
      //     name: info.name,
      //     imageId: info.imageId,
      //     description: info.description,
      //     price: info.price,
      //     rating: info?.ratings?.aggregatedRating.rating,
      //     ratingCount: info?.ratings?.aggregatedRating?.ratingCountV2,
      //   };
      // });
      // setMenuList(filteredMenuList);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (menuList.length === 0) return <MenuShimmer />;

  return (
    <div className="max-w-4xl m-auto mb-20">
      <div className="mx-auto mb-5">
        <h2 className="text-2xl mb-2 font-semibold">{resInfo.name}</h2>
        <div>
          <p className="font-semibold text-sm">
            <span>
              {resInfo.avgRatingString}({resInfo.totalRatingsString})
            </span>{" "}
            <span>{resInfo.costForTwoMessage}</span>
          </p>
        </div>

        <p className="font-semibold text-sm capitalize">
          {resInfo.sla.slaString}
        </p>
      </div>

      {menuList.map((menu, index) => (
        <MenuCard
          key={menu.title}
          menu={menu}
          showMenu={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenuList;
