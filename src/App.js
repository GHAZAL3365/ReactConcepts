import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/Header";
import RestaurantList from "./components/RestaurantsList";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import RestaurantMenuList from "./pages/RestaurantMenuList";

import ThemeContext from "./utills/Context/ThemeContext";

const App = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  };

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    

    }
    else {
      document.documentElement.classList.remove("dark")
 
    }
  }, [theme])

  
  return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
     
     <div className="dark:bg-gray-900 dark:text-white">
     
      <Header />
      {/* <h1 className="title">Food Items  List</h1> */}
     
      <div className="px-4 ">
        {" "}
        <Outlet />
      </div>
      <Footer />
    </div>
  
  </ThemeContext.Provider>
   
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestaurantList />,
      },

      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant-menu/:resId",
        element: <RestaurantMenuList />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRoutes} />
  </React.StrictMode>
);
