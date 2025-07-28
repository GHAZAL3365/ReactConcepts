import "./RestaurantMenuList.css";

const RestaurantMenuList = () => {
  return (
    <div className="menu-container">
      <div className="rest-info">
        <h2 className="rest-title">Restaurant name</h2>
        <div>
          <p>
            <span>4.2 (15K+ ratings)</span> <span>₹400 for two</span>
          </p>
        </div>

        <p>15-20 mins</p>
      </div>

      <div className="menu-card">
        <div className="menu-info">
          <h2>Korean & Thai Roll Chicken Meal</h2>
          <h3>₹569</h3>
          <h3>4.0 (9)</h3>
          <p>Rs. 133 Off on Korean Tangy Roll & Thai Spicy Roll, Large Popcorn, Large Fries & Pepsi PET 475ml</p>
        </div>
        <div className="food-img">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/12/76d3e89f-2eec-4a04-8c0d-bd82bf153d78_6b7961a1-5a28-482a-a58d-c8e3c03fe112.jpg" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuList;
