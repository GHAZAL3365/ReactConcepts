import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import "./App.css"
// import Lecture03 from "./Assingments/Lecture_03";
// import Header from "./Assingments/Header/Header";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantsList";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
 <div>
      <Header />
      <h1 className="title">Food Items  List</h1>
      <RestaurantList />

      {/* Other components can be added here */}
      <Footer />
    </div>
  </>
)