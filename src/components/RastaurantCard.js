import { FOOD_API_URL } from "../utills/constants";
import { useState } from "react"; 

const RestaurantCard = (props) => {

   const { name,  avgRating, cloudinaryImageId, costForTwo, cuisines, availability } = props?.restData || {};
   console.log(availability?.opened)

 
   
  return (
    <div className="max-w-70 w-full cursor-pointer hover:scale-105 transition " onClick={props.navigateOnClick}>
      <img
        src={FOOD_API_URL + cloudinaryImageId
        }
        className="overflow-hidden w-full h-50 object-cover rounded-md"
        alt="Restaurant"
      />
      <div className="mt-5">
        <h2 className="text-xl font-bold ">{name}</h2>
        <p><strong>Cuisines</strong>: {cuisines?.join(" , ")}</p>
        <p>Rating: {avgRating === null ? "0": avgRating} ⭐</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};


 export  const withAvailableRest = (RestaurantCard) => {

    return (props) => {
     
        return <div>
               <label className="absolute px-3 py-2  bg-green-700 rounded-md text-white text-sm font-semibold z-5 ">Open</label>
              
            <RestaurantCard  key={props.id}
              restData={props?.restData}
              navigateOnClick={() =>
                navigate(`/restaurant-menu/${props?.info?.id}`)
              }/>
        </div>
    }
}

export default RestaurantCard;