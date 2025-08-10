import { render, screen } from "@testing-library/react";
import Contact from "../src/pages/Contact";
import "@testing-library/jest-dom";

test("heading should be rendered", () => {
  // render a component
  render(<Contact />);

  // Query

  const heading = screen.getByRole("heading");

  // assertion
  expect(heading).toBeInTheDocument();
});
