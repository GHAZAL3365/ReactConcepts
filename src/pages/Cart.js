import React, { useContext } from "react";
import CartContext from "../utills/Context/CartContext";

import { FOOD_ITEM_API } from "../utills/constants";

const Cart = () => {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);
  return (
    <div className=" max-w-9/12 w-full mx-auto px-4 py-2   shadow-md mb-20 bg-gray-50 rounded-md dark:bg-gray-800 dark:text-white ">
      {cartItems.length === 0 && (
        <div className="text-center">
          <h1 className="font-semibold text-lg ">
            Cart is empt. Please Add to cart!
          </h1>
        </div>
      )}
      {cartItems.map((menu) => {
        console.log(menu?.card?.info?.id)
        return (
          <div
            key={menu?.card?.id}
            className=" h-55 p-4  relative flex justify-between items-center  mb-5 border-b-[1.5px] border-gray-200 shadow-blue-50  "
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
            <div className="">
              {menu?.card?.info?.imageId ? (
                <img
                  src={FOOD_ITEM_API + menu?.card?.info?.imageId}
                  className="w-40 h-40 object-cover  rounded-md shadow-md"
                />
              ) : (
                "no image preview"
              )}
            </div>

            <button className="absolute right-2 -top-1 font-semibold cursor-pointer hover:scale-105 transition" onClick={() => {removeItemFromCart(menu?.card?.info?.id)}}> 
              X
            </button>
          </div>
        );
      })}

     {cartItems.length ?   <div className="w-full flex items-center justify-between">
        <button type="button" onClick={clearCart} className="bg-amber-500 rounded-md px-4 py-2 text-white mx-auto cursor-pointer">Clear Cart</button>
      </div>: ""}
    </div>
  );
};

export default Cart;
