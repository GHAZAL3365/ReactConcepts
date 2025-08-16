import RestaurantCard from "../src/components/RastaurantCard";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

import MOCK_DATA  from "../mocks/restaurantCardData.json"


it("Should render the RestaurantCard component with props", () => {
   
    render(<RestaurantCard   {...MOCK_DATA}/>);

   const restName = screen.getByText("Olio - The Wood Fired Pizzeria");

   expect(restName).toBeInTheDocument()
})