import { FOOD_API_URL } from "../utills/constants";

const RestaurantCard = (props) => {
   const { name, rating, imageId, price } = props.foodListData || {};
    console.log(props);
  return (
    <div className="restaurant-card">
      <img
        src={FOOD_API_URL + imageId
        }
        alt="Restaurant"
      />
      <div className="card-content">
        <h2>{name}</h2>
        <p>lorem dfasfk kdfaskdfjdl</p>
        <p>Rating: {rating} ⭐</p>
        <p>Price: ₹ {price/100}</p>
      </div>
    </div>
  );
};


export default RestaurantCard;