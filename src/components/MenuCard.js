import { FOOD_ITEM_API } from "../utills/constants";    


const MenuCard = ({menu}) => {
  
    const {name, price, rating, description, ratingCount, imageId } = menu;
    return (
         <div className="flex justify-between items-center  mb-5 border-b-[1.5px] border-gray-200 shadow-blue-50">
          <div className="w-3xl pl-4 py-5">
            <h2 className="font-semibold text-lg ">{name || ""}</h2>
            <h3 className="font-semibold">₹{price/100}</h3>
            <h3 className="font-semibold">{rating ? rating: "No rating"} ({ratingCount ? ratingCount : "0"})</h3>
            <p className="text-sm mt-2 w-2xl wrap-break-word">
             {description || "No description available"}
            </p>
          </div>
          <div className="">
            {imageId ? <img src= {FOOD_ITEM_API + imageId} className="w-40 object-cover h-full rounded-md" /> : "no image preview"}
          </div>
        </div>
    )
}



export default MenuCard;