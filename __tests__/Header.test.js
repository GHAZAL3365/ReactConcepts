import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../src/components/Header";
import ThemeContext from "../src/utills/Context/ThemeContext";
import CartContext from "../src/utills/Context/CartContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";

it("Should render render header component", () => {
  render(
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: "light" }}>
        <CartContext.Provider value={{ cartItems: [3, 5] }}>
          <Header />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
});

it("Should render header component wiht logout button text", () => {
  render(
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: "light" }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <Header />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});

it("Should render header login button on click", () => {
  render(
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: "light" }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <Header />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();

  fireEvent.click(logoutBtn);
  const loginBtn = screen.getByRole("button", { name: "Login" });

  expect(loginBtn).toBeInTheDocument();
});

it("Should render logo with alt text logo", () => {
  render(
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: "light" }}>
        <CartContext.Provider value={{ cartItems: [] }}>
          <Header />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );

  const imgWitLogoAltText = screen.getByAltText("logo");

  expect(imgWitLogoAltText).toBeInTheDocument();
});

//this test case will not actually toggle between moonIcon and sunIcon -> because onclick it's calling mock function which is doing nothing so theme actually not changing
it("Should toggle between moonIcon and sunIcon on click", () => {
  const toggleMockTheme = jest.fn();

  render(
    <BrowserRouter>
      <ThemeContext.Provider
        value={{ theme: "light", toggleTheme: toggleMockTheme }}
      >
        <CartContext.Provider value={{ cartItems: [] }}>
          <Header />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );

  const moonIcon = screen.getByTestId("moon-icon");

  expect(moonIcon).toBeInTheDocument();

  const togleListEl = screen.getByTestId("toggle-list");

  expect(togleListEl).toBeInTheDocument();

  fireEvent.click(togleListEl);

  //const sunIcon = screen.getByTestId("sun-icon");  -> Will not work

  //expect(sunIcon).toBeInTheDocument();
});

// toggleling theme with using manual rerender method
it("should toggle theme using manual rerender method", () => {
  const toggleMockTheme = jest.fn();

  const { rerender } = render(
    <BrowserRouter>
      <ThemeContext.Provider
        value={{ theme: "light", toggleTheme: toggleMockTheme }}
      >
        <CartContext.Provider value={{ cartItems: [] }}>
          <Header />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );

  const moonIcon = screen.getByTestId("moon-icon");

  expect(moonIcon).toBeInTheDocument();

  const toggleListEl = screen.getByTestId("toggle-list");

  fireEvent.click(toggleListEl);
  expect(toggleMockTheme).toHaveBeenCalledTimes(1);

  rerender(
    <BrowserRouter>
      <ThemeContext.Provider
        value={{ theme: "dark", toggleTheme: toggleMockTheme }}
      >
        <CartContext.Provider value={{ cartItems: [] }}>
          <Header />
        </CartContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );

  const sunIcon = screen.getByTestId("sun-icon");

  expect(sunIcon).toBeInTheDocument();
});

//toggling them with using on state change

const ThemeProviderMock = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
it("Should toggle theme using on click", () => {
  render(
    <BrowserRouter>
      <ThemeProviderMock>
        <CartContext.Provider value={{ cartItems: [] }}>
          <Header />
        </CartContext.Provider>
      </ThemeProviderMock>
    </BrowserRouter>
  );

  const moonIcon = screen.getByTestId("moon-icon");

  expect(moonIcon).toBeInTheDocument();

  const toggleListEl = screen.getByTestId("toggle-list");

  fireEvent.click(toggleListEl);

  const sunIcon = screen.getByTestId("sun-icon");

  expect(sunIcon).toBeInTheDocument();

  

  fireEvent.click(screen.getByTestId("toggle-list"));

  const moonIconAfterToggling = screen.getByTestId("moon-icon")
  expect(moonIconAfterToggling).toBeInTheDocument();
});
