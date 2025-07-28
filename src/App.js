import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import "./App.css"

import Header from "./components/Header";
import RestaurantList from "./components/RestaurantsList";
import Footer from "./components/Footer";
import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom";

import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import RestaurantMenuList from "./pages/RestaurantMenuList";


const App = () => {


  return ( <div > 
      <Header />
      {/* <h1 className="title">Food Items  List</h1> */}
      <div  className="container"> <Outlet /></div>
      <Footer />
    </div> )
}
const root = ReactDOM.createRoot(document.getElementById("root"));


const appRoutes = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
    path:  "/",
    element: <RestaurantList />
  },

  {path: "/about", 
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
   {
    path: "/restaurant-menu/:resId",
    element: <RestaurantMenuList />
   }
    ]
  },

 
])


root.render(
  <React.StrictMode>
     <RouterProvider router={ appRoutes} />
  </React.StrictMode>
)