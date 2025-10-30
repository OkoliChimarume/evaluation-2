import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Rise logo or nav text", () => {
  render(<Header />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

