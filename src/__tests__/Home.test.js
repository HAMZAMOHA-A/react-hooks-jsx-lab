
// src/__tests__/Home.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { name, city } from "../data/data";
import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  const { container } = render(<Home />);
  expect(container.querySelector("#home")).toBeInTheDocument();
});

test("renders the h1 with the correct text", () => {
  render(<Home />);
  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  expect(h1).toBeInTheDocument(); // This line checks if the <h1> is present
  expect(h1.tagName).toBe("H1"); // This checks that it's an <h1>
});

test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);
  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  expect(h1).toHaveStyle({ color: "firebrick" }); // This checks the color style
});
