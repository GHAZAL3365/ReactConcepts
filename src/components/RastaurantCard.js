import { FOOD_API_URL } from "../utills/constants";
import { useState } from "react";

const RestaurantCard = (props) => {

   const { name,  avgRating, cloudinaryImageId, costForTwo, cuisines } = props?.restData || {};
   
  return (
    <div className="restaurant-card" onClick={props.navigateOnClick}>
      <img
        src={FOOD_API_URL + cloudinaryImageId
        }
        alt="Restaurant"
      />
      <div className="card-content">
        <h2>{name}</h2>
        <p><strong>Cuisines</strong>: {cuisines?.join(" , ")}</p>
        <p>Rating: {avgRating === null ? "0": avgRating} ⭐</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};


export default RestaurantCard;