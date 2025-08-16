import RestaurantList from "../src/components/RestaurantsList";
import { fireEvent, render, screen, act } from "@testing-library/react";
import MOCK__DATA from "../mocks/restaurantsListData.json";

import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK__DATA),
  });
});

it("Should render with search button text ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();
});

it("Should render all card fetched", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("search-input");

  expect(searchInput).toBeInTheDocument();

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(8);
});

it("Should search ResList for burder text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");

  expect(resCardsAfterSearch.length).toBe(1);
});

it("Should render Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );


  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

 fireEvent.click(topRatedBtn);

 const topRatedRestaurants = screen.getAllByTestId("resCard");

 expect(topRatedRestaurants.length).toBe(2)
});
