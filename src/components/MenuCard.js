import { FOOD_ITEM_API } from "../utills/constants";    


const MenuCard = ({menu}) => {
  
    const {name, price, rating, description, ratingCount, imageId } = menu;
    return (
         <div className="menu-card">
          <div className="menu-info">
            <h2>{name || ""}</h2>
            <h3>₹{price/100}</h3>
            <h3>{rating ? rating: "No rating"} ({ratingCount ? ratingCount : "0"})</h3>
            <p>
             {description || "No description available"}
            </p>
          </div>
          <div className="food-img">
            {imageId ? <img src= {FOOD_ITEM_API + imageId} /> : "no image preview"}
          </div>
        </div>
    )
}



export default MenuCard;