import { FOOD_ITEM_API } from "../utills/constants";
import { useState, useContext } from "react";
import CartContext from "../utills/Context/CartContext";

const MenuCard = ({ menu, showMenu, setShowIndex }) => {
  const { title, itemCards } = menu.card.card;



  const {cartItems, addToCart} = useContext(CartContext);
  console.log("cartItems seeing in MenuCard", cartItems);

  const handleToggle = () => {
    setShowIndex();
  };

  const handleCartItmes = (item) => {
   addToCart(item);
  };

  

  return (
    <div className="w-full px-4 py-2 shadow-md mb-4 bg-gray-50 rounded-md dark:bg-gray-800 dark:text-white">
      {/* header */}
      <div
        className="flex justify-between mb-2 hover:cursor-pointer "
        onClick={handleToggle}
      >
        <p className="font-bold text-lg">
          {title} ({itemCards.length})
        </p>
        <button className="cursor-pointer hover:scale-105">
          {showMenu ? " 🔽" : "🔼"}
        </button>
      </div>

      {/* body of the accodian */}

      {showMenu &&
        itemCards.map((menu) => (
          <div
            key={menu?.card?.id}
            className="flex justify-between items-center  mb-5 border-b-[1.5px] border-gray-200 shadow-blue-50"
          >
            <div className="w-3xl pl-4 py-5">
              <h2 className="font-semibold text-lg ">
                {menu?.card?.info?.name || ""}
              </h2>
              <h3 className="font-semibold">
                ₹
                {menu?.card?.info?.defaultPrice / 100 ||
                  menu?.card?.info?.price / 100}
              </h3>
              <h3 className="font-semibold">
                {menu?.card?.info?.ratings.aggregatedRating.rating
                  ? menu?.card?.info?.ratings.aggregatedRating.rating
                  : "No rating"}{" "}
              </h3>
              <p className="text-sm mt-2 w-2xl wrap-break-word">
                {menu?.card?.info?.description || "No description available"}
              </p>
            </div>
            <div className="relative">
              {menu?.card?.info?.imageId ? (
                <img
                  src={FOOD_ITEM_API + menu?.card?.info?.imageId}
                  className="w-40 object-cover h-full rounded-md shadow-md"
                />
              ) : (
                "no image preview"
              )}
              <button
                className="absolute bottom-0 left-10 z-5 bg-white text-green-700 px-5 py-1.5 hover:bg-gray-50 cursor-pointer rounded-md shadow-md font-semibold"
                onClick={() => handleCartItmes(menu)}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuCard;
