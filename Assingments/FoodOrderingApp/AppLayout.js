import React from "react";
import "./AppLayout.css";

const foodListData = [
  {
    "name": "Sponge cake",
    "rating": "3.5",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/5/8fb99c5d-6d16-4416-ad97-fc83e3da86f0_4cf2d555-6c18-4ee8-b475-eb9708c79643.jpg",
    "price": 8000
  },
  {
    "name": "Milk cake",
    "rating": "5.0",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/5/a0c08bdf-306a-4a23-9fae-dc18c24c2218_bc3ac266-a8c8-4da5-87fc-df9cbb677564.jpg",
    "price": 10000
  },
  {
    "name": "Plum cake",
    "rating": "3.8",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/5caeda1c-821f-4e3b-9948-f445ec256be9_24e8831f-6b3e-4e98-a7d5-3f79641dd32e.jpg",
    "price": 10000
  },
  {
    "name": "Fruit cake",
    "rating": "3.2",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/fdc62540-68ac-4e6b-8d7f-e9f964284c2f_6dcd5529-4ce5-440d-ab35-ed7d86df5a16.jpg",
    "price": 8000
  },
  {
    "name": "Cream bunn",
    "rating": "3.7",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/76251bd3-7cb1-4ef3-9679-3efd1cef65b7_1d06ade1-da24-41c6-b288-ed5bd30611bb.jpg",
    "price": 2000
  },
  {
    "name": "Dilkush",
    "rating": "4.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/5/1032d965-f3d8-4613-8274-b6618aa73e09_8e9d6e36-13d9-49aa-a601-db525457e5b5.jpg",
    "price": 2000
  },
  {
    "name": "Dill pasand",
    "rating": "4.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/e4a0180c-dca4-46e7-8de7-41d5408d74d0_f4e33823-ed7b-402a-a72e-5e479fac00a1.jpg",
    "price": 2000
  },
  {
    "name": "Jam roll",
    "rating": "2.9",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/301c957e-0faa-410f-b9d7-a6fbcd5da581_12097be6-9414-4231-ba30-7e7a23d7704a.jpg",
    "price": 2000
  },
  {
    "name": "Cream roll",
    "rating": "2.6",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/28b6c760-fc8f-43aa-886b-a463ecb3c8da_319030e5-21b7-472c-b945-f8b4718d787c.jpg",
    "price": 2000
  },
  {
    "name": "White vennila roll",
    "rating": "3.1",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/12/7ec799ca-7098-483c-9ce8-b81031414842_58155ab7-3ffb-49f5-8ffe-7235f1cdbe4f.JPG",
    "price": 2000
  },
  {
    "name": "Sweet puff",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/9c99bdb1-27fb-4671-a519-b7772ca5b5d9_94751001-73b7-42ab-8aad-2ddfede200fe.jpg",
    "price": 2000
  },
  {
    "name": "Fruit cake [piece]",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/77a2e329-41ba-4680-9444-a9ab415691ee_68b4b7bc-beff-4d34-b78e-5785870a73bb.jpg",
    "price": 2000
  },
  {
    "name": "Jam bun",
    "rating": "2.1",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/61d47509-8e62-48ed-8c8c-2d563f41c73e_7650e3d4-01af-4459-9bd5-199b49c6636f.jpg",
    "price": 2000
  },
  {
    "name": "Chocolate roll",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/c4cd982b-c23c-498a-ba31-83f8c32b8830_bbec823f-9d83-4a1e-85ad-4348a0843647.jpg",
    "price": 2000
  },
  {
    "name": "Cheese cake [piece]",
    "rating": null,
    "imageId": null,
    "price": 2000
  },
  {
    "name": "Cupcake",
    "rating": null,
    "imageId": null,
    "price": 1000
  },
  {
    "name": "Butterscotch cool cake",
    "rating": "4.1",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/12/1ad58515-2b4f-486c-9760-5cafeda2efe2_a3a792f4-b541-4c79-b682-e00fa6787b76.jpg",
    "price": 26000
  },
  {
    "name": "Chocolate cool cake",
    "rating": "4.0",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/12/fbc3e27c-d0e4-4c19-a3ec-83db0aead921_2bfce3de-0f57-4051-a77b-4a91a36602c6.jpg",
    "price": 30000
  },
  {
    "name": "Pinaple cool cake",
    "rating": "3.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/12/ea2c259b-8489-494d-98ce-194143473a9a_6a121ac5-c565-4a3c-ab1c-b0daee899ae5.jpg",
    "price": 25000
  },
  {
    "name": "Black forest cool cake",
    "rating": "2.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/12/ea2c259b-8489-494d-98ce-194143473a9a_6a121ac5-c565-4a3c-ab1c-b0daee899ae5.jpg",
    "price": 27000
  },
  {
    "name": "Strawberry cool cake",
    "rating": "3.2",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/12/d93443f6-4db5-4121-9f02-fb92fce36258_7beb5812-907f-4320-b200-c35e46c0b5d1.jpg",
    "price": 25000
  },
  {
    "name": "Egg puff",
    "rating": "3.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/43a13553-3ff9-4f28-b868-0bf2eaf824d1_38855d63-6fda-48b5-9fad-a6db347f15bb.jpg",
    "price": 2500
  },
  {
    "name": "Veg puff",
    "rating": "3.8",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/12/32155e9e-5501-4b6d-b04b-ffc2911ebedd_38b4f1b7-f2ec-4e4e-96e7-9ec2e4ae4927.jpg",
    "price": 2500
  },
  {
    "name": "Panner puff",
    "rating": "3.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/80bfb79f-786b-4ac0-b098-8670327a32e3_96bc0a00-659c-4889-b351-028ae0ca87cd.jpg",
    "price": 3000
  },
  {
    "name": "Pineapple cake",
    "rating": null,
    "imageId": null,
    "price": 18000
  },
  {
    "name": "Vannila cakes",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/7124040e-3bb3-4780-8b80-8d1a10fcfc76_9afedac7-8248-4ac4-8c77-935c43934285.jpg",
    "price": 18000
  },
  {
    "name": "Chocolate cake [piece]",
    "rating": "4.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/3a420b0f-a7cc-4b56-97c2-e019bcba250a_382c07fb-a3b0-430e-8f4c-d51a789ad9e0.jpg",
    "price": 2000
  },
  {
    "name": "Chocolate cake",
    "rating": null,
    "imageId": null,
    "price": 20000
  },
  {
    "name": "Strawberry cake",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/eb13002a-9f17-4d02-ae66-e2ac66cbb3e1_4a94d279-4299-4234-8b2e-85db7c7a09b3.jpg",
    "price": 18000
  },
  {
    "name": "Vannila cake [piece]",
    "rating": "3.2",
    "imageId": null,
    "price": 2000
  },
  {
    "name": "Honey cake [piece]",
    "rating": "3.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/0277c187-897d-40ae-8b09-433c0a0d6150_2175fb75-adb1-4c26-abd1-437e27852935.jpg",
    "price": 2000
  },
  {
    "name": "Normal pineapple cake [piece]",
    "rating": "3.8",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/a91c392e-898b-4f2b-b743-d9827000305d_fed53794-09f6-40af-9719-69e4f6f686a5.jpg",
    "price": 2000
  },
  {
    "name": "Strawberry cake [piece]",
    "rating": null,
    "imageId": null,
    "price": 2500
  },
  {
    "name": "Apple cake",
    "rating": null,
    "imageId": null,
    "price": 2000
  },
  {
    "name": "Osmania biscuit",
    "rating": "1.5",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/42d26876-660e-4966-b072-f93c00b0046a_6ba54aec-c05f-4da5-bbb0-199ce6394dfa.jpg",
    "price": 12000
  },
  {
    "name": "Moon biscuit",
    "rating": "4.2",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/a663a4a7-877c-4d8e-8916-d2c78fd92d19_24dcfcf2-e832-4a5a-9818-0442f86787f3.jpg",
    "price": 10000
  },
  {
    "name": "Fruit biscuit",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/ab535b13-f5da-4617-9ea2-4fbca796038e_d0b386aa-b51b-4e25-9746-0c5c30c432e2.jpg",
    "price": 10000
  },
  {
    "name": "Kaju biscuits",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/662e5f1c-d480-442e-9ce7-c43ae922b9db_85a44d78-d8ba-422c-a67d-612c07984d64.jpg",
    "price": 10000
  },
  {
    "name": "Salt biscuit",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/0d4ff16b-f840-45c2-b51b-da38198fad81_00d52c2d-20b7-4c6d-929c-a2ccb65ff8f7.jpg",
    "price": 10000
  },
  {
    "name": "Kaju chocolate",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/4be49bbf-3670-490f-ba16-0da7c3779997_47428f25-5789-4e57-a344-175512c794bc.jpg",
    "price": 10000
  },
  {
    "name": "Nuvvula biscuits",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/be203804-b9b5-4b78-a93e-75c0c9c34132_fb90a86c-1686-4c35-a98f-e534f251423a.jpg",
    "price": 10000
  },
  {
    "name": "Coconut biscuit",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/81ee3a69-aff9-4705-8bda-fe576a3c77f7_69be6f46-d16b-41a7-a91d-ee8f7a912ffc.jpg",
    "price": 10000
  },
  {
    "name": "Pista biscuits",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/a8fef189-1544-4763-aae7-ee1b14a1cff5_88dbbf65-7dd7-45ce-9fbb-e66db7725e2c.jpg",
    "price": 10000
  },
  {
    "name": "Raagi biscuits",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/9a35e711-5e76-465e-9682-966f9bed5adb_36c05374-8d44-42e7-ac68-199ab484e4c0.jpg",
    "price": 10000
  },
  {
    "name": "Choco chip biscuit",
    "rating": "3.2",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/6231f673-a578-4c69-9394-5584619a5b2f_b4a25d7b-ba3d-4c50-8eb1-c4653c41e453.jpg",
    "price": 8000
  },
  {
    "name": "Chocolate pastry",
    "rating": "3.7",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/27/38b93841-490e-465a-995f-993c179b6955_e6ac009e-5dfd-474c-a570-62f867b30b43.jpg",
    "price": 4000
  },
  {
    "name": "Pineapple pastry",
    "rating": "4.2",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/b7fcb1ae-13e6-4f9e-8154-25d0a0f2a74e_d38a1627-3693-4dc7-9abe-c9d9a79af420.jpg",
    "price": 4000
  },
  {
    "name": "Butterscotch pastry",
    "rating": "3.4",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/acade7a2-7ed2-483f-907c-d732e7618f16_6aaed256-c3b9-4afa-8997-213a2b836b9c.jpg",
    "price": 4000
  },
  {
    "name": "Black forest pastry",
    "rating": "3.0",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/d1e55c8b-713e-4e4c-b0eb-ce2a8feac5f0_f2c4e54d-4e82-47eb-b274-afa2ae5a90cd.jpg",
    "price": 4000
  },
  {
    "name": "Bread",
    "rating": "3.2",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/03961894-35f7-4e86-9f79-c35035679f8b_fae13855-2e51-415d-8a5a-925822e511bc.jpg",
    "price": 4000
  },
  {
    "name": "Veg burger",
    "rating": "3.3",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/a015a4bf-0195-49ff-b193-3d994dd9ac23_75b76285-81d4-4dfe-9a03-ca735f64b7b6.jpg",
    "price": 4000
  },
  {
    "name": "Panner burger",
    "rating": "2.5",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/ae7f728a-5f87-4960-b2b9-84aaa5514088_75db2ab9-281f-4258-b2ce-8d041254037a.jpg",
    "price": 3500
  },
  {
    "name": "Pav bunn",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/a07c5b4d-e63f-4b47-9dbe-9a589f36a107_b8eaa2da-ec46-48c5-b559-542156a59662.jpg",
    "price": 3000
  },
  {
    "name": "Bunn",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/13/6619e221-2741-434f-8439-d78fb1bc04e3_4c0eabad-ed2d-4ee6-93a8-3ab95adbe2ef.jpg",
    "price": 1000
  },
  {
    "name": "Tea biscuit",
    "rating": "2.5",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/450026a1-a5e6-4cc1-a382-b57597fbd985_c4c1370f-1b31-4df4-a6a1-63aa88227c8f.jpg",
    "price": 6000
  },
  {
    "name": "Rusk",
    "rating": null,
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/7/799885ea-a74a-4d88-add6-9776efeba918_8179afb5-dae4-4eed-873d-e5b3454ba2ab.jpg",
    "price": 6000
  }
]





const Header = () => {
  return (
    <header>
      <nav className="header">
        <div className="logo">
          <img
            src="https://icon-library.com/images/food-app-icon/food-app-icon-5.jpg"
            alt="logo"
          />
        </div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Offers</li>
          <li id="cart">
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

const RestaurantCard = (props) => {
   const { name, rating, imageId, price } = props.foodListData || {};
    console.log(props);
  return (
    <div className="restaurant-card">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + imageId
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

const RestaurantList = () => {
  return (
    <div className="rest-container">
      {foodListData.map((foodItem, index) => (
        <RestaurantCard key={index} foodListData={foodItem} />
      ))}
      
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Food Ordering App. All rights reserved.</p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <h1 className="title">Food Items  List</h1>
      <RestaurantList />

      {/* Other components can be added here */}
      <Footer />
    </div>
  );
};

export default AppLayout;
