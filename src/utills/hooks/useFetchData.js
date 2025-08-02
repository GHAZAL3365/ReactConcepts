import { useEffect } from "react";
import { FOOD_MENU_API } from "../constants";



const useFetchData = (id) => {

    useEffect(() => {
        fetchData();
    }, [])
  
   const fetchData = async () => {
     const response =   await fetch(FOOD_MENU_API + id);
     const json = await response.json();

      return json;
   }

   

}


export default useFetchData;